import {pixelize} from '../pixelize';
import {IStyler} from '@module/formatter/styler/IStyler';
import styleOption from './stylerOption';

/**
 * 컴포넌트에 들어오는 모든 속성들 중 스타일관련 속성들만 문자열로 반환하는 함수
 * @param props 컴포넌트에 들어온 모든 속성들
 * @returns 스타일관련 속성들만 문자열로 반환
 */
export default function styler(props: any): string {
  let style = '';
  const {flex, column, c, cc, spaceBetween, marginX, mx, marginY, my, paddingX, px, paddingY, py, size, hover, active, focus, ...simpleProps}: IStyler = props;
  const complicateStyle = {flex, column, c, cc, spaceBetween, marginX, mx, marginY, my, paddingX, px, paddingY, py, size, hover, active, focus};
  const formattedStyle = advancedStyleFomatter(complicateStyle);

  const styleArray = Object.entries({...props, ...formattedStyle})
    .filter((el: [string, any]) => styleOption?.[el[0]])
    .map((el: [string, any]) => `${styleOption[el[0]]}${typeof el[1] !== 'boolean' ? pixelize(el[1]) : ''}`);

  if (styleArray.length) {
    style = `${styleArray.join(';')};`;
  }

  if (props.className?.includes('css-test')) {
    console.log('formattedStyle', formattedStyle);
    console.log('styleArray', styleArray);
    console.log(`%cstyle {\n\n\t%c${style.replace(/;;/g, ';\n\t').replace(/;/g, ';\n\t')}\n%c}`, 'color:skyblue;font-weight:800;', '', 'color:skyblue;font-weight:800;');
  }

  return style;
}

/**
 *
 * @param advancedStyleProps
 * @returns
 */
function advancedStyleFomatter(advancedStyleProps: any): IStyler {
  let style: IStyler = {};

  const {flex, column, c, cc, spaceBetween, marginX, mx, marginY, my, paddingX, px, paddingY, py, size, hover, active, focus}: IStyler = advancedStyleProps;

  const isFlex = flex || column || c || cc || spaceBetween;
  if (isFlex) style = {flex: isFlex};
  if (marginX || mx) style = {ml: pixelize((marginX || mx)!), mr: pixelize((marginX || mx)!), ...style};
  if (marginY || my) style = {mt: pixelize((marginY || my)!), mb: pixelize((marginY || my)!), ...style};
  if (paddingX || px) style = {pl: pixelize((paddingX || px)!), pr: pixelize((paddingX || px)!), ...style};
  if (paddingY || py) style = {pt: pixelize((paddingY || py)!), pb: pixelize((paddingY || py)!), ...style};
  if (Array.isArray(size)) style = {width: pixelize(size[0]), height: pixelize(size[1]), ...style};
  else if (size) style = {width: pixelize(size), height: pixelize(size), ...style};
  if (hover) style = {hover: `${hover}}`, ...style};
  if (active) style = {active: `${active}}`, ...style};
  if (focus) style = {focus: `${focus}}`, ...style};

  return style;
}
