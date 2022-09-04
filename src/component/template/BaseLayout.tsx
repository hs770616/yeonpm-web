import Wrapper from "@component/atom/Wrapper";
import LeftBar from "./LeftBar";
import MainContent from "./MainContent";

export default function BaseLayout({
  isRenderMain,
}: {
  isRenderMain: boolean;
}) {
  return isRenderMain ? (
    <Wrapper full bg="#1C1C1C" flex>
      <LeftBar />
      <MainContent />
    </Wrapper>
  ) : (
    <></>
  );
}
