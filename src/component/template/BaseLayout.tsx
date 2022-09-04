import Wrapper from "@component/atom/Wrapper";
import MainContent from "./MainContent";

export default function BaseLayout({
  isRenderMain,
}: {
  isRenderMain: boolean;
}) {
  return isRenderMain ? (
    <Wrapper>
hello
      <MainContent />
    </Wrapper>
  ) : (
    <></>
  );
}
