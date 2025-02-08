import { component$ } from "@builder.io/qwik";

interface SectionProps {
  title: string;
  firstSubtitle: string;
  firstDescription: string;
  secondSubtitle: string;
  secondDescription: string;
  imageSrc: string;
}

export const FirstSection = component$<SectionProps>(
  ({
    title,
    firstSubtitle,
    firstDescription,
    secondSubtitle,
    secondDescription,
    imageSrc,
  }) => {
    return (
      <section class="bg-primary-dark">
        <div class="m-auto flex flex-col gap-16 px-6 py-20 lg:max-w-screen-lg">
          <h2
            id="offices"
            class="bg-gradient-to-r from-primary-base to-white bg-clip-text text-transparent"
          >
            {title}
          </h2>
          <div class="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:grid-rows-1">
            <div class="flex flex-col gap-20 lg:w-full">
              <div class="flex flex-col gap-3">
                <h3 class="bg-gradient-to-r from-primary-base to-white bg-clip-text text-transparent">
                  {firstSubtitle}
                </h3>
                <p class="text-dark-paragraph">{firstDescription}</p>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="bg-gradient-to-r from-primary-base to-white bg-clip-text text-transparent">
                  {secondSubtitle}
                </h3>
                <p class="text-dark-paragraph">{secondDescription}</p>
              </div>
            </div>
            <img class="h-96 object-cover lg:h-full" alt="" src={imageSrc} />
          </div>
        </div>
      </section>
    );
  },
);
