const marginOption: any = {
  margin: 'margin:',
  m: 'margin:',
  mt: 'margin-top:',
  mr: 'margin-right:',
  mb: 'margin-bottom:',
  ml: 'margin-left:'
};

const paddingOption: any = {
  padding: 'padding:',
  p: 'padding:',
  pt: 'padding-top:',
  pr: 'padding-right:',
  pb: 'padding-bottom:',
  pl: 'padding-left:'
};

const sizeOption: any = {
  width: 'width:',
  maxWidth: 'max-width:',
  minWidth: 'min-width:',
  height: 'height:',
  maxHeight: 'max-height:',
  minHeight: 'min-height:',
  full: 'width:100%;height:100%'
};

const colorOption: any = {
  bg: 'background:',
  background: 'background:',
  color: 'color:'
};

const alignOption: any = {
  flex: 'display:flex',
  c: 'justify-content:center',
  cc: 'align-items:center',
  column: 'flex-direction:column',
  position: 'position:',
  float: 'float:',
  top: 'top:',
  left: 'left:',
  right: 'right:',
  bottom: 'bottom:',
  spaceBetween: 'justify-content:space-between'
};

const cursorOption: any = {
  cursor: 'cursor:',
  pointer: 'cursor:pointer',
  notAllowed: 'cursor:not-allowed',
  progress: 'cursor:progress'
};

const borderOption: any = {
  border: 'border:',
  borderTop: 'border-top:',
  borderRight: 'border-right:',
  borderBottom: 'border-bottom:',
  borderLeft: 'border-left:',
  borderRadius: 'border-radius:'
};

const statusOption: any = {
  childrenStyle: ' ',
  hover: '&:hover{',
  active: '&:active{',
  focus: '&:focus{'
};

const shadowOption: any = {
  boxShadow: 'box-shadow:'
};

export default {
  ...marginOption,
  ...paddingOption,
  ...sizeOption,
  ...colorOption,
  ...alignOption,
  ...cursorOption,
  ...borderOption,
  ...statusOption,
  ...shadowOption
};
