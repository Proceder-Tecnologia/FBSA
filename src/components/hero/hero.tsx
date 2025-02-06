import { component$ } from "@builder.io/qwik";
import { Button } from "../button/button";

interface HeroProps {
  subtitle: string;
  subtitleHighlight: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
}

export const Hero = component$<HeroProps>(
  ({
    subtitle,
    subtitleHighlight,
    title,
    description,
    buttonText,
    buttonLink,
    imageSrc,
  }) => {
    return (
      <section class="bg-primary-dark">
        <div class="flex flex-col gap-8 px-6 py-16">
          <div class="flex flex-col items-center gap-12">
            <div class="flex flex-col items-center gap-6">
              <div class="flex flex-col items-center gap-6">
                <p class="text-center text-accent-light">
                  {subtitle}{" "}
                  <span class="font-bold text-red-500">
                    {subtitleHighlight}
                  </span>
                </p>
                <h1
                  id="home"
                  class="bg-gradient-to-r from-primary-base to-white bg-clip-text text-center text-transparent"
                >
                  {title}
                </h1>
              </div>
              <p class="text-center text-dark-paragraph">{description}</p>
            </div>
            <Button text={buttonText} link={buttonLink} />
          </div>
          <img alt="" src={imageSrc} />
        </div>
      </section>
    );
  },
);
