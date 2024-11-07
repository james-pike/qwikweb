import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";


  export const onGet: RequestHandler = async ({ cacheControl }) => {
    // If you want the browser to use "stale-while-revalidate" or "s-maxage" Cache Control headers, you have to add the second cacheControl with "CDN-Cache-Control" or "Vercel-CDN-Cache-Control" on Vercel Edge 
    cacheControl({
      staleWhileRevalidate: 60 * 60 * 24 * 365,
      maxAge: 5,
    });
    cacheControl({
      maxAge: 5,
      staleWhileRevalidate: 60 * 60 * 24 * 365,
    }, "CDN-Cache-Control");

};

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
