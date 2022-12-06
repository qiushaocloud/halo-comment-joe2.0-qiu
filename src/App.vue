<template>
  <div id="app" style="margin-top: 50px;">
    <Comment :id="4" type="sheet" :configs="configs" />
  </div>
</template>

<script>
import Comment from "./components/Comment";

export default {
  name: "app",
  components: {
    Comment,
  },
  data() {
    return {
      configs: {
        blogAuthorNickname: "邱少羽梦", // 设置博主昵称，当输入博主昵称时则自动输入 blogAuthorEmail 和 blogAuthorSite
        blogAuthorSite: "https://www.qiushaocloud.top", // 设置博主站点，当输入博主昵称时则自动输入 blogAuthorEmail 和 blogAuthorNickname
        blogAuthorEmail: "qiushaocloud@126.com", // 设置博主邮箱，则允许博主在博客中进行评论，如果没有授权，则需要进行登录授权，另外输入博主邮箱时则自动输入 blogAuthorSite 和 blogAuthorNickname
        blogAdminUserName: "qiushaocloud", // 博客管理的用户名，配置后进行登录时免输入用户名
        getIpApiAddr: 'https://www.qiushaocloud.top/get_ip_location', // 获取 IP 的 API 地址，没有配置默认为： https://www.qiushaocloud.top/get_ip_location
        haloApiHost: 'https://www.qiushaocloud.top', // / 指定 Halo 相关 API 的域名，为 ‘’ 表示使用当前域名，缺省为‘’
        // assetsAddr: 'https://fastly.jsdelivr.net/gh/qiushaocloud/halo-comment-joe2.0-qiu@master' // 评论组件所需的 assets 资源地址，没有配置则采用默认为: https://fastly.jsdelivr.net/gh/qiushaocloud/halo-comment-joe2.0-qiu@master
      },
    };
  },
};
</script>
