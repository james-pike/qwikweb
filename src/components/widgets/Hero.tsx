import { component$ } from "@builder.io/qwik";

import Image from '~/assets/images/mp.jpg?w=400&h=400&jsx';

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose bg-gradient-to-r from-primary-200 to-secondary-300">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
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
                    class="btn btn-primary  sm:mb-0 w-full"
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
            {/* <Image
              src={coverImage}
              layout="constrained"
              width={500}
              height={500}
              alt="Qwind Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            /> */}

            <Image loading="lazy"/>
          </div>
        </div>
      </div>
    </section>
  );
});
