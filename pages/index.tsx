import type { NextPage } from "next";
import Wrapper from "@component/atom/Wrapper";

const Home: NextPage = () => {
  return (
    <Wrapper size={["100vw", "100vh"]} cc>
      <Wrapper size={["100%", 223]} testBorder maxWidth={600} px={40}>
        <Wrapper size={[34, 44]} testBorder></Wrapper>
        사이트에 연결할 수 없음
      </Wrapper>
    </Wrapper>
  );
};

export default Home;
