# Distro.Mic
Transform article HTML for [Facebook Instant Articles](https://developers.facebook.com/docs/instant-articles), [Apple News](https://developer.apple.com/library/ios/documentation/General/Conceptual/Apple_News_Format_Ref/AppleNewsFormat.html) and [Google AMP](https://www.ampproject.org/docs/get_started/about-amp.html)

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

## LICENSE

MIT
