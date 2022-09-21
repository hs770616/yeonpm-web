import {ReactElement} from 'react';
import styled from '@emotion/styled';
import styler from '@module/formatter/styler';
import {IStyler} from '@module/formatter/styler/IStyler';

interface IStyleWrapper extends IStyler {
  test?: boolean;
  onClick?: (e: MouseEvent | TouchEvent) => void;
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
  ${(props) => styler(props)};
  ${({test}) => test && `box-shadow: 0px 0px 2px gray inset;`};
`;
