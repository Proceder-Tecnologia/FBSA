import { component$ } from "@builder.io/qwik";
import { Home } from "../../public/Home.svg";
import { component$ } from "@builder.io/qwik";

const navItems = [
  { src: "/Home.svg", href: "#home", alt: "Home", text: "Home" },
  {
    src: "/Office.svg",
    href: "#offices",
    alt: "Escritório",
    text: "Escritório",
  },
  { src: "/Areas.svg", href: "#areas", alt: "Atuações", text: "Atuações" },
];

export const Navigation = component$(() => {
  return (
    <div class="flex fixed inset-x-0 bottom-0 justify-center">
      {navItems.map(({ src, href, alt, text }) => (
        <a
          key={href}
          class="w-24 relative flex flex-col hover:text-white items-center px-4 py-1 focus:bg-blue-600 active:bg-blue-700 visited:bg-blue-400 hover:bg-blue-500 transition-colors duration-200"
          href={href}
        >
          <img class="w-[24px] h-[24px]" alt={alt} src={src} />
          {text}
        </a>
      ))}
    </div>
  );
});
