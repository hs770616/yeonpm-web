import styled from '@emotion/styled';
import {pixelize} from '@module/formatter/pixelize';
import stylize from '@module/formatter/stylize';
import {IStyle} from '@module/formatter/stylize/styleOption';
import {ReactElement} from 'react';

interface IStyleWrapper extends IStyle {
  maxWidth?: string | number;
  minWidth?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  full?: boolean;
  border?: string;
  test?: boolean;
  borderRadius?: string | number;
  pointer?: boolean;
  cursor?: string;
  float?: string;
  onClick?: (e: MouseEvent | TouchEvent) => void;
  top?: string | number;
  left?: string | number;
}

interface IWrapper extends IStyleWrapper {
  children?: any;
  className?: string;
  style?: any;
  key?: any;
}

export default function Wrapper({key, children, style, ...props}: IWrapper): ReactElement {
  return (
    <$Wrapper key={key} style={style} {...props}>
      {children}
    </$Wrapper>
  );
}

const $Wrapper = styled('div')<any>`
  ${(props) => stylize(props)}
  ${({test}) => test && `box-shadow: 0px 0px 2px gray inset;`};
`;
