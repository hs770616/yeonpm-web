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

export interface IColor {
  bg?: string;
  background?: string;
  color?: string;
}

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
  spaceBetween?: boolean;
}

export interface ICursor {
  cursor?: string;
  pointer?: boolean;
  notAllowed?: boolean;
  progress?: boolean;
}

export interface IBorder {
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: TextType;
}

export interface IBracket {
  childrenStyle?: string;
  hover?: string;
  active?: string;
  focus?: string;
}

export interface IBoxShadow {
  boxShadow?: string;
}

export interface IStyler extends IMargin, IPadding, ISize, IColor, IAlign, ICursor, IBorder, IBracket, IBoxShadow {}
