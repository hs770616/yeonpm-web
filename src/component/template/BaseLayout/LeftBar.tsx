import {useCallback, useRef} from 'react';
import Wrapper from '@component/atom/Wrapper';
import styled from '@emotion/styled';
import {VscFiles, VscSearch, VscExtensions, VscBook, VscSourceControl, VscCommentDiscussion, VscDebugLineByLine} from 'react-icons/vsc';
import {Dispatch, ReactElement, SetStateAction, useEffect, useState} from 'react';
import Text from '@component/atom/Text';
import useResize from 'src/hook/useResize';

type IconType = {size: number};
type MenuType = undefined | 'files' | 'search' | 'extensions' | 'sourceControl' | 'book' | 'debugLineByLine' | 'commentDiscussion';

export default function LeftBar() {
  const [checkedMenu, setCheckedMenu] = useState<MenuType>(undefined);

  const LeftElement = useCallback(
    ({
      Icon,
      checkedMenu,
      menuName,
      setCheckedMenu
    }: {
      Icon: ({size}: IconType) => ReactElement;
      menuName: MenuType;
      checkedMenu: MenuType;
      setCheckedMenu: Dispatch<SetStateAction<MenuType>>;
    }) => {
      const [isChecked, setIsChecked] = useState<boolean>(false);

      useEffect(() => {
        checkedMenu === menuName ? setIsChecked(true) : setIsChecked(false);
      }, [checkedMenu]);

      return (
        <li style={{display: 'flex', justifyContent: 'center'}}>
          <Wrapper
            size={48}
            c
            cc
            hover="svg {color: #fff;}"
            childrenStyle={`${isChecked ? 'box-shadow:2px 0px 0px #fff inset;' : ''} svg{color:${isChecked ? '#fff;' : 'rgba(255, 255, 255, 0.4)'};}`}
            pointer
            onClick={() => setCheckedMenu((nowMenu) => (nowMenu === menuName ? undefined : menuName))}
            active={'box-shadow:2px 0px 0px #007fd4 inset;'}
          >
            <Icon size={24} />
          </Wrapper>
        </li>
      );
    },
    []
  );

  const LeftDetail = useCallback(({title}: {title?: string}) => {
    const resize = useResize({boundaryPosition: 'right'});
    return title ? (
      <resize.Boundary minWidth={170}>
        <Wrapper bg="rgb(37, 37, 38)" color="#ccc" size={'100%'} style={{overflow: 'auto'}}>
          <Wrapper size={['100%', 35]} px={8}>
            <Wrapper cc size={'100%'} pl={12}>
              <Text weight={400} fontSize={11}>
                {title}
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </resize.Boundary>
    ) : (
      <></>
    );
  }, []);

  return (
    <$LeftBar size={['auto', '100%']} flex>
      <ul style={{width: 50, height: '100%', background: '#2D2D2D'}}>
        {LeftElements.map((el) => (
          <LeftElement Icon={el.icon} menuName={el.menuName} checkedMenu={checkedMenu} setCheckedMenu={setCheckedMenu} key={el.menuName} />
        ))}
      </ul>
      {/* TODO: leftTitle 변수로 빼기 */}
      {/* TODO: content prop 생성*/}
      <LeftDetail title={LeftElements.filter((el: LeftElementType) => el.menuName === checkedMenu)[0]?.label} />
    </$LeftBar>
  );
}

const $LeftBar = styled(Wrapper)``;

type LeftElementType = {
  icon: ({size}: IconType) => ReactElement;
  menuName: MenuType;
  label: string;
};
const LeftElements: LeftElementType[] = [
  {icon: VscFiles, menuName: 'files', label: 'EXPLORER'},
  {icon: VscSearch, menuName: 'search', label: 'SEARCH'},
  {icon: VscExtensions, menuName: 'extensions', label: 'APPS'},
  {icon: VscSourceControl, menuName: 'sourceControl', label: 'GIT HISTORY'},
  {icon: VscBook, menuName: 'book', label: 'BOOKS'},
  {icon: VscDebugLineByLine, menuName: 'debugLineByLine', label: 'MUSIC'},
  {icon: VscCommentDiscussion, menuName: 'commentDiscussion', label: '1:1 INQUIRE'}
];
