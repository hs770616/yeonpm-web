import {forwardRef, ReactElement, Ref} from 'react';
import styled from '@emotion/styled';
import styler from '@module/formatter/styler';
import {IStyler} from '@module/formatter/styler/IStyler';

interface IStyleWrapper extends IStyler {
  test?: boolean;
}

interface IUserEvent {
  onClick?: (e: MouseEvent) => void;
  onMouseDown?: (e: MouseEvent) => void;
  onMouseUp?: (e: MouseEvent) => void;
  onMouseMove?: (e: MouseEvent) => void;
}
interface IWrapper extends IStyleWrapper, IUserEvent {
  children?: any;
  id?: string | number;
  className?: string;
  style?: any;
  key?: any;
}

function Wrapper({key, children, style, id, ...props}: IWrapper, ref?: Ref<HTMLDivElement>): ReactElement {
  return (
    <$Wrapper key={key} id={id} style={style} ref={ref} {...props}>
      {children}
    </$Wrapper>
  );
}

export default forwardRef(Wrapper);

const $Wrapper = styled('div')<any>`
  ${(props) => styler(props)};
  ${({test}) => test && `box-shadow: 0px 0px 2px gray inset;`};
`;
