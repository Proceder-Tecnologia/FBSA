import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  text: string;
  link: string;
}

export const Button = component$<ButtonProps>(({ text, link }) => {
  return (
    <a
      href={link}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
    >
      {text}
    </a>
  );
});
