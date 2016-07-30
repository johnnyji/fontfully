export default (font) => {
  const {filename, src: fontSrc} = font;
  const cssPath = chrome.extension.getURL(`../../../../font_styles/${filename}.css`);

  // Creates the <link /> tag to the css source that overrides the font
  const cssLink = document.createElement('link');
  cssLink.setAttribute('rel', 'stylesheet');
  cssLink.setAttribute('type', 'text/css');
  cssLink.setAttribute('href', cssPath);

  // If the font requires an external source, we must first include the
  // link to the external source
  if (fontSrc) {
    const srcLink = document.createElement('link');
    srcLink.setAttribute('rel', 'stylesheet');
    srcLink.setAttribute('type', 'text/css');
    srcLink.setAttribute('href', fontSrc);

    document.head.appendChild(srcLink);
  }

  document.head.appendChild(cssLink);
};