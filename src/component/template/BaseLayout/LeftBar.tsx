import {useCallback} from 'react';
import Wrapper from '@component/atom/Wrapper';
import styled from '@emotion/styled';
import {VscFiles, VscSearch, VscExtensions, VscBook, VscSourceControl} from 'react-icons/vsc';
import {Dispatch, ReactElement, SetStateAction, useEffect, useState} from 'react';
import Text from '@component/atom/Text';

type IconType = {size: number};
type MenuType = undefined | 'files' | 'search' | 'extensions' | 'sourceControl' | 'book';

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

  const LeftDetail = useCallback(
    ({checkedMenu}: {checkedMenu: MenuType}) =>
      checkedMenu ? (
        <Wrapper bg="rgb(37, 37, 38)" color="#ccc" minWidth={170}>
          <Wrapper size={['100%', 35]} px={8}>
            <Wrapper cc size={'100%'} pl={12}>
              <Text weight={400} fontSize={11}>
                {menuTitle[checkedMenu]}
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      ) : (
        <></>
      ),
    []
  );

  return (
    <$LeftBar size={['auto', '100%']} flex>
      <ul style={{width: 50, height: '100%', background: '#2D2D2D'}}>
        {LeftElements.map((el) => (
          <LeftElement Icon={el.icon} menuName={el.menuName} checkedMenu={checkedMenu} setCheckedMenu={setCheckedMenu} key={el.menuName} />
        ))}
      </ul>
      <LeftDetail checkedMenu={checkedMenu} />
    </$LeftBar>
  );
}

const $LeftBar = styled(Wrapper)``;

type LeftElementType = {
  icon: ({size}: IconType) => ReactElement;
  menuName: MenuType;
};
const LeftElements: LeftElementType[] = [
  {icon: VscFiles, menuName: 'files'},
  {icon: VscSearch, menuName: 'search'},
  {icon: VscExtensions, menuName: 'extensions'},
  {icon: VscSourceControl, menuName: 'sourceControl'},
  {icon: VscBook, menuName: 'book'}
];
const menuTitle = {files: 'EXPLORER', search: 'SEARCH', extensions: 'APPS', sourceControl: 'GIT HISTORY', book: 'BOOKS'};
