import { component$, useSignal, useOnWindow, noSerialize, $ } from "@builder.io/qwik";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: string; // Path to your Lottie JSON file
  loop?: boolean;
  autoplay?: boolean;
}

export default component$((props: LottieAnimationProps) => {
  const containerRef = useSignal<Element | undefined>(undefined);

  // Correctly applying noSerialize() to AnimationItem signal
  const animationInstance = useSignal<AnimationItem | undefined>(undefined);

  useOnWindow("load", $(() => {
    if (containerRef.value instanceof HTMLDivElement && !animationInstance.value) {
      // Load the animation and mark it as non-serializable
      animationInstance.value = noSerialize(
        lottie.loadAnimation({
          container: containerRef.value,
          renderer: "svg",
          loop: props.loop ?? true,
          autoplay: props.autoplay ?? true,
          path: props.animationData, // Path to your Lottie JSON data
        })
      );
    }
  }));

  return (
    <div>
      <div ref={containerRef} class="w-full h-full"></div>
    </div>
  );
});
