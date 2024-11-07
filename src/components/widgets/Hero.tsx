import { component$ } from '@builder.io/qwik';

// Static import if the file is included in your build


export default component$(() => {
 

  return (
    <section class="relative min-h-[85vh] md:-mt-[76px] not-prose bg-gradient-to-r from-primary-100 to-secondary-100">
      <div class="absolute pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none "></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-[85vh] lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 class="text-5xl font-serif md:text-7xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              <span class="block">Experienced</span>
              <span class="block">Family Lawyer</span>
              <span class="block">in Toronto</span>
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  Comprehensive Legal Support
                </span>{" "}
                specializing in Divorce, Child Custody, Spousal Support, Property Division, Adoption, Mediation and more.{" "}
                <span class="hidden md:inline">
                  Dark Mode, Great Page Speed, image optimization, sitemap generation and more.
                </span>
              </p>
              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="https://github.com/onwidget/qwind"
                    target="_blank"
                    rel="noopener"
                  >
                    Schedule A Free Consultation
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <button class="btn w-full bg-gray-50 dark:bg-transparent">Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <div class="hidden lg:block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2FQm9k8y3Z8jvw0SRd2v3t%2Fb7b5a7c5b5b64e5a9b3f8c1b3e9b3b5"
                alt="Family Lawyer in Toronto"
                class="object-cover object-center w-full h-full rounded-md shadow-lg"
              />
            </div>

          <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script><dotlottie-player src="https://lottie.host/75cd1350-b4e9-467d-ac26-90d6ddf2f412/yhqSt5G4IC.json" background="transparent" speed="0.5" style="width: 300px; height: 300px" direction="1" playMode="normal" autoplay></dotlottie-player>          </div>
        </div>
      </div>
    </section>
  );
});
