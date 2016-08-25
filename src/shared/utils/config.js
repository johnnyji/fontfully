import Immutable from 'immutable';

// This is the tag used to mark any `<link />` elements
// injected by fontfully, so we can remove them later
export const fontfullyTag = '__fontfully-link-tag__';

export const FONTS = Immutable.fromJS([
  {filename: 'arial', name: 'Arial', src: null},
  {filename: 'comic_sans', name: 'Comic Sans', src: null},
  {filename: 'courier', name: 'Courier', src: null},
  {filename: 'cursive', name: 'Cursive', src: null},
  {filename: 'georgia', name: 'Georgia', src: null},
  {filename: 'lato', name: 'Lato', src: 'https://fonts.googleapis.com/css?family=Lato:300,400,700'},
  {filename: 'monospace', name: 'Monospace', src: null},
  {filename: 'open_sans', name: 'Open Sans', src: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,700'},
  {filename: 'roboto', name: 'Roboto', src: 'https://fonts.googleapis.com/css?family=Roboto:300:400:700'},
  {filename: 'tahoma', name: 'Tahoma', src: null},
  {filename: 'times_new_roman', name: 'Times New Roman', src: null},
]);
