import axios from 'axios'
import service from '@/utils/service'

const baseUrl = '/api/content'
const adminUrl = '/api/admin'

const commentApi = {};

let cacheLocationResult;

commentApi.createComment = async (target, comment, options = {}) => {
    const {
        isGetIpLocation,
        blogAuthorEmail
    } = options;

    const throwErrJson = {
        response: {
            status: 400,
            data: {
                message: 'undefined error'
            }
        }
    };
    const extraJson = {};
    const reqHeaders = {};
    const commentCp = Object.assign({}, comment);
    let cacheSelfIp = undefined;
    let cacheSelfLocation = undefined;
    let reqUrl = `${baseUrl}/${target}/comments`;

    if (isGetIpLocation) {
        try{
            if (!cacheLocationResult) {
                cacheLocationResult = await axios.get(
                    `https://www.qiushaocloud.top/get_ip_location`
                ).then((response)=>{
                    if (response.status >= 400)
                        throw response;
            
                    return response.data;
                });
                console.log('jsonpRequestPromise cacheLocationResult:', cacheLocationResult);
            }
            
            cacheSelfIp = cacheLocationResult.ip;
            cacheSelfLocation = cacheLocationResult.location;
        }catch (err){
            console.error('createComment getIpLocation err:', err, commentCp);
        }
    }


    // FIXME QiuShaoCloud 后台目前没提供头像字段，暂时用 content 来存
    if (comment.avatar)
        extraJson.avatar = comment.avatar;

    if (cacheSelfIp && cacheSelfLocation) {
        extraJson.ip = cacheSelfIp;
        extraJson.location = cacheSelfLocation;
    }
    
    // 评论邮箱为作者的邮箱，则表明是作者要进行评论
    if (blogAuthorEmail && blogAuthorEmail === comment.email) {
        let adminAuthorization = '';
        let adminUserName = '';
        let adminUserPwd = '';

        // 首先查 halo__Access-Token 是否存在
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
                    
                    if((expire + expired_in) < Date.now())
                        adminAuthorization = access_token;
                }
            }catch(err){
                console.error('catch err:', err, ' ,cacheAdminAccessTokenStr:', cacheAdminAccessTokenStr);
            }
        }

        // 没有授权信息，则需要用户输入用户名和密码
        if (!adminAuthorization) {
            adminUserName = prompt('您是博主，需要您进行身份验证，请您输入用户名：',"");
            if (!adminUserName) {
                console.log('您取消了用户名的输入');
                throwErrJson.response.data.message = '您取消了用户名的输入';
                throw throwErrJson;
            }

            adminUserPwd = prompt('您是博主，需要您进行身份验证，请您输入密码：',"");
            if (!adminUserPwd) {
                console.log('您取消了密码的输入');
                throwErrJson.response.data.message = '您取消了密码的输入';
                throw throwErrJson;
            }

            try {
                const loginResult = await axios.post(
                    `${adminUrl}/login`,
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
            }catch (err1) {
                console.error('身份验证失败, 您的用户名/密码不正确, err1:', err1, ' ,errResponse:', err1 && err1.response);
                throwErrJson.response.data.message = '身份验证失败, 您的用户名/密码不正确';
                throw throwErrJson;
            }
        }

        reqUrl = `${adminUrl}/${target}/comments`;
        reqHeaders['Admin-Authorization'] = adminAuthorization;
        delete extraJson.avatar;
    }

    if (Object.keys(extraJson).length) {
        const content = comment.content || '';
        commentCp.content = content
            + '#@QIUSHAOCLOUD@#'
            + window.encodeURIComponent(JSON.stringify(extraJson));
    }

    const reqConfig = {
        url: reqUrl,
        method: 'post',
        data: commentCp,
        headers: reqHeaders
    };

    return service(reqConfig)
        .then(async (response) => {
            const comment = response.data.data;

            // FIXME QiuShaoCloud 后台目前没提供头像字段，暂时用 content 来存
            const contentArr = (comment.content || '').split('#@QIUSHAOCLOUD@#');
            if (contentArr && contentArr.length >= 2) {
                comment.content = contentArr[0] || '';
                try{
                    const {
                        avatar: avatarFromContent,
                        ip: cacheSelfIp,
                        location: cacheSelfLocation
                    } = JSON.parse(window.decodeURIComponent(contentArr[1]));

                    comment.avatarFromContent = avatarFromContent;

                    if (comment.ipAddress === cacheSelfIp)
                        comment.ipLocation = cacheSelfLocation;
                }catch(err){
                    console.error('JSON.parse catch err:', err, contentArr);
                }
            }

            return response;
        });
}

commentApi.listComments = (target, targetId, view = 'tree_view', pagination) => {
    return service({
        url: `${baseUrl}/${target}/${targetId}/comments/${view}`,
        params: pagination,
        method: 'get'
    })
    .then((response) => {
        const comments = response.data.data.content;

        // FIXME QiuShaoCloud 后台目前没提供头像字段，暂时用 content 来存
        for (const comment of comments) {
            // FIXME QiuShaoCloud 后台目前没提供头像字段，暂时用 content 来存
            const contentArr = (comment.content || '').split('#@QIUSHAOCLOUD@#');
            if (contentArr && contentArr.length >= 2) {
                comment.content = contentArr[0] || '';
                try{
                    const {
                        avatar: avatarFromContent,
                        ip: cacheSelfIp,
                        location: cacheSelfLocation
                    } = JSON.parse(window.decodeURIComponent(contentArr[1]));

                    comment.avatarFromContent = avatarFromContent;

                    if (comment.ipAddress === cacheSelfIp)
                        comment.ipLocation = cacheSelfLocation;
                }catch(err){
                    console.error('JSON.parse catch err:', err, contentArr);
                }
            }
        }

        return response;
    });
}


commentApi.getIpLocation = (ip) => {
    return axios.get(
        `https://www.qiushaocloud.top/get_ip_location?ip=${ip}`
    ).then((response) => {
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