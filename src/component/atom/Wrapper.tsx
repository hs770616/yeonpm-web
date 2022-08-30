import styled from "@emotion/styled";
import { IMargin, IPadding } from "@interface/IStyle";
import { pixelize } from "@module/formatter";
import { ReactElement } from "react";

interface IStyleWrapper extends IMargin, IPadding {
  flex1?: boolean;
  flex?: number;
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
  testBorder?: boolean;
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
  ${({ column, c, cc }) => (column || c || cc) && "display: flex;"};
  ${({ column }) => column && `flex-direction: column;`};
  ${({ c }) => c && "align-items: center;"};
  ${({ cc }) => cc && "justify-content: center;"};
  ${({ background }) => background && `backgroundColor: ${background};`};
  ${({ bg }) => bg && `backgroundColor: ${bg};`};
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
  ${({ m }) =>
    m &&
    `margin: ${typeof m === "string" && m.includes(" ") ? m : pixelize(m)};`};
  ${({ mt }) => mt && `margin-top: ${pixelize(mt)};`};
  ${({ mr }) => mr && `margin-right: ${pixelize(mr)};`};
  ${({ mb }) => mb && `margin-bottom: ${pixelize(mb)};`};
  ${({ ml }) => ml && `margin-left: ${pixelize(ml)};`};
  ${({ my }) =>
    my && `margin-top:${pixelize(my)};margin-bottom:${pixelize(my)};`};
  ${({ mx }) =>
    mx && `margin-right:${pixelize(mx)};margin-left:${pixelize(mx)};`};
  ${({ p }) =>
    p &&
    `padding: ${typeof p === "string" && p.includes(" ") ? p : pixelize(p)};`};
  ${({ pt }) => pt && `padding-top: ${pixelize(pt)};`};
  ${({ pr }) => pr && `padding-right: ${pixelize(pr)};`};
  ${({ pb }) => pb && `padding-bottom: ${pixelize(pb)};`};
  ${({ pl }) => pl && `padding-left: ${pixelize(pl)};`};
  ${({ py }) =>
    py && `padding-top:${pixelize(py)};padding-bottom:${pixelize(py)};`};
  ${({ px }) =>
    px && `padding-right:${pixelize(px)};padding-left:${pixelize(px)};`};
  ${({ bg }) => bg && `background: ${bg};`};
  ${({ border }) => border && `border: ${border};`};
  ${({ testBorder }) => testBorder && `border: 1px dotted red;`};
`;
