import {ReactElement, useCallback, useState} from 'react';
import Wrapper from '@component/atom/Wrapper';

type UseResizeType = {
  Boundary: ({children}: {children: ReactElement}) => ReactElement;
  position: number;
};

type UseResizePropsType = {
  borderSide: 'left' | 'right' | 'top' | 'bottom';
  initialPosition: number;
  boundaryWidth?: number;
};

type MousePositionType = {isMoving: boolean; point: number};

export default function useResize({borderSide, initialPosition, boundaryWidth}: UseResizePropsType): UseResizeType {
  const [mousePosition, setMousePosition] = useState<MousePositionType>({isMoving: false, point: initialPosition});
  const isHorizonDirection = borderSide === 'left' || borderSide === 'right';

  const mouseMoveHandler = useCallback(
    (e: MouseEvent) => {
      mousePosition.isMoving && setMousePosition((mousePosition) => ({...mousePosition, point: isHorizonDirection ? e.clientX : e.clientY}));
    },
    [mousePosition]
  );
  const mouseDownHandler = useCallback(() => {
    setMousePosition((mousePosition) => ({...mousePosition, isMoving: true}));
  }, [mousePosition]);
  const mouseUpHandler = useCallback(() => {
    setMousePosition((mousePosition) => ({...mousePosition, isMoving: false}));
  }, [mousePosition]);

  const Boundary = useCallback(
    ({children}: {children: ReactElement}) => {
      return (
        <Wrapper
          size={isHorizonDirection ? [boundaryWidth ?? 4, '100%'] : ['100%', boundaryWidth ?? 4]}
          bg="blue"
          cursor="col-resize"
          onMouseDown={mouseDownHandler}
          position="absolute"
        >
          {mousePosition.isMoving && (
            <Wrapper position="absolute" size={['100vw', '100vh']} bg="#ffffff44" top={0} left={0} zIndex={1000} onMouseMove={mouseMoveHandler} onMouseUp={mouseUpHandler} />
          )}
          {children}
        </Wrapper>
      );
    },
    [mousePosition]
  );

  return {Boundary, position: mousePosition.point};
}
