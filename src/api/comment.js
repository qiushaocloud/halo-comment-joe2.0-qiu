import axios from 'axios'
import service from '@/utils/service'
const baseUrl = '/api/content'

const commentApi = {};

let cacheLocationResult;

commentApi.createComment = async (target, comment, isGetIpLocation) => {
    const commentCp = Object.assign({}, comment);

    let cacheSelfIp = undefined;
    let cacheSelfLocation = undefined;

    if (isGetIpLocation) {
        try{
            if (!cacheLocationResult) {
                cacheLocationResult = await axios.get(
                    `https://www.qiushaocloud.top/get_ip_location`
                ).then((response)=>{
                    if (response.status !== 200)
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

    const contentJson = {};

    // FIXME QiuShaoCloud 后台目前没提供头像字段，暂时用 content 来存
    if (comment.avatar)
        contentJson.avatar = comment.avatar;

    if (cacheSelfIp && cacheSelfLocation) {
        contentJson.cacheSelfIp = cacheSelfIp;
        contentJson.cacheSelfLocation = cacheSelfLocation;
    }
    
    if (Object.keys(contentJson).length)
        commentCp.content = comment.content + '#@QIUSHAOCLOUD@#' + window.encodeURIComponent(JSON.stringify(contentJson));

    return service({
        url: `${baseUrl}/${target}/comments`,
        method: 'post',
        data: commentCp
    })
    .then(async (response) => {
        const comment = response.data.data;

        // FIXME QiuShaoCloud 后台目前没提供头像字段，暂时用 content 来存
        const contentArr = (comment.content || '').split('#@QIUSHAOCLOUD@#');
        if (contentArr.length >= 2) {
            comment.content = contentArr[0] || '';
            try{
                const {
                    avatar: avatarFromContent,
                    cacheSelfIp,
                    cacheSelfLocation
                } = window.decodeURIComponent(JSON.parse(contentArr[1]));

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
            const contentArr = (comment.content || '').split('#@QIUSHAOCLOUD@#');
            if (contentArr.length >= 2) {
                comment.content = contentArr[0] || '';
                try{
                    const {
                        avatar: avatarFromContent,
                        cacheSelfIp,
                        cacheSelfLocation
                    } = window.decodeURIComponent(JSON.parse(contentArr[1]));
    
                    comment.avatarFromContent = avatarFromContent;
    
                    if (comment.ipAddress === cacheSelfIp)
                        comment.ipLocation = cacheSelfLocation;
                }catch(err){
                    console.error('JSON.parse catch err:', err);
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