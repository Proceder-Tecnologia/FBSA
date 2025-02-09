import { component$ } from "@builder.io/qwik";
import { DesktopNavigation } from "../navigation/navigation";

export const Header = component$(() => {
  return (
    <header class="fixed z-10 flex w-full justify-center bg-slate-50 px-6 py-4 transition-transform duration-100 lg:place-content-between">
      <div class="lg:m-auto lg:flex lg:w-full lg:max-w-screen-lg lg:place-content-between lg:px-6">
        <a href="/">
          <img alt="" src="/LogoBig.svg" />
        </a>
        <div class="flex gap-6">
          <DesktopNavigation />
        </div>
      </div>
    </header>
  );
});
