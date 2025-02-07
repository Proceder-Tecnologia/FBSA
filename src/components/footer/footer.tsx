import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <>
      <footer class="w-full bg-accent-dark text-dark-title lg:hidden">
        <div class="m-auto grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col items-center justify-between gap-4 overflow-x-auto overflow-y-hidden px-6 py-8 lg:flex lg:max-w-screen-xl lg:flex-row lg:overflow-auto lg:pb-0">
          <div class="flex snap-center items-center justify-center gap-4">
            <a aria-label="Link to home page." href="./">
              <img alt="" src="/LogoBig.svg" />
            </a>
            <div class="flex gap-2">
              <a
                class="rounded bg-accent-base hover:bg-accent-dark"
                aria-label="A link to facebook."
                href="facebook.com"
              >
                <img alt="" src="/Footer/Facebook.svg" />
              </a>
              <a
                class="rounded bg-accent-base hover:bg-accent-dark"
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
            <p class="text-center font-bold text-dark-paragraph">
              Avenida Paulista,1765, Ed. Scarpa, 15º Andar, CJ 152, São Paulo,
              SP, CEP 01311-200
            </p>
          </div>
          <div class="flex snap-center items-center justify-center gap-4">
            <p class="text-center font-bold text-dark-paragraph">
              (11) 32881229 - 32871490
            </p>
          </div>
        </div>
      </footer>

      <footer class="hidden pt-16 lg:flex lg:w-full lg:flex-col lg:gap-12 lg:bg-accent-dark lg:text-dark-title">
        <div class="m-auto gap-6 lg:flex lg:max-w-screen-lg lg:flex-col">
          <div class="space-between flex">
            <div class="flex flex-col items-center gap-3">
              <p class="rounded-full border-2 border-solid border-white px-8 py-2 font-bold uppercase text-dark-title">
                E-Mail
              </p>
              <a class="font-bold" href="mailto:atendimento@fsba.com.br">
                atendimento@fsba.com.br
              </a>
            </div>
            <div class="flex flex-col items-center gap-3">
              <p class="rounded-full border-2 border-solid border-white px-8 py-2 font-bold uppercase text-dark-title">
                Endereço
              </p>
              <p class="text-center font-bold text-dark-paragraph">
                Avenida Paulista,1765, Ed. Scarpa, 15º Andar, CJ 152, São Paulo,
                SP, CEP 01311-200
              </p>
            </div>
            <div class="flex flex-col items-center gap-3">
              <p class="rounded-full border-2 border-solid border-white px-8 py-2 font-bold uppercase text-dark-title">
                Telefone
              </p>
              <p class="text-center font-bold text-dark-paragraph">
                (11) 32881229 - 32871490
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center gap-6">
            <a aria-label="Link to home page." href="./">
              <img alt="" src="/LogoBig.svg" />
            </a>
            <div class="flex gap-2">
              <a
                class="rounded bg-accent-base hover:bg-accent-dark"
                aria-label="A link to facebook."
                href="facebook.com"
              >
                <img alt="" src="/Footer/Facebook.svg" />
              </a>
              <a
                class="rounded bg-accent-base hover:bg-accent-dark"
                aria-label="A link to Twitter."
                href="x.com"
              >
                <img alt="" src="/Footer/Twitter.svg" />
              </a>
            </div>
          </div>
        </div>
        <div class="flex">
          <img
            class="w-full object-cover"
            alt=""
            src="/Footer/DaumierLawyers.jpg"
          />
          <img class="w-full object-cover" alt="" src="/Footer/LesAvocat.jpg" />
          <img
            class="object-fit w-full"
            alt=""
            src="/Footer/BeauxDeLavie.jpg"
          />
          <img class="w-full object-cover" alt="" src="/Footer/Daumier.jpg" />
        </div>
      </footer>
    </>
  );
});
