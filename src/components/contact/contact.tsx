import { component$, useSignal, $ } from "@builder.io/qwik";
import { Input } from "../form/input";
import { Select } from "../form/select";

export const Contact = component$(() => {
  const name = useSignal("");
  const services = useSignal("Direito Minerário");
  const message = useSignal("");

  const sendWhatsAppMessage = $((event: Event) => {
    event.preventDefault();

    if (!name.value.trim() || !services.value.trim()) {
      console.warn("Required fields are empty");
      return;
    }

    const phone = 1132881229;

    const text = `Olá! Meu nome é ${name.value}, e estou interessado(a) no serviço: ${services.value}. ${message.value}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    console.log(url);
    window.open(url, "_blank")?.focus();
  });

  return (
    <section class="flex flex-col px-6 py-20 lg:m-auto lg:grid lg:max-w-screen-lg lg:grid-cols-2 lg:grid-rows-1">
      <img
        class="h-[400px] object-cover lg:h-full lg:w-full"
        alt=""
        src="/Hero/HeroImage.jpg"
      />
      <form class="flex flex-col items-center gap-8 bg-accent-base px-6 py-20 lg:w-full">
        <h2 id="contato" class="text-dark-title lg:w-full lg:text-left">
          Fale Conosco
        </h2>
        <div class="flex w-full flex-col gap-3">
          <label class="font-bold text-dark-paragraph" for="">
            Nome <span class="text-red-500">*</span>
          </label>
          <Input
            type="text"
            placeholder="Qual seu nome?"
            value={name.value}
            required
            onInput$={(e) =>
              (name.value = (e.target as HTMLInputElement).value)
            }
          />
        </div>

        <div class="flex w-full flex-col gap-3">
          <label class="font-bold text-dark-paragraph" for="">
            Serviço De Interesse<span class="text-red-500">*</span>
          </label>
          <Select
            required
            options={[
              { label: "Direito Minerário", value: "Direito Minerário" },
              {
                label: "Direito Imobiliário e da Propriedade",
                value: "Direito Imobiliário e da Propriedade",
              },
              {
                label: "Direito de Inovação e Tecnologia",
                value: "Direito de Inovação e Tecnologia",
              },
              {
                label:
                  "Direito de Família, Sucessões e Planejamento Sucessório",
                value:
                  "Direito de Família, Sucessões e Planejamento Sucessório",
              },
              { label: "Direito Tributário", value: "Direito Tributário" },
              { label: "Direito Público", value: "Direito Público" },
              {
                label: "Responsabilidade Civil",
                value: "Responsabilidade Civil",
              },
              {
                label: "Terceiro Setor e Responsabilidade Social",
                value: "Terceiro Setor e Responsabilidade Social",
              },
            ]}
            value={services.value}
            onChange$={(val) => (services.value = val)}
          />
        </div>
        <div class="flex w-full flex-col gap-3">
          <label class="font-bold text-dark-paragraph" for="">
            Mensagem
          </label>
          <Input
            type="text"
            placeholder="Escreva aqui (opcional)"
            value={message.value}
            onInput$={(e) =>
              (message.value = (e.target as HTMLInputElement).value)
            }
          />
        </div>

        <button
          class="w-max bg-primary-base px-8 py-4 text-slate-100 transition-colors hover:bg-primary-dark"
          onClick$={sendWhatsAppMessage}
        >
          Entrar Em Contato
        </button>
      </form>
    </section>
  );
});
