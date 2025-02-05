import { component$ } from "@builder.io/qwik";
import { Button } from "../button/button";

export const Header = component$(() => {
  return (
    <header class="header-scroll fixed z-10 flex h-[72px] w-full justify-center bg-slate-50 py-2 transition-transform duration-100">
      <img alt="" src="/LogoBig.svg" />
      <Button text="Click Me" link="https://example.com" />
    </header>
  );
});
