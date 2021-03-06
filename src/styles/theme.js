import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const green        = '#00AA86'
export const blueGray     = '#607D8B'
export const darkRed      = '#C1272D'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = '#90A4AE'

// Palette
export const palette = {
  primary1Color: blueGray,
  primary2Color: green,
  primary3Color: green,
  accent1Color: green,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
