import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/logo.png?width=64&height=64&png";

export default component$(() => (
<span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 dark:text-white flex items-center">
  {/* <img
    src="{logoSrc}"
    class="inline-block mr-1"
    width="32"
    height="32"
    alt="Qwind Logo"
    loading="lazy"
  /> */}
  <span class="font-extrabold font-sans text-black-500">Webdev</span>
  <span class="text-red-700">.ca</span>
</span>

));