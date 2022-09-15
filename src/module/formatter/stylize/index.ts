import {pixelize} from '../pixelize';
import styleOption, {IStyle} from './styleOption';

/**
 * 컴포넌트에 들어오는 모든 속성들 중 스타일관련 속성들만 문자열로 반환하는 함수
 * @param props 컴포넌트에 들어온 모든 속성들
 * @returns 스타일관련 속성들만 문자열로 반환
 */
export default function stylize(props: any): string {
  let style = '';
  const {flex, column, c, cc, marginX, mx, marginY, my, paddingX, px, paddingY, py, size, ...simpleProps}: IStyle = props;
  const complicateStyle = {flex, column, c, cc, marginX, mx, marginY, my, paddingX, px, paddingY, py, size};
  const formattedStyle = styleFomatter(complicateStyle);
  const styleArray = Object.entries({...formattedStyle, ...props})
    .filter((el: [string, any]) => styleOption?.[el[0]])
    .map((el: [string, any]) => `${styleOption[el[0]]}${typeof el[1] !== 'boolean' ? pixelize(el[1]) : ''}`);

  if (styleArray.length) {
    style = `${styleArray.join(';')};`;
  }

  if (props.className?.includes('css-test')) {
    console.log(`%cstyle {\n\n\t%c${style.replace(/;;/g, ';\n\t').replace(/;/g, ';\n\t')}\n%c}`, 'color:skyblue;font-weight:800;', '', 'color:skyblue;font-weight:800;');
  }

  return style;
}

/**
 *
 * @param needFormatProps
 * @returns
 */
function styleFomatter(needFormatProps: any): IStyle {
  let style: IStyle = {};

  const {flex, column, c, cc, marginX, mx, marginY, my, paddingX, px, paddingY, py, size}: IStyle = needFormatProps;

  const isFlex = flex || column || c || cc;
  if (isFlex) style = {flex: isFlex};
  if (marginX || mx) style = {ml: pixelize((marginX || mx)!), mr: pixelize((marginX || mx)!), ...style};
  if (marginY || my) style = {mt: pixelize((marginY || my)!), mb: pixelize((marginY || my)!), ...style};
  if (paddingX || px) style = {pl: pixelize((paddingX || px)!), pr: pixelize((paddingX || px)!), ...style};
  if (paddingY || py) style = {pt: pixelize((paddingY || py)!), pb: pixelize((paddingY || py)!), ...style};
  if (Array.isArray(size)) style = {width: pixelize(size[0]), height: pixelize(size[1]), ...style};
  else if (size) style = {width: pixelize(size), height: pixelize(size), ...style};

  return style;
}
