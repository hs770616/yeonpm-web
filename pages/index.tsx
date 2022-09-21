import type {GetServerSideProps, NextPage} from 'next';
import {useEffect, useState} from 'react';
import Splash from '@component/template/Splash';
import Wrapper from '@component/atom/Wrapper';
import BaseLayout from '@component/template/BaseLayout';
import {isLocal} from 'src/nowEnv';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const isRenderMain = context.req.url.includes('tab');
  return {props: {isRenderMain}};
};

const Home: NextPage = (props: any) => {
  const [isRenderMain, setIsRenderMain] = useState<boolean>(props.isRenderMain);

  return (
    <>
      <Splash isRenderMain={isRenderMain} setIsRenderMain={setIsRenderMain} />
      <BaseLayout isRenderMain={isRenderMain} />
      {isLocal ? <DevFlag /> : <></>}
    </>
  );
};

export default Home;

const DevFlag = () => <Wrapper top={'0px'} position="absolute" size={10} bg="red" borderRadius={5} mt={3} ml={3} />;
