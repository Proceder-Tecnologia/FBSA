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
        class="relative flex h-[40rem] flex-col items-center justify-center gap-9 bg-cover bg-center px-10 py-14 lg:h-[28rem] lg:flex-row"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="flex flex-col gap-4 lg:w-full">
          <h2 class="relative text-center font-bold text-dark-title lg:text-left">
            {title}
          </h2>
          <button
            class="relative mt-4 rounded-full border-2 border-solid border-white px-4 py-2 font-bold text-dark-title transition hover:bg-gray-900 lg:w-max"
            onClick$={() => (isModalOpen.value = true)}
          >
            Atuações Específicas
          </button>
        </div>

        <p class="relative mt-2 font-bold text-dark-paragraph lg:w-full">
          {description}
        </p>

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
