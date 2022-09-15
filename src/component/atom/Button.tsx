import {SerializedStyles} from '@emotion/react';
import styled from '@emotion/styled';
import {pixelize} from '@module/formatter/pixelize';
import stylize from '@module/formatter/stylize';
import {IStyle} from '@module/formatter/stylize/styleOption';

interface IButton extends IStyle {
  children?: any;
  activeStyle?: SerializedStyles | string;
  onClick?: (e: MouseEvent | TouchEvent) => void;
}

export default function Button({children, ...props}: IButton) {
  return <$Button {...props}>{children}</$Button>;
}

const $Button = styled('button')<any>`
  ${(props) => stylize(props)}

  &:active {
    ${({activeStyle}) => activeStyle}
  }
`;
