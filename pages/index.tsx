import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Splash from "@component/template/Splash";
import BaseLayout from "@component/template/BaseLayout";
import Wrapper from "@component/atom/Wrapper";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const isRenderMain = context.req.url.includes("tab");
  return { props: { isRenderMain } };
};

const Home: NextPage = (props: any) => {
  const [isRenderMain, setIsRenderMain] = useState<boolean>(props.isRenderMain);

  return (
    <>
      <Splash isRenderMain={isRenderMain} setIsRenderMain={setIsRenderMain} />
      <BaseLayout isRenderMain={isRenderMain} />
      <DevFlag />
    </>
  );
};

export default Home;

const DevFlag = () => (
  <Wrapper
    position="absolute"
    size={10}
    bg="red"
    borderRadius={5}
    mt={10}
    ml={10}
  />
);
