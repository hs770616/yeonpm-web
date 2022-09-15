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
  height?: TextType;
  size?: [TextType, TextType] | TextType;
}

const sizeOption: any = {
  width: 'width:',
  height: 'height:'
};

export interface IBackground {
  bg?: string;
  background?: string;
}

const backgroundOption: any = {
  bg: 'background:',
  background: 'background:'
};

export interface IAlign {
  flex?: boolean;
  c?: boolean;
  cc?: boolean;
  column?: boolean;
  position?: 'absolute' | 'relative' | 'fixed';
}

const alignOption: any = {
  flex: 'display:flex',
  c: 'justify-content:center',
  cc: 'align-items:center',
  column: 'flex-direction:column',
  position: 'position:'
};

export interface IStyle extends IMargin, IPadding, ISize, IBackground, IAlign {}

export default {
  ...marginOption,
  ...paddingOption,
  ...sizeOption,
  ...backgroundOption,
  ...alignOption
};
