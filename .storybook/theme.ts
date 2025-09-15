import { create } from 'storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'EMI',
  brandUrl: 'https://euromonitorint.sharepoint.com/sites/Euromonitor',
  brandImage:
    'https://www.euromonitor.com/contentassets/a41bf905e5d842a8a462fac0324f0c97/euromonitorinternational_masterlogo_colour_rgb_aw-1.png',
  brandTarget: '_self',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
