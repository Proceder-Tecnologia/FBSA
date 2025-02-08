import { component$ } from "@builder.io/qwik";
import { Button } from "../button/button";
import { DesktopNavigation } from "../navigation/navigation";

export const Header = component$(() => {
  return (
    <header class="fixed z-10 flex w-full place-content-between bg-slate-50 px-6 py-4 transition-transform duration-100">
      <a href="/">
        <img alt="" src="/LogoBig.svg" />
      </a>
      <div class="flex gap-6">
        <DesktopNavigation />
        <Button text="Contato" link="https://example.com" />
      </div>
    </header>
  );
});
