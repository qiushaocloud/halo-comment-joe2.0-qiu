import axios from 'axios'
import service from '@/utils/service'

const baseUrl = '/api/content';
const adminUrl = '/api/admin';

const commentApi = {};

let cacheLocationResult;

const blogAuthorLogin = async (commentConfigs = {}) => {
    const throwErrJson = {
        response: {
            status: 400,
            data: {
                message: 'undefined error'
            }
        }
    };
    let adminAuthorization = '';
    let adminUserName = '';
    let adminUserPwd = '';

    const {
        haloApiHost = '',
        blogAdminUserName
    } = commentConfigs;

    if (blogAdminUserName) {
        adminUserName = blogAdminUserName;
    }else {
        adminUserName = prompt('「身份验证」您是博主，请输入用户名:',"");
        if (!adminUserName) {
            console.log('您取消了用户名的输入');
            throwErrJson.response.data.message = '您取消了用户名的输入';
            throw throwErrJson;
        }
    }

    adminUserPwd = prompt('「身份验证」您是博主，请输入密码:',"");
    if (!adminUserPwd) {
        console.log('您取消了密码的输入');
        throwErrJson.response.data.message = '您取消了密码的输入';
        throw throwErrJson;
    }

    try {
        const loginResult = await axios.post(
            `${haloApiHost + adminUrl}/login`,
            {
                // "authcode": "string",
                "password": adminUserPwd,
                "username": adminUserName
            }
        );

        if (loginResult.status >= 400) {
            console.error('身份验证失败, 您的用户名/密码不正确, loginResult:', loginResult);
            throwErrJson.response.data.message = '身份验证失败, 您的用户名/密码不正确';
            throw throwErrJson;
        }

        adminAuthorization = loginResult.data.data.access_token;
        localStorage.setItem('halo__Access-Token', JSON.stringify({
            expire: Date.now(),
            value: loginResult.data.data
        }));

        return {
            adminUserName,
            adminUserPwd,
            adminAuthorization
        };
    }catch (err1) {
        console.error('身份验证失败, 您的用户名/密码不正确, err1:', err1, ' ,errResponse:', err1 && err1.response);
        throwErrJson.response.data.message = '身份验证失败, 您的用户名/密码不正确';
        throw throwErrJson;
    } 
}

const getCacheAdminAuthorization = () => {
    let adminAuthorization = undefined;

    const cacheAdminAccessTokenStr = localStorage.getItem('halo__Access-Token');
    if (cacheAdminAccessTokenStr) {
        try{
            const {
                expire,
                value
            } = JSON.parse(cacheAdminAccessTokenStr);

            if (expire && value && typeof value === 'object') {
                const {
                    access_token,
                    expired_in
                    // refresh_token
                } = value;
                
                if((expire + (expired_in * 1000)) > Date.now())
                    adminAuthorization = access_token;
            }
        }catch(err){
            console.error('catch err:', err, ' ,cacheAdminAccessTokenStr:', cacheAdminAccessTokenStr);
        }
    }

    return adminAuthorization;
}

const formatResComment = (resComment) => {
    // TODO QiuShaoCloud 后台目前没提供数据扩展字段，暂时用 content 来存
    const contentTmp =  (resComment.content || '').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
    const contentArr = contentTmp.split('<i style="display: none;" class="qiushaocloud_comment_extra_json">');
    if (contentArr && contentArr.length >= 2) {
        resComment.content = contentArr[0] || '';
        const extraJsonStr = contentArr[1];
        if (extraJsonStr) {
            try{
                const {
                    avatar: avatarFromContent,
                    ip: cacheSelfIp,
                    location: cacheSelfLocation
                } = JSON.parse(window.decodeURIComponent(extraJsonStr.substring(0, extraJsonStr.lastIndexOf('</i>'))));
    
                resComment.avatarFromContent = avatarFromContent;
    
                if (resComment.ipAddress === cacheSelfIp)
                    resComment.ipLocation = cacheSelfLocation;
            }catch(err){
                console.error('JSON.parse catch err:', err, contentArr, resComment);
            }
        }
    }

    const childrenArr = resComment.children;
    if (childrenArr && Array.isArray(childrenArr) && childrenArr.length) {
        for (const childrenComment of childrenArr) {
            formatResComment(childrenComment);
        }
    }
}

const adminService = async (
    reqConfig,
    commentConfigs = {},
    commentEmail
) => {
    reqConfig.headers = reqConfig.headers || {};

    const {
        blogAuthorEmail
    } = commentConfigs;

    const cacheEmail = commentEmail || localStorage.getItem('qiushaocloud-halo-comment-email');

    let isAdminReq = false;
    let adminAuthorization = '';
    let adminUserName = '';
    let adminUserPwd = '';


    if (blogAuthorEmail && cacheEmail && blogAuthorEmail === cacheEmail) {
        // 首先查 halo__Access-Token 是否存在
        adminAuthorization = getCacheAdminAuthorization();

        // 没有授权信息，则需要用户输入用户名和密码
        if (!adminAuthorization) {
            try{
                const {
                    adminUserName: adminUserNameTmp,
                    adminUserPwd: adminUserPwdTmp,
                    adminAuthorization: adminAuthorizationTmp
                } = await blogAuthorLogin(commentConfigs);

                adminUserName = adminUserNameTmp;
                adminUserPwd = adminUserPwdTmp;
                adminAuthorization = adminAuthorizationTmp;
            } catch (throwErrJson) {
                throw throwErrJson;
            }
        }

        reqConfig.headers['Admin-Authorization'] = adminAuthorization;
        isAdminReq = true;
    }

    let reqResponse = undefined;
    let reqError = undefined;

    try{
        reqResponse = await service(reqConfig);
    }catch(reqError1) {
        // 管理员token失效，需要重新验证
        if (
            isAdminReq
            && !adminUserName
            && !adminUserPwd
            && reqError1.response
            && reqError1.response.status === 401
        ) {
            try{
                const {
                    adminUserName: adminUserNameTmp,
                    adminUserPwd: adminUserPwdTmp,
                    adminAuthorization: adminAuthorizationTmp
                } = await blogAuthorLogin(commentConfigs);

                adminUserName = adminUserNameTmp;
                adminUserPwd = adminUserPwdTmp;
                adminAuthorization = adminAuthorizationTmp;
            } catch (throwErrJson) {
                throw throwErrJson;
            }

            reqConfig.headers['Admin-Authorization'] = adminAuthorization;
         
            try{
                reqResponse = await service(reqConfig);
            }catch(reqError2) {
                reqError = reqError2;
            }
        }else{
            reqError = reqError1;
        }
    }

    if (reqError)
        throw reqError;

    return reqResponse;
}

