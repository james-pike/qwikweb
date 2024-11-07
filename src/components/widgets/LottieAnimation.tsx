import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: string; // Path to your Lottie JSON file
  loop?: boolean;
  autoplay?: boolean;
}

export default component$((props: LottieAnimationProps) => {
  // Change from 'Element | null' to 'Element | undefined'
  const containerRef = useSignal<Element | undefined>(undefined);

  // Signal to store the animation instance
  const animationInstance = useSignal<AnimationItem | null>(null);

  // Initialize Lottie animation once the container is available
  useVisibleTask$(() => {
    if (containerRef.value && !animationInstance.value) {
      animationInstance.value = lottie.loadAnimation({
        container: containerRef.value, 
        renderer: "svg",
        loop: props.loop ?? true,
        autoplay: props.autoplay ?? true,
        path: props.animationData,
      });
    }
  });

  return (
    <div>
      <div ref={containerRef} class="w-full h-full"></div>
    </div>
  );
});
