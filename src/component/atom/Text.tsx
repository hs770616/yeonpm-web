import styled from '@emotion/styled';
import {pixelize} from '@module/formatter/pixelize';
import styler from '@module/formatter/styler';
import {IStyler} from '@module/formatter/styler/IStyler';

interface IText extends IStyler {
  children?: any;
  fontSize?: string | number;
  font?: string;
  weight?: number;
}

export default function Text({children, ...props}: IText) {
  return <$Text {...props}>{children}</$Text>;
}

const $Text = styled('p')<any>`
  ${(props) => styler(props)};
  ${({fontSize}) => fontSize && `font-size: ${pixelize(fontSize)};`};
  ${({font}) => font && `font-family: ${font};`};
  ${({weight}) => weight && `font-weight: ${weight};`};
`;
