import Wrapper from '@component/atom/Wrapper';
import LeftBar from './LeftBar';
import MainContent from './MainContent';
import Bottom from './Bottom';

export default function BaseLayout({isRenderMain}: {isRenderMain: boolean}) {
  return isRenderMain ? (
    <Wrapper column height={'100vh'}>
      <Wrapper width={'100vw'} bg="#1C1C1C" flex style={{flexGrow: 1}}>
        <LeftBar />
        <MainContent />
      </Wrapper>
      <Bottom />
    </Wrapper>
  ) : (
    <></>
  );
}
