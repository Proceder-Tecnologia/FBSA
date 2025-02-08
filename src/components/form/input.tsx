import { component$ } from "@builder.io/qwik";

interface InputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onInput$?: (event: Event) => void;
}

export const Input = component$(
  ({
    id,
    type = "text",
    placeholder,
    value,
    required,
    onInput$,
  }: InputProps) => {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onInput$={onInput$}
        class="w-full border-2 bg-transparent px-7 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  },
);
