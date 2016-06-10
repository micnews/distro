import test from 'tape';
import fs from 'fs';
import path from 'path';
import {format} from '../lib';

function clean (s) {
  return s.replace(/\n\r?\s*/g, '');
}

test('input html', t => {
  const name = path.resolve(__dirname, 'article');
  const input = fs.readFileSync(`${name}.html`, 'utf8');
  const expected = {
    errors: [],
    warnings: [],
    amp: clean(fs.readFileSync(`${name}.amp.html`, 'utf8')),
    instantArticle: clean(fs.readFileSync(`${name}.instant-article.html`, 'utf8')),
    appleNews: JSON.parse(fs.readFileSync(`${name}.apple-news.json`, 'utf8'))
  };

  const expectedBundlesToUrls = {
    'image-0.jpg': '//thumbs.mic.com/MTc5ZmM3ZmNjMCMvSGd5QzRWVHAxQ2lDWklBU2VEdmtUV09QNmpzPS8yM3gzNDM6MzgwOXgyMjEzLzkwMHg0NDUvZmlsdGVyczpxdWFsaXR5KDcwKS9odHRwOi8vczMuYW1hem9uYXdzLmNvbS9wb2xpY3ltaWMtaW1hZ2VzL2Fud2FhdXhha3Ftd2htY3hwNWluM3ZybXV1NGw5ZWZ5bHpsbGNpY2I2dWNtdTRycGU0bmhoa21meGxqZzBxYWwuanBn.jpg',
    'image-1.jpg': '//thumbs.mic.com/M2UwMmFkZGY0NyMvanM2cGZ5Y0tuRHJtOUNxYU9UcXpuTTdnYktzPS8zNngyMDI6MTQ2NHg5MDkvOTAweDQ0NS9maWx0ZXJzOnF1YWxpdHkoNzApL2h0dHA6Ly9zMy5hbWF6b25hd3MuY29tL3BvbGljeW1pYy1pbWFnZXMvOXR3enN0b3R2Mmp0emtiendleG5hdnpuYzljZjNrYndhMjB5d2NkcDh3ZHkwbnFmbzJoa2lleWV1dWZyeHRvYy5qcGc.jpg'
  };

  const actual = format(input);
  t.deepEqual(actual.amp, expected.amp, 'valid amp article');
  t.deepEqual(actual.instantArticle, expected.instantArticle, 'valid instant article');
  t.deepEqual(actual.appleNews.article, expected.appleNews, 'valid apple news article');
  t.deepEqual(actual.appleNews.bundlesToUrls, expectedBundlesToUrls, 'valid apple news bundlesToUrls');
  t.end();
});
