# Distro.Mic
Transform article HTML for [Facebook Instant Articles](https://developers.facebook.com/docs/instant-articles), [Apple News](https://developer.apple.com/library/ios/documentation/General/Conceptual/Apple_News_Format_Ref/AppleNewsFormat.html) and [Google AMP](https://www.ampproject.org/docs/get_started/about-amp.html).

Note, this module is designed to transform article body only, other elements of the article page like header, byline and custom stylesheets should be added separately for each format.

## USAGE

Install using npm:

```bash
npm install distro-mic
```

```js
var format = require('distro-mic').format;
var html = '<p>Article HTML</p>'

var output = format(html);
```

Output:

```js
{
  amp: '<article><p>Article HTML</p></article>',
  instantArticle: '<article><p>Article HTML</p></article>',
  appleNews: {
    article: [{
      text: 'Article HTML\n',
      additions: [],
      inlineTextStyles: [],
      role: 'body',
      layout: 'bodyLayout'
    }],
    bundlesToUrls: {}
  }
}

```

## API ENDPOINT

Distro is also available via API endpoint.

```
POST https://distro.mic.com/1.0/format
```

**Post data:**

*Document HTML to transform*

**Query parameters:**

*output* - one of `apple-news`, `instant-article` or `amp`. Return output for specified platform only. Optional.

## LICENSE

MIT
