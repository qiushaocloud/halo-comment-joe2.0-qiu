const DEFAULT_ASSETS_ADDR = !(process && process.env && process.env.NODE_ENV === 'production') ? '' : 'https://gcore.jsdelivr.net/gh/qiushaocloud/halo-comment-joe2.0-qiu@master';

export default {
  size: "normal", // 组件尺寸，normal/small
  autoLoad: true, // 是否自动加载评论
  showUserAgent: true, // 是否显示用户UserAgent信息
  gravatarType: "mm", // gravatar头像类型（可在后台管理里设置）
  gravatarSource: "https://sdn.geekzu.org/avatar", // gravatar头像源
  gravatarSourceDefault: "https://cn.gravatar.com/avatar", // gravatar默认头像源
  avatarError: `${DEFAULT_ASSETS_ADDR}/assets/img/default_avatar.jpg`, // 头像加载错误时展示的图片
  avatarLoading: `${DEFAULT_ASSETS_ADDR}/assets/svg/spinner-preloader.svg`, // 头像加载时展示的图片
  loadingStyle: "default", // 评论加载时的loading样式
  aWord: "欢迎您，请点击此处，动动您的小手指，留下您的👣  ...", // 输入框聚焦时提示的一言
  authorPopup: "输入QQ号将自动拉取昵称和头像 ♪(´▽｀)", // 输入昵称时的提示文案
  emailPopup: "您的邮箱将收到回复通知 ๑乛◡乛๑", // 输入邮箱时的提示文案
  urlPopup: "请不要打小广告哦 (^し^)", // 输入网址时的提示文案
  notComment: "还没有评论哦，快来抢占沙发 ♪(´▽｀)", // 无数据时展示的文案
  isAllowUploadAvatar: true, // 是否允许上传头像【注：配合 imgGithubUser、imgGithubRepo、imgGithubRepo 使用】
  imgGithubUser: '', // 上传图片的 github 用户名, 为‘’ 则使用作者的 cdn github 用户：qiushaocloud-cdn，默认为''
  imgGithubRepo: '', // 上传图片的 github 仓库，为 ‘’ 则会自动生成仓库名：hcqcdnimgs_${year}_${month}，默认为''
  imgGithubApiToken: '', // 上传图片的 github 授权 token, 为‘’ 则使用作者的 cdn github 用户的授权token，默认为''【注：关于设置 token，请参考：https://www.qiushaocloud.top/2022/07/03/zhuan-zai-github-picgo.html】
  isGetIpLocation: true, // 是否获取评论者的地理位置
  blogAuthorNickname: "", // 设置博主昵称，当输入博主昵称时则自动输入 blogAuthorEmail 和 blogAuthorSite
  blogAuthorSite: "", // 设置博主站点，当输入博主昵称时则自动输入 blogAuthorEmail 和 blogAuthorNickname
  blogAuthorEmail: "", // 设置博主邮箱，则允许博主在博客中进行评论，如果没有授权，则需要进行登录授权，另外输入博主邮箱时则自动输入 blogAuthorSite 和 blogAuthorNickname
  blogAdminUserName: "", // 博客管理的用户名，配置后进行登录时免输入用户名
  getIpApiAddr: 'https://www.qiushaocloud.top/get_ip_location', // 获取 IP 的 API 地址，没有配置默认为： https://www.qiushaocloud.top/get_ip_location 【注意：必须使用作者提供的获取 IP 服务，或者自己实现的接口必须遵循作者现有的借口请求参数和返回结果】
  haloApiHost: '', // 指定 Halo 相关 API 的域名，为 ‘’ 表示使用当前域名，缺省为‘’,
  assetsAddr: DEFAULT_ASSETS_ADDR, // 评论组件所需的 assets 资源地址，没有配置则采用默认为: https://gcore.jsdelivr.net/gh/qiushaocloud/halo-comment-joe2.0-qiu@master
  isDelete2Recycle: true // 博主点击删除评论，是否只将评论放入回收站，如果为 true 则放入回收站，为 false 则永久删除，默认为true
};
