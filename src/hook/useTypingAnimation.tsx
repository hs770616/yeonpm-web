import Text from "@component/atom/Text";
import styled from "@emotion/styled";
import { ReactElement, useState, useEffect, useCallback } from "react";

interface IUseTypingAnimation {
  /** 문자열 마지막의 밑줄 커서 default: true */
  blankCursor?: boolean;
  /** 각 텍스트의 입력속도 default: 80 */
  speed?: number;
}

export default function useTypingAnimation(
  _string: string,
  option?: IUseTypingAnimation
): (props: any) => ReactElement {
  const stringArr: string[] = Array.from(_string);
  const [effectedText, setEffectedText] = useState<string[]>([]);
  const [isDone, setIsDone] =
    option?.blankCursor !== false
      ? useState<boolean>(false)
      : [true, () => null];

  useEffect(() => {
    effectedText.length < stringArr.length
      ? setTimeout(
          () =>
            setEffectedText([...effectedText, stringArr[effectedText.length]]),
          option?.speed ?? 80
        )
      : setTimeout(() => setIsDone(!isDone), 600);
  }, [effectedText, isDone]);

  const TypedText = useCallback(
    (props: any) => (
      <$AnimatedText {...props}>
        {effectedText}
        {isDone ? "" : "_"}
      </$AnimatedText>
    ),
    [effectedText, isDone]
  );

  return TypedText;
}

const $AnimatedText = styled(Text)<any>``;
