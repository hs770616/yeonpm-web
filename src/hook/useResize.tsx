import {ReactElement, useCallback, useEffect, useRef, useState} from 'react';
import Wrapper from '@component/atom/Wrapper';

type UseResizeType = {
  Boundary: ({children, ...props}: any) => ReactElement;
  position: number;
};

type UseResizePropsType = {
  boundaryPosition: 'left' | 'right' | 'top' | 'bottom';
  boundaryWidth?: number;
};

type MousePositionType = {isMoving: boolean; point: number; boundaryPosition: number};

export default function useResize({boundaryPosition, boundaryWidth}: UseResizePropsType): UseResizeType {
  const [mousePosition, setMousePosition] = useState<MousePositionType>({isMoving: false, point: 0, boundaryPosition: 0});
  const isHorizonDirection = boundaryPosition === 'left' || boundaryPosition === 'right';
  const BoundaryRef = useRef<HTMLDivElement>(null);
  // const [boundaryPosition, setBoundaryPosition] = useState<number>(0);

  const mouseMoveHandler = useCallback(
    (e: MouseEvent) => {
      const child = BoundaryRef.current?.children[0];
      const rectPosition: DOMRect | undefined = child?.getBoundingClientRect();
      const {top, right, bottom, left} = {top: rectPosition?.top || 0, right: rectPosition?.right || 0, bottom: rectPosition?.bottom || 0, left: rectPosition?.left || 0};

      console.log('right', right);
      mousePosition.isMoving && setMousePosition((mousePosition) => ({...mousePosition, point: isHorizonDirection ? right : top, boundaryPosition: right || 0}));

      // setBoundaryPosition(right || 0);
    },
    [BoundaryRef, mousePosition]
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
          <Wrapper ref={BoundaryRef} width={mousePosition.point} {...props}>
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
