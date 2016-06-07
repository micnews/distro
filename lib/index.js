import createHtmlToArticleJson from 'html-to-article-json';
import articleJsonToAmp from 'article-json-to-amp';
import articleJsonToIA from 'article-json-to-fbia';
import articleJsonToAppleNews from 'article-json-to-apple-news';

const htmlToArticleJson = createHtmlToArticleJson({});

export function format (html, opts = {}) {
  const errors = [];
  const warnings = [];
  const articleJson = htmlToArticleJson(html);

  const amp = articleJsonToAmp(articleJson);
  const instantArticle = articleJsonToIA(articleJson);
  const appleNews = articleJsonToAppleNews({
    title: 'Untitled',
    author: {
      name: ''
    },
    body: articleJson
  }, {
    identifier: 'ID'
  });

  return {
    errors,
    warnings,
    amp,
    instantArticle,
    appleNews: {
      article: appleNews.article.components[1].components /* body only */,
      bundlesToUrls: appleNews.bundlesToUrls
    }
  };
}