commentApi.createComment = async (
    target,
    comment,
    commentConfigs = {}
) => {
    const {
        haloApiHost = '',
        isGetIpLocation,
        blogAuthorEmail,
        getIpApiAddr = 'https://www.qiushaocloud.top/get_ip_location'
    } = commentConfigs;

    const extraJson = {};
    const commentCp = Object.assign({}, comment);
    const commentEmail = comment.email;
    let cacheSelfIp = undefined;
    let cacheSelfLocation = undefined;
    let reqUrl = `${haloApiHost + baseUrl}/${target}/comments`;
    let isAdminReq = blogAuthorEmail && blogAuthorEmail === commentEmail;

    if (isGetIpLocation) {
        try{
            if (!cacheLocationResult) {
                cacheLocationResult = await axios.get(`${getIpApiAddr}`)
                    .then((response)=>{
                        if (response.status >= 400)
                            throw response;
                
                        return response.data;
                    });
                console.log('cacheLocationResult:', cacheLocationResult);
            }
            
            cacheSelfIp = cacheLocationResult.ip;
            cacheSelfLocation = cacheLocationResult.location;
        }catch (err){
            console.error('createComment getIpLocation err:', err, commentCp);
        }
    }

    // TODO QiuShaoCloud 后台目前没提供数据扩展字段，暂时用 content 来存
    if (comment.avatar)
        extraJson.avatar = comment.avatar;

    if (cacheSelfIp && cacheSelfLocation) {
        extraJson.ip = cacheSelfIp;
        extraJson.location = cacheSelfLocation;
    }
    
    // 评论邮箱为作者的邮箱，则表明是作者要进行评论
    if (isAdminReq) {
        reqUrl = `${haloApiHost + adminUrl}/${target}/comments`;
        delete extraJson.avatar;
    }

    if (Object.keys(extraJson).length) {
        const content = comment.content || '';
        commentCp.content = content
            + '<i style="display: none;" class="qiushaocloud_comment_extra_json">'
            + window.encodeURIComponent(JSON.stringify(extraJson))
            + '</i>';
    }

    const reqConfig = {
        url: reqUrl,
        method: 'post',
        data: commentCp
    };


    try {
        let reqResponse = undefined;

        if (isAdminReq) {
            reqResponse = await adminService(
                reqConfig,
                commentConfigs,
                commentEmail
            );
        }else {
            reqResponse = await service(reqConfig);
        }
        
        const resComment = reqResponse.data.data;
        formatResComment(resComment);

        return reqResponse;
    }catch (reqError){
        console.error('createComment reqError:', reqError);
        throw reqError;
    }
}

commentApi.deleteComment = async (
    target,
    commentId,
    commentConfigs = {}
) => {
    const {
        isDelete2Recycle = false,
        haloApiHost = ''
    } = commentConfigs;

    const reqConfig = {
        url: `${haloApiHost + adminUrl}/${target}/comments/${commentId}`,
        method: 'delete'
    };

    if (isDelete2Recycle) {
        reqConfig.method = 'put';
        reqConfig.url =  `${haloApiHost + adminUrl}/${target}/comments/${commentId}/status/RECYCLE`;
    }

    return adminService(
        reqConfig,
        commentConfigs
    );
}

commentApi.listComments = (
    target,
    targetId,
    view = 'tree_view',
    pagination,
    commentConfigs = {}
) => {
    const {
        haloApiHost = ''
    } = commentConfigs;

    return service({
        url: `${haloApiHost + baseUrl}/${target}/${targetId}/comments/${view}`,
        params: pagination,
        method: 'get'
    })
    .then((response) => {
        const resComments = response.data.data.content;
        for (const resComment of resComments) {
            formatResComment(resComment);
        }

        return response;
    });
}


commentApi.getIpLocation = (
    ip,
    getIpApiAddr = 'https://www.qiushaocloud.top/get_ip_location'
) => {
    return axios.get(`${getIpApiAddr}?ip=${ip}`).then((response) => {
        if (response.status !== 200)
            throw response;

        return response.data;
    });
};

commentApi.uploadAvatar = (file, token) => {
    const param = new FormData();
    param.append("image", file);
  
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    };

    if (token)
        config.headers.token = token;

    return axios.post(
        "https://img.78al.net/api/upload",
        param,
        config
    );
};

export default commentApi