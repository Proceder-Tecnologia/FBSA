import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="bg-accent-dark text-dark-title w-full">
      <div class="m-auto grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col items-center justify-between gap-4 overflow-x-auto overflow-y-hidden px-6 py-8 lg:flex lg:max-w-screen-xl lg:flex-row lg:overflow-auto lg:pb-0">
        <div class="flex snap-center items-center justify-center gap-4">
          <a aria-label="Link to home page." href="./">
            <img alt="" src="/LogoBig.svg" />
          </a>
          <div class="flex gap-2">
            <a
              class="bg-accent-base hover:bg-accent-dark rounded"
              aria-label="A link to facebook."
              href="facebook.com"
            >
              <img alt="" src="/Footer/Facebook.svg" />
            </a>
            <a
              class="bg-accent-base hover:bg-accent-dark rounded"
              aria-label="A link to Twitter."
              href="x.com"
            >
              <img alt="" src="/Footer/Twitter.svg" />
            </a>
          </div>
        </div>
        <div class="flex snap-center items-center justify-center gap-4">
          <a class="font-bold" href="mailto:atendimento@fsba.com.br">
            atendimento@fsba.com.br
          </a>
        </div>
        <div class="flex snap-center items-center justify-center gap-4">
          <p class="text-center font-bold">
            Avenida Paulista,1765, Ed. Scarpa, 15º Andar, CJ 152, São Paulo,
            SP, CEP 01311-200
          </p>
        </div>
        <div class="flex snap-center items-center justify-center gap-4">
          <p class="text-center font-bold">(11) 32881229 - 32871490</p>
        </div>
      </div>
    </footer>
  );
});
