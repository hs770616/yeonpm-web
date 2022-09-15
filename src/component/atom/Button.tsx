import {SerializedStyles} from '@emotion/react';
import styled from '@emotion/styled';
import {pixelize} from '@module/formatter/pixelize';
import stylize from '@module/formatter/stylize';
import {IStyle} from '@module/formatter/stylize/styleOption';

interface IButton extends IStyle {
  children?: any;
  maxWidth?: string | number;
  minWidth?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  border?: string;
  color?: string;
  borderRadius?: string | number;
  pointer?: boolean;
  cursor?: string;
  float?: string;
  activeStyle?: SerializedStyles | string;
  onClick?: (e: MouseEvent | TouchEvent) => void;
  position?: 'absolute' | 'relative' | 'fixed' | string;
}

export default function Button({children, ...props}: IButton) {
  return <$Button {...props}>{children}</$Button>;
}

const $Button = styled('button')<any>`
  ${(props) => stylize(props)}
  ${({maxWidth}) => maxWidth && `max-width: ${pixelize(maxWidth)};`};
  ${({minWidth}) => minWidth && `min-width: ${pixelize(minWidth)};`};
  ${({maxHeight}) => maxHeight && `max-height: ${pixelize(maxHeight)};`};
  ${({minHeight}) => minHeight && `min-height: ${pixelize(minHeight)};`};
  ${({border}) => border && `border: ${border};`};
  ${({color}) => color && `color: ${color};`};
  ${({borderRadius}) => borderRadius && `border-radius: ${pixelize(borderRadius)};`};
  ${({pointer}) => pointer && `cursor: pointer;`};
  ${({cursor}) => cursor && `cursor: ${cursor};`};
  ${({float}) => float && `float: ${float};`};
  ${({position}) => position && `position: ${position};`};

  &:active {
    ${({activeStyle}) => activeStyle}
  }
`;
