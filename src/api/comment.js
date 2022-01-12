import axios from 'axios'
import service from '@/utils/service'
const baseUrl = '/api/content'

const commentApi = {}

commentApi.createComment = (target, comment) => {
    const commentCp = Object.assign({}, comment);

    // FIXME QiuShaoCloud 后台目前没提供头像字段，暂时用 content 来存
    if (comment.avatar)
        commentCp.content = comment.content+'###QIUSHAOCLOUD###'+window.encodeURIComponent(comment.avatar);

    return service({
        url: `${baseUrl}/${target}/comments`,
        method: 'post',
        data: commentCp
    })
    .then((response) => {
        const comment = response.data.data;

        // FIXME QiuShaoCloud 后台目前没提供头像字段，暂时用 content 来存
        const contentArr = (comment.content || '').split('###QIUSHAOCLOUD###');
        if (contentArr.length >= 2) {
            comment.content = contentArr[0] || '';
            comment.avatarFromContent = window.decodeURIComponent(contentArr[1]);
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
            const contentArr = (comment.content || '').split('###QIUSHAOCLOUD###');
            if (contentArr.length >= 2) {
                comment.content = contentArr[0] || '';
                comment.avatarFromContent = window.decodeURIComponent(contentArr[1]);
            }
        }

        return response;
    });
}

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