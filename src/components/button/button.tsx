import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  text: string;
  link: string;
}

export const Button = component$<ButtonProps>(({ text, link }) => {
  return (
    <a
      href={link}
      class="flex w-max items-center rounded bg-accent-light px-6 py-3 font-bold text-white transition duration-300 hover:bg-accent-dark"
    >
      {text}
    </a>
  );
});
