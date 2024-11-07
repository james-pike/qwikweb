import { component$, useTask$, useSignal } from "@builder.io/qwik";
import lottie, { type AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: string; // Path to your Lottie JSON file
  loop?: boolean;
  autoplay?: boolean;
}

export default component$((props: LottieAnimationProps) => {
  const containerRef = useSignal<Element | undefined>(undefined);
  const animation = useSignal<AnimationItem | null>(null);

  useTask$(({ track }) => {
    track(() => containerRef.value);
    if (containerRef.value instanceof HTMLDivElement) {
      animation.value = lottie.loadAnimation({
        container: containerRef.value,
        renderer: "svg",
        loop: props.loop ?? true,
        autoplay: props.autoplay ?? true,
        path: props.animationData,
      });

      // Destroy the animation when the component is unmounted
      return () => {
        animation.value?.destroy();
      };
    }
  });


  return (
    <div>
      <div ref={containerRef} class="w-full h-full"></div>
      <div class="mt-4 flex space-x-2">
      
      </div>
    </div>
  );
});
