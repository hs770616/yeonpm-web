type TextType = string | number;

export interface IMargin {
  margin?: TextType;
  mt?: TextType;
  mr?: TextType;
  mb?: TextType;
  ml?: TextType;
  mx?: TextType;
  marginX?: TextType;
  my?: TextType;
  marginY?: TextType;
  m?: TextType;
}

const marginOption: any = {
  margin: 'margin:',
  m: 'margin:',
  mt: 'margin-top:',
  mr: 'margin-right:',
  mb: 'margin-bottom:',
  ml: 'margin-left:'
};

export interface IPadding {
  padding?: TextType;
  pt?: TextType;
  pr?: TextType;
  pb?: TextType;
  pl?: TextType;
  px?: TextType;
  paddingX?: TextType;
  py?: TextType;
  paddingY?: TextType;
  p?: TextType;
}

const paddingOption: any = {
  padding: 'padding:',
  p: 'padding:',
  pt: 'padding-top:',
  pr: 'padding-right:',
  pb: 'padding-bottom:',
  pl: 'padding-left:'
};

export interface ISize {
  width?: TextType;
  maxWidth?: TextType;
  minWidth?: TextType;
  height?: TextType;
  maxHeight?: TextType;
  minHeight?: TextType;
  full?: boolean;
  size?: [TextType, TextType] | TextType;
}

const sizeOption: any = {
  width: 'width:',
  maxWidth: 'max-width:',
  minWidth: 'min-width:',
  height: 'height:',
  maxHeight: 'max-height:',
  minHeight: 'min-height:',
  full: 'width:100%;height:100%'
};

export interface IColor {
  bg?: string;
  background?: string;
  color?: string;
}

const colorOption: any = {
  bg: 'background:',
  background: 'background:',
  color: 'color:'
};

export interface IAlign {
  flex?: boolean;
  c?: boolean;
  cc?: boolean;
  column?: boolean;
  position?: 'absolute' | 'relative' | 'fixed';
  float?: string;
  top?: TextType;
  left?: TextType;
  right?: TextType;
  bottom?: TextType;
}

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
  bottom: 'bottom:'
};

export interface ICursor {
  cursor?: string;
  pointer?: boolean;
  notAllowed?: boolean;
  progress?: boolean;
}

const cursorOption: any = {
  cursor: 'cursor:',
  pointer: 'cursor:pointer',
  notAllowed: 'cursor:not-allowed',
  progress: 'cursor:progress'
};

export interface IBorder {
  border?: string;
  borderRadius?: TextType;
}

const borderOption: any = {
  border: 'border:',
  borderRadius: 'border-radius:'
};

export interface IStyle extends IMargin, IPadding, ISize, IColor, IAlign, ICursor, IBorder {}

export default {
  ...marginOption,
  ...paddingOption,
  ...sizeOption,
  ...colorOption,
  ...alignOption,
  ...cursorOption,
  ...borderOption
};
