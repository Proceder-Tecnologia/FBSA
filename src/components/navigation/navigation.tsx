import { component$ } from "@builder.io/qwik";
import { Home } from "../../public/Home.svg";
import { component$ } from "@builder.io/qwik";

const navItems = [
  {
    src: "/Navigation/Home.svg",
    href: "#home",
    alt: "Home",
    text: "Home",
  },
  {
    src: "/Navigation/Office.svg",
    href: "#offices",
    alt: "Escritório",
    text: "Escritório",
  },
  {
    src: "/Navigation/Areas.svg",
    href: "#areas",
    alt: "Atuações",
    text: "Atuações",
  },
];

export const Navigation = component$(() => {
  return (
    <div class="fixed inset-x-0 bottom-0 flex justify-center">
      {navItems.map(({ src, href, alt, text }) => (
        <a
          key={href}
          class="relative flex w-24 flex-col items-center px-4 py-1 transition-colors duration-200 visited:bg-blue-400 hover:bg-blue-500 hover:text-white focus:bg-blue-600 active:bg-blue-700"
          href={href}
        >
          <img class="h-[24px] w-[24px]" alt={alt} src={src} />
          {text}
        </a>
      ))}
    </div>
  );
});
