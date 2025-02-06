import { component$ } from "@builder.io/qwik";
import { Button } from "../button/button";

export const Header = component$(() => {
  return (
    <header class="fixed z-10 flex w-full place-content-between bg-slate-50 px-6 py-4 transition-transform duration-100">
      <a href="/">
        <img alt="" src="/LogoBig.svg" />
      </a>
      <Button text="Contato" link="https://example.com" />
    </header>
  );
});
