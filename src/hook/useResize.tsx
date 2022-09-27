import {ReactElement, useCallback, useEffect, useRef, useState} from 'react';
import Wrapper from '@component/atom/Wrapper';

type UseResizeType = {
  Boundary: ({children, ...props}: any) => ReactElement;
  position: number;
};

type UseResizePropsType = {
  borderSide: 'left' | 'right' | 'top' | 'bottom';
  initialPosition: number;
  boundaryWidth?: number;
};

type MousePositionType = {isMoving: boolean; point: number; boundaryPosition: number};

export default function useResize({borderSide, initialPosition, boundaryWidth}: UseResizePropsType): UseResizeType {
  const [mousePosition, setMousePosition] = useState<MousePositionType>({isMoving: false, point: initialPosition, boundaryPosition: 0});
  const isHorizonDirection = borderSide === 'left' || borderSide === 'right';
  const BoundaryRef = useRef<HTMLDivElement>(null);
  // const [boundaryPosition, setBoundaryPosition] = useState<number>(0);

  const mouseMoveHandler = useCallback(
    (e: MouseEvent) => {
      const child = BoundaryRef.current?.children[0];
      const rectPosition: DOMRect | undefined = child?.getBoundingClientRect();
      const {top, right, bottom, left} = {top: rectPosition?.top, right: rectPosition?.right, bottom: rectPosition?.bottom, left: rectPosition?.left};

      mousePosition.isMoving && setMousePosition((mousePosition) => ({...mousePosition, point: isHorizonDirection ? e.clientX : e.clientY, boundaryPosition: right || 0}));

      // setBoundaryPosition(right || 0);
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
    ({children, ...props}: any): ReactElement => {
      return (
        <>
          {/* <Wrapper absolute left={mousePosition.boundaryPosition} size={isHorizonDirection ? [boundaryWidth ?? 4, '100%'] : ['100%', boundaryWidth ?? 4]} bg="blue" /> */}
          <Wrapper ref={BoundaryRef} width={mousePosition.point - 50} {...props}>
            <Wrapper flex size="100%">
              {children}
              <Wrapper
                ml={-4}
                size={isHorizonDirection ? [boundaryWidth ?? 4, '100%'] : ['100%', boundaryWidth ?? 4]}
                bg={mousePosition.isMoving ? 'rgb(0, 122, 204)' : 'transparent'}
                onMouseDown={mouseDownHandler}
                cursor="col-resize"
                hover="background:rgb(0, 122, 204)"
              />
            </Wrapper>
          </Wrapper>
          {mousePosition.isMoving && (
            <Wrapper
              absolute
              size={['100vw', '100vh']}
              cursor="col-resize"
              bg="transparent"
              top={0}
              left={0}
              zIndex={1000}
              onMouseMove={mouseMoveHandler}
              onMouseUp={mouseUpHandler}
            />
          )}
        </>
      );
    },
    [mousePosition]
  );

  return {Boundary, position: mousePosition.point};
}
