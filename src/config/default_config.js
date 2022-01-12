export default {
  size: "normal", // 组件尺寸，normal/small
  autoLoad: true, // 是否自动加载评论
  showUserAgent: true, // 是否显示用户UserAgent信息
  gravatarType: "mm", // gravatar头像类型（可在后台管理里设置）
  gravatarSource: "", // gravatar头像源
  gravatarSourceDefault: "https://cn.gravatar.com/avatar", // gravatar默认头像源
  avatarError: "https://cdn.jsdelivr.net/gh/qiushaocloud/cdn-static@master/halo-comment/default_avatar.jpg", // 头像加载错误时展示的图片
  avatarLoading: "", // 头像加载时展示的图片
  loadingStyle: "default", // 评论加载时的loading样式
  aWord: "欢迎您，请点击此处，动动您的小手指，留下您的👣  ...", // 输入框聚焦时提示的一言
  authorPopup: "点击头像框可以上传您的头像，或者您输入QQ号将自动拉取昵称和头像 ♪(´▽｀)", // 输入昵称时的提示文案
  emailPopup: "您的邮箱将收到回复通知 ๑乛◡乛๑", // 输入邮箱时的提示文案
  urlPopup: "请不要打小广告哦 (^し^)", // 输入网址时的提示文案
  notComment: "还没有评论哦，快来抢占沙发 ♪(´▽｀)", // 无数据时展示的文案
  isAllowUploadAvatar: true // 是否允许上传头像，因为使用的是「即库图床」上传的头像，头像会在该地址(https://img.78al.net/index/gallery.html)上被所有人看到
};
