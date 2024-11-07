import { component$, useVisibleTask$, useSignal, $ } from "@builder.io/qwik";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: string; // Path to your Lottie JSON file
  loop?: boolean;
  autoplay?: boolean;
}

export default component$((props: LottieAnimationProps) => {
  const containerRef = useSignal<Element | undefined>(undefined);
  const animation = useSignal<AnimationItem | undefined>(undefined);

  useVisibleTask$(() => {
    if (containerRef.value instanceof HTMLDivElement) {
      animation.value = lottie.loadAnimation({
        container: containerRef.value, // the HTML element to render the animation in
        renderer: "svg",
        loop: props.loop ?? true,
        autoplay: props.autoplay ?? true,
        path: props.animationData, // path to the Lottie JSON data file
      });
    }
  });

  const playAnimation = $(() => animation.value?.play());
  const pauseAnimation = $(() => animation.value?.pause());
  const stopAnimation = $(() => animation.value?.stop());

  return (
    <div>
      <div ref={containerRef} class="w-full h-full"></div>
      <div class="mt-4 flex space-x-2">
        <button onClick$={playAnimation}>Play</button>
        <button onClick$={pauseAnimation}>Pause</button>
        <button onClick$={stopAnimation}>Stop</button>
      </div>
    </div>
  );
});
