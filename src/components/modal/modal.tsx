import { component$ } from "@builder.io/qwik";

interface ModalProps {
  title: string;
  description: string;
  onClose$: () => void;
}

export const Modal = component$(
  ({ title, description, onClose$ }: ModalProps) => {
    return (
      <div class="fixed inset-0 z-[5] flex items-center justify-center bg-black bg-opacity-50">
        <div class="mx-6 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <h3 class="text-lg font-bold">{title}</h3>
          <p class="mt-2">{description}</p>
          <button
            class="mt-4 rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
            onClick$={onClose$}
          >
            Fechar
          </button>
        </div>
      </div>
    );
  },
);
