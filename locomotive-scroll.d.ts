declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el?: Element | null;
      name?: string;
      offset?: number;
      repeat?: boolean;
      smooth?: boolean;
      direction?: 'vertical' | 'horizontal';
      gestureDirection?: 'vertical' | 'horizontal';
      reloadOnContextChange?: boolean;
      lerp?: number;
      class?: string;
      scrollbarContainer?: false | string;
      scrollbarClass?: string;
      multiplier?: number;
      firefoxMultiplier?: number;
      touchMultiplier?: number;
      resetNativeScroll?: boolean;
      tablet?: {
        smooth: boolean;
        direction: 'vertical' | 'horizontal';
        gestureDirection?: 'vertical' | 'horizontal';
        breakpoint?: number;
      };
      smartphone?: {
        smooth: boolean;
        direction: 'vertical' | 'horizontal';
        gestureDirection?: 'vertical' | 'horizontal';
      };
    }
  
    class LocomotiveScroll {
      constructor(options?: LocomotiveScrollOptions);
      init(): void;
      destroy(): void;
      update(): void;
      start(): void;
      stop(): void;
      scrollTo(target: string | number | HTMLElement, options?: object): void;
    }
  
    export default LocomotiveScroll;
  }
  