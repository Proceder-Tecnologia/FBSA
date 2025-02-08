import { component$, useSignal } from "@builder.io/qwik";

const navItems = [
  {
    src: "/Navigation/Home.svg",
    hoverSrc: "/Navigation/Home-Hover.svg",
    href: "#home",
    alt: "Home",
    text: "Home",
  },
  {
    src: "/Navigation/Office.svg",
    hoverSrc: "/Navigation/Office-Hover.svg",
    href: "#offices",
    alt: "Escritório",
    text: "Escritório",
  },
  {
    src: "/Navigation/Areas.svg",
    hoverSrc: "/Navigation/Areas-Hover.svg",
    href: "#areas",
    alt: "Atuações",
    text: "Atuações",
  },
];

export const Navigation = component$(() => {
  const hoveredIndex = useSignal<number | null>(null); // Track which link is hovered

  return (
    <div class="fixed inset-x-0 bottom-0 flex justify-center bg-white py-3 lg:hidden">
      {navItems.map(({ src, hoverSrc, href, alt, text }, index) => (
        <a
          key={href}
          class="relative flex w-32 flex-col items-center px-6 py-3 font-bold text-light-paragraph transition-colors duration-200 hover:text-primary-base focus:text-primary-dark active:text-primary-dark"
          href={href}
          onMouseEnter$={() => (hoveredIndex.value = index)}
          onMouseLeave$={() => (hoveredIndex.value = null)}
        >
          <img
            class="h-[24px] w-[24px]"
            alt={alt}
            src={hoveredIndex.value === index ? hoverSrc : src}
          />
          {text}
        </a>
      ))}
    </div>
  );
});

export const DesktopNavigation = component$(() => {
  return (
    <div class="hidden lg:flex">
      {navItems.map(({ href, text }) => (
        <a
          key={href}
          class="visited:text-primary-darker relative flex w-32 flex-col items-center px-6 py-3 font-bold text-light-paragraph transition-colors duration-200 hover:text-primary-base focus:text-primary-dark active:text-primary-dark"
          href={href}
        >
          {text}
        </a>
      ))}
    </div>
  );
});
