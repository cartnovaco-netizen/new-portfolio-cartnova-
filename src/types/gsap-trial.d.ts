declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    split(vars: any): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static get(): ScrollSmoother;
    paused(value: boolean): void;
    scrollTop(value?: number): number;
    kill(): void;
  }
}
