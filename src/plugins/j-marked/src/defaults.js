function getDefaults() {
  const baseUrl = window.location.host === 'localhost:8080' ? '' : 'https://githubcdn.qiushaocloud.top/gh/qiushaocloud/halo-comment-joe2.0-qiu@master';
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false,
    hahaEmojiUrl: baseUrl + '/assets/emoji/haha/',
    bilibiliEmojiUrl: baseUrl + '/assets/emoji/bilibili/',
    // guluEmojiUrl: baseUrl+'/assets/emoji/gulu/',
    tiebaEmojiUrl: baseUrl + '/assets/emoji/smilies/'
  };
}

function changeDefaults(newDefaults) {
  module.exports.defaults = newDefaults;
}

module.exports = {
  defaults: getDefaults(),
  getDefaults,
  changeDefaults
};
