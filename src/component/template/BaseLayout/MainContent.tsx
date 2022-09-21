import {useCallback} from 'react';
import Text from '@component/atom/Text';
import Wrapper from '@component/atom/Wrapper';

export default function MainContent() {
  const MainContentTab = useCallback(
    () => (
      <Wrapper bg="#212122" size={['100%', 35]}>
        <Wrapper size={[140, 35]} bg="#1C1C1C" p="9px 10px" c>
          <Text size={17} color="#F9F9F9">
            Wrapper
          </Text>
        </Wrapper>
      </Wrapper>
    ),
    []
  );
  const MainContentBody = useCallback(
    () => (
      <Wrapper p="30px 0 30px 40px" bg="#1C1C1C" width={'100%'} style={{flexGrow: 1}}>
        <Text color="#9BD6FE">hello world</Text>
      </Wrapper>
    ),
    []
  );
  return (
    <Wrapper
      bg="#212122"
      size={['100vw', '100%']}
      className="main-content-wrapper"
      column
      // border="1px solid #3C3C3C"
    >
      <MainContentTab></MainContentTab>
      <MainContentBody></MainContentBody>
    </Wrapper>
  );
}
