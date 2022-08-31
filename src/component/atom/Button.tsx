import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { IMargin, IPadding } from "@interface/IStyle";
import { pixelize } from "@module/formatter";

interface IButton extends IMargin, IPadding {
  children?: any;
  background?: string;
  bg?: string;
  width?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  size?: string | number | [string | number, string | number];
  border?: string;
  color?: string;
  borderRadius?: string | number;
  pointer?: boolean;
  cursor?: string;
  float?: string;
  activeStyle?: SerializedStyles | string;
  onClick?: (e: MouseEvent | TouchEvent) => void;
  position?: "absolute" | "relative" | "fixed" | string;
}

export default function Button({ children, ...props }: IButton) {
  return <$Button {...props}>{children}</$Button>;
}

const $Button = styled("button")<any>`
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
  ${({ background }) => background && `backgroundColor: ${background};`};
  ${({ bg }) => bg && `background: ${bg};`};
  ${({ width }) => width && `width: ${pixelize(width)};`};
  ${({ maxWidth }) => maxWidth && `max-width: ${pixelize(maxWidth)};`};
  ${({ minWidth }) => minWidth && `min-width: ${pixelize(minWidth)};`};
  ${({ height }) => height && `height: ${pixelize(height)};`};
  ${({ maxHeight }) => maxHeight && `max-height: ${pixelize(maxHeight)};`};
  ${({ minHeight }) => minHeight && `min-height: ${pixelize(minHeight)};`};
  ${({ size }) =>
    size && Array.isArray(size)
      ? `width: ${pixelize(size[0])}; height: ${pixelize(size[1])};`
      : size && `width: ${pixelize(size)}; height: ${pixelize(size)};`};
  ${({ border }) => border && `border: ${border};`};
  ${({ color }) => color && `color: ${color};`};
  ${({ borderRadius }) =>
    borderRadius && `border-radius: ${pixelize(borderRadius)};`};
  ${({ pointer }) => pointer && `cursor: pointer;`};
  ${({ cursor }) => cursor && `cursor: ${cursor};`};
  ${({ float }) => float && `float: ${float};`};
  ${({ position }) => position && `position: ${position};`};

  &:active {
    ${({ activeStyle }) => activeStyle}
  }
`;
