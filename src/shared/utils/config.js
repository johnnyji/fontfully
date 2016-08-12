import Immutable from 'immutable';

// This is the tag used to mark any `<link />` elements
// injected by fontfully, so we can remove them later
export const fontfullyTag = '__fontfully-link-tag__';

export const FONTS = Immutable.fromJS([
  {filename: 'arial', name: 'Arial', src: null},
  {filename: 'courier', name: 'Courier', src: null},
  {filename: 'cursive', name: 'Cursive', src: null},
  {filename: 'monospace', name: 'Monospace', src: null},
  {filename: 'open_sans', name: 'Open Sans', src: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,700'}
]);
