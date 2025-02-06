import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../modal/modal";

interface CardProps {
  title: string;
  description: string;
  image: string;
  details: string;
}

export const Card = component$(
  ({ title, description, image, details }: CardProps) => {
    const isModalOpen = useSignal(false);

    return (
      <div
        class="relative flex h-[40rem] flex-col justify-center gap-9 bg-cover bg-center px-10 py-14"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="flex flex-col gap-4">
          <h2 class="relative text-center text-xl font-bold text-dark-title">
            {title}
          </h2>
          <button
            class="relative mt-4 rounded-full border-2 border-solid border-white px-4 py-2 font-bold text-dark-title transition hover:bg-gray-900"
            onClick$={() => (isModalOpen.value = true)}
          >
            Atuação Específica
          </button>
        </div>

        <p class="relative mt-2 font-bold text-dark-paragraph">{description}</p>

        {isModalOpen.value && (
          <Modal
            title={title}
            description={details}
            onClose$={() => (isModalOpen.value = false)}
          />
        )}
      </div>
    );
  },
);
