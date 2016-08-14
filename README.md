##Fontfully

Change the font of any website!

---

###How to add a new font

In order to add a new font, we need to make changes in several places. For this example
let's assume the font we want to add is `Roboto` from Google Fonts. Before anything else,
we need to create an object representation of the font with the follow attributes:

```javascript
  {
    filename: 'roboto',
    name: 'Roboto',
    src: 'https://fonts.googleapis.com/css?family=Roboto'
  }
```


**`filename`** - This is the name of the css files and classes that will represent this font.
The convention for fonts with more than one word such as `Indie Flower` is to use `snake_case`
(`indie_flower`)

**`name`** - The name of the font to display to the user

**`src`** - The source for this font. Leave `null` is the font is natively supported and has no
external source.


**Now that you've created the font object. Do the following:**

- Update the `FONTS` array in `src/shared/utils/config.js` with the new font object.
Make sure fonts are organized alphabetically

- Update the `font_styles/` folder with a new stylesheet for your font, using the `filename` as
the name for the css file (`roboto.css`):

```css
* {
  /* Make sure to use `important` here to fully override any fonts
  existing on the site */
  font-family: 'Roboto' !important;
}
```

- If the font has an external source, we want to make sure that source is either
physically written to disk by webpack or included in `popup.html`

- Update `popup/scss/FontOption.scss` with a new class declaration for your new font, once again
using the `filename` as the class:

```css
.roboto { font-family: 'Roboto' }
```

- Update the `web_accessible_resources` portion of `manifest.json` with the path to `font_styles/roboto.css`

---


###Contributors

- [Me!](http://johnnyji.com)
- [Linda Lin!](https://ca.linkedin.com/in/lindasyl)
