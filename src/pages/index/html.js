const content = require('./content.ejs');
const layout = require('@/layout/layout-normal/html.js');
const pageTitle = '头条新闻';
const pageKeywords = '东方头条,头条新闻,头条,今日新闻头条,头条网,头条新闻,今日头条新闻';
const pageDescription = '东方头条网-东方网旗下《东方头条》是一款会自动学习的资讯软件,它会分析你的兴趣爱好,为你推荐喜欢的内容,并且越用越懂你.就要你好看,东方头条新闻网!';
let canonical = ``;
module.exports = layout({
  pageTitle,
  pageKeywords,
  pageDescription,
  canonical,
  content
});
