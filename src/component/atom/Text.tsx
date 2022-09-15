import styled from '@emotion/styled';
import {pixelize} from '@module/formatter/pixelize';
import stylize from '@module/formatter/stylize';
import {IStyle} from '@module/formatter/stylize/styleOption';

interface IText extends IStyle {
  children?: any;
  color?: string;
  fontSize?: string | number;
  font?: string;
  weight?: number;
}

export default function Text({children, ...props}: IText) {
  return <$Text {...props}>{children}</$Text>;
}

const $Text = styled('p')<any>`
  ${(props) => stylize(props)}
  ${({fontSize}) => fontSize && `font-size: ${pixelize(fontSize)};`};
  ${({font}) => font && `font-family: ${font};`};
  ${({weight}) => weight && `font-weight: ${weight};`};
  ${({color}) => color && `color: ${color};`};
`;
