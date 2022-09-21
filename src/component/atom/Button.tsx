import {SerializedStyles} from '@emotion/react';
import styled from '@emotion/styled';
import styler from '@module/formatter/styler';
import {IStyler} from '@module/formatter/styler/IStyler';

interface IButton extends IStyler {
  children?: any;
  activeStyle?: SerializedStyles | string;
  onClick?: (e: MouseEvent | TouchEvent) => void;
}

export default function Button({children, ...props}: IButton) {
  return <$Button {...props}>{children}</$Button>;
}

const $Button = styled('button')<any>`
  ${(props) => styler(props)};

  &:active {
    ${({activeStyle}) => activeStyle};
  }
`;
