import { component$ } from "@builder.io/qwik";

interface SelectProps {
  id?: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange$?: (value: string) => void;
  required?: boolean;
}

export const Select = component$(
  ({ id, options, value, required, onChange$ }: SelectProps) => {
    return (
      <select
        id={id}
        value={value}
        required={required}
        onChange$={(e) => onChange$?.((e.target as HTMLSelectElement).value)}
        class="w-full border-2 bg-transparent px-7 py-2.5 text-dark-paragraph focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  },
);
