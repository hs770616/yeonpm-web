import type { NextPage } from "next";
import Wrapper from "@component/atom/Wrapper";
import Button from "@component/atom/Button";
import { css } from "@emotion/react";
import Text from "@component/atom/Text";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [smile, setSmile] = useState<boolean>(false);
  const [clickMeVisible, setClickMeVisible] = useState<boolean>(false);
  useEffect(() => void setTimeout(() => setClickMeVisible(true), 1000), []);
  return (
    <Wrapper size={["100vw", "100vh"]} cc>
      <Wrapper size={["100%", 353]} maxWidth={600} px={40} mt={130}>
        <Wrapper size={"100%"} maxHeight={223}>
          <Wrapper flex pointer onClick={() => setSmile((v) => !v)}>
            <Paperio smile={smile} />
            <Text ml={20} mt={55}>
              {clickMeVisible && "click me!"}
            </Text>
          </Wrapper>
          <AppleText size={"25px"} weight={500} color={"#202124"} mb={30}>
            사이트에 연결할 수 있음
          </AppleText>
          <AppleText size={"15px"} weight={400} color={"#5F6368"}>
            yeonpm.com에 오신걸 환영합니다.
          </AppleText>
          <AppleText size={"13.5px"} weight={400} color={"#5F6368"}>
            WELCOME_TO_YEONPM_DOT_COM
          </AppleText>
        </Wrapper>
        <Wrapper size={["100%", 100]} c>
          <Button
            size={[77, 32]}
            bg={"#1A73E8"}
            color="#fff"
            borderRadius={4}
            border="none"
            float="right"
            m="0 0 0 auto"
            pointer
            onClick={(e) => console.log("e", e)}
            activeStyle={css`
              background: #1967d2;
            `}
          >
            새로고침
          </Button>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Home;

const Paperio = ({ smile }: { smile: boolean }) => (
  <Wrapper size={[35, 44]} m={"30px 0 40px"} position="relative">
    {/* 테두리 */}
    <Drawing width={28} xy={[0, 0]} />
    <Drawing height={34} xy={[31, 6]} />
    <Drawing height={37} xy={[0, 3]} />
    <Drawing width={34} xy={[0, 40]} />
    {/* 우측 상단 영역 */}
    {smile ? (
      <>
        <Drawing width={6} xy={[28, 0]} />
        <Drawing xy={[31, 3]} />
        <Drawing xy={[22, 8]} />
        <Drawing xy={[19, 11]} />
        <Drawing xy={[22, 14]} />
      </>
    ) : (
      <>
        <Drawing xy={[28, 3]} />
        <Drawing height={13} xy={[18, 3]} />
        <Drawing width={14} xy={[18, 13]} />
      </>
    )}

    {/* 오른쪽 눈 */}
    <Drawing height={6} xy={[9, 10]} />
    {/* 입 */}
    {smile ? (
      <>
        <Drawing width={10} xy={[12, 31]} />
        <Drawing xy={[9, 28]} />
        <Drawing xy={[22, 28]} />
      </>
    ) : (
      <>
        <Drawing width={10} xy={[12, 28]} />
        <Drawing xy={[9, 31]} />
        <Drawing xy={[22, 31]} />
      </>
    )}
  </Wrapper>
);
const Drawing = (props: any) => (
  <Wrapper
    bg="#535353"
    position="absolute"
    left={props.xy[0]}
    top={props.xy[1]}
    width={3}
    height={3}
    {...props}
  />
);

const AppleText = styled(Text)`
  font-family: Apple SD Gothic Neo;
`;
