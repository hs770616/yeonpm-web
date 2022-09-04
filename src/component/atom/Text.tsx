import styled from "@emotion/styled";
import { IMargin, IPadding } from "@interface/IStyle";
import { pixelize } from "@module/formatter";

interface IText extends IMargin, IPadding {
  children?: any;
  color?: string;
  size?: string | number;
  font?: string;
  weight?: number;
  position?: "absolute" | "relative" | "fixed" | string;
}

export default function Text({ children, ...props }: IText) {
  return <$Text {...props}>{children}</$Text>;
}

const $Text = styled("p")<any>`
  ${({ size }) => size && `font-size: ${pixelize(size)};`};
  ${({ font }) => font && `font-family: ${font};`};
  ${({ weight }) => weight && `font-weight: ${weight};`};
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
  ${({ color }) => color && `color: ${color};`};
  ${({ position }) => position && `position: ${position};`};
`;
