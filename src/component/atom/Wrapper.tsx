import styled from "@emotion/styled";
import { IMargin, IPadding } from "@interface/IStyle";
import { pixelize } from "@module/formatter";
import { ReactElement } from "react";

interface IStyleWrapper extends IMargin, IPadding {
  flex?: boolean;
  c?: boolean;
  cc?: boolean;
  background?: string;
  bg?: string;
  width?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  full?: boolean;
  size?: string | number | [string | number, string | number];
  border?: string;
  column?: boolean;
  test?: boolean;
  borderRadius?: string | number;
  pointer?: boolean;
  cursor?: string;
  float?: string;
  onClick?: (e: MouseEvent | TouchEvent) => void;
  position?: "absolute" | "relative" | "fixed" | string;
  top?: string | number;
  left?: string | number;
}

interface IWrapper extends IStyleWrapper {
  children?: any;
  style?: any;
  key?: any;
}

export default function Wrapper({
  key,
  children,
  style,
  ...props
}: IWrapper): ReactElement {
  return (
    <$Wrapper key={key} style={style} {...props}>
      {children}
    </$Wrapper>
  );
}

const $Wrapper = styled("div")<any>`
  ${({ flex, column, c, cc }) =>
    (flex || column || c || cc) && "display: flex;"};
  ${({ column }) => column && `flex-direction: column;`};
  ${({ c }) => c && "align-items: center;"};
  ${({ cc }) => cc && "justify-content: center;"};
  ${({ background }) => background && `backgroundColor: ${background};`};
  ${({ width }) => width && `width: ${pixelize(width)};`};
  ${({ maxWidth }) => maxWidth && `max-width: ${pixelize(maxWidth)};`};
  ${({ minWidth }) => minWidth && `min-width: ${pixelize(minWidth)};`};
  ${({ height }) => height && `height: ${pixelize(height)};`};
  ${({ maxHeight }) => maxHeight && `max-height: ${pixelize(maxHeight)};`};
  ${({ minHeight }) => minHeight && `min-height: ${pixelize(minHeight)};`};
  ${({ full }) => full && `width: 100%; height: 100%;`};
  ${({ size }) =>
    size && Array.isArray(size)
      ? `width: ${pixelize(size[0])}; height: ${pixelize(size[1])};`
      : size && `width: ${pixelize(size)}; height: ${pixelize(size)};`};
  ${({ m }) => m && `margin: ${pixelize(m)};`};
  ${({ mt }) => mt && `margin-top: ${pixelize(mt)};`};
  ${({ mr }) => mr && `margin-right: ${pixelize(mr)};`};
  ${({ mb }) => mb && `margin-bottom: ${pixelize(mb)};`};
  ${({ ml }) => ml && `margin-left: ${pixelize(ml)};`};
  ${({ my }) =>
    my && `margin-top: ${pixelize(my)}; margin-bottom: ${pixelize(my)};`};
  ${({ mx }) =>
    mx && `margin-right: ${pixelize(mx)}; margin-left: ${pixelize(mx)};`};
  ${({ p }) => p && `padding: ${pixelize(p)};`};
  ${({ pt }) => pt && `padding-top: ${pixelize(pt)};`};
  ${({ pr }) => pr && `padding-right: ${pixelize(pr)};`};
  ${({ pb }) => pb && `padding-bottom: ${pixelize(pb)};`};
  ${({ pl }) => pl && `padding-left: ${pixelize(pl)};`};
  ${({ py }) =>
    py && `padding-top: ${pixelize(py)}; padding-bottom: ${pixelize(py)};`};
  ${({ px }) =>
    px && `padding-right: ${pixelize(px)}; padding-left: ${pixelize(px)};`};
  ${({ bg }) => bg && `background: ${bg};`};
  ${({ border }) => border && `border: ${border};`};
  ${({ test }) => test && `box-shadow: 0px 0px 2px gray inset;`};
  ${({ borderRadius }) =>
    borderRadius && `border-radius: ${pixelize(borderRadius)};`};
  ${({ pointer }) => pointer && `cursor: pointer;`};
  ${({ cursor }) => cursor && `cursor: ${cursor};`};
  ${({ float }) => float && `float: ${float};`};
  ${({ position }) => position && `position: ${position};`};
  ${({ top }) => top && `top: ${pixelize(top)};`};
  ${({ left }) => left && `left: ${pixelize(left)};`};
`;
