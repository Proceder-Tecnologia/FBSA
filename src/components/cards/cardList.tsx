import { component$ } from "@builder.io/qwik";
import { Card } from "./card";

interface CardProps {
  title: string;
  description: string;
  image: string;
  details: string; // ✅ Ensure each card has `details`
}

export const CardList = component$(() => {
  const cards: CardProps[] = [
    {
      title: "Direito Minerário",
      description:
        "A Fontes Bernardes Sociedade de Advogados atua nesta área do Direito que se dedica ao estudo das relações entre particulares e o Poder Público  com a exploração, processamento e comercialização de minérios e bens minerais.",
      image: "/Services/Scenery.jpg",
      details:
        "Mais detalhes sobre Direito Minerário e sua importância na economia e regulação.",
    },
    {
      title: "Direito Imobiliário e da Propriedade",
      description:
        "O Direito Imobiliário, e consequentemente o direito à propriedade, são  um dos basilares direitos fundamentais de todo indivíduo, por isso  requer uma atenção especial na hora de transacionar, dispor ou negociar  um bem imóvel.",
      image: "/Services/Building.jpg",
      details:
        "Informações detalhadas sobre Direito Imobiliário e sua aplicação na legislação atual.",
    },
    {
      title:
        "Direito de Inovação e Tecnologia – Direito na Sociedade da Informação",
      description:
        "O Direito na Sociedade da Informação constitui hoje um dos principais  desafios para a sociedade moderna, pois assim como as facilidades e  inovações, surgiram problemas complexos com o avanço tecnológico na Era  da Sociedade da Informação, também chamado por muitos de “Era da Quarta  Revolução Industrial.",
      image: "/Services/Innovation.jpg",
      details:
        "Discussão sobre os desafios legais da tecnologia e inovação no mundo atual.",
    },
    {
      title: "Direito de Família, Sucessões e Planejamento Sucessório",
      description:
        "Com a discrição e sigilo inerente, a Fontes Bernardes Sociedade de  Advogados trata das principais questões da área de direito de família e  das sucessões oferecendo todo suporte necessário para o completo  atendimento às necessidades do cliente, exigindo uma defesa combativa  dos interesses do cliente, com lealdade e respeito.",
      image: "/Services/Family.jpg",
      details:
        "Discussão sobre os desafios legais da tecnologia e inovação no mundo atual.",
    },
    {
      title: "Direito Tributário",
      description:
        "O Direito Tributário é uma das áreas de especialização do Direito que se dedica ao estudo à aplicação da legislação e normas que tratam da forma da arrecadação de recursos do Estado, ou seja dos tributos, tendo suas  espécies: impostos; taxas; contribuição de melhoria; empréstimo  compulsório e contribuições.",
      image: "/Services/Accounting.jpg",
      details: (
        <>
          - Ponto um <br />
          - Ponto dois <br />
        </>
      ),
    },
    {
      title: "Direito Público: Constitucional E Administrativo",
      description:
        "A atuação da Fontes Bernardes Sociedade de Advogados em Direito Público, em especial no Direito Constitucional e Administrativo divide-se em  dois focos: A relação do Particular com o Estado, e suas  particularidades; e a Limitação da Ação do Estado em face das Pessoas  Físicas e Jurídicas, nacionais ou estrangeiras.",
      image: "/Services/TradeCenter.jpg",
      details: (
        <>
          - Ponto um <br />
          - Ponto dois <br />
        </>
      ),
    },
    {
      title: "Responsabilidade Civil",
      description:
        "É uma das áreas de especialização do Direito que se dedica ao estudo e à aplicação da legislação que trata da matéria.",
      image: "/Services/Journal.jpg",
      details: (
        <>
          - Ponto um <br />
          - Ponto dois <br />
        </>
      ),
    },
    {
      title: "Terceiro Setor E Responsabilidade Social",
      description:
        "É uma das áreas de especialização do Direito que se dedica ao estudo e à aplicação da legislação que trata sobre organizações sem fins  lucrativos e não governamentais, que tem como objetivo gerar serviços de caráter público.",
      image: "/Services/People.jpg",
      details: (
        <>
          - Ponto um <br />
          - Ponto dois <br />
        </>
      ),
    },
  ];

  return (
    <div class="flex flex-col gap-12 px-6 py-20">
      <h2 class="bg-gradient-to-r from-primary-base to-black bg-clip-text text-center text-transparent">
        Áreas De Atuação
      </h2>
      <div class="flex flex-col">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
});
// import { component$, useSignal } from "@builder.io/qwik";
// import { Card } from "./card.tsx";
// import { Modal } from "../modal/modal";

// interface CardProps {
//   title: string;
//   description: string;
//   image: string;
//   details: string;
// }

// export const CardList = component$(() => {
//   const cards: CardProps[] = [
//     {
//       title: "Direito Minerário",
//       description:
//         "A Fontes Bernardes Sociedade de Advogados atua nesta área de direito nos aspectos da atuação da exploração da atividade e regulação perante o poder público.",
//       image: "/path-to-image-1.jpg",
//       details:
//         "Mais detalhes sobre Direito Minerário e sua importância na economia e regulação.",
//     },
//     {
//       title: "Direito Imobiliário e da Propriedade",
//       description:
//         "O Direito Imobiliário é o direito responsável pela orientação, assessoria, elaboração e análise de bases legais fundamentais do setor imobiliário.",
//       image: "/path-to-image-2.jpg",
//       details:
//         "Informações detalhadas sobre Direito Imobiliário e sua aplicação na legislação atual.",
//     },
//     {
//       title:
//         "Direito de Inovação e Tecnologia – Direito na Sociedade da Informação",
//       description:
//         "O Direito na Sociedade da Informação está entre um dos principais desafios. Por isso é fundamental atuar com complexidade, considerando as novas tecnologias.",
//       image: "/path-to-image-3.jpg",
//       details:
//         "Discussão sobre os desafios legais da tecnologia e inovação no mundo atual.",
//     },
//   ];

//   const selectedCard = useSignal<CardProps | null>(null); // 🔥 Store the selected card

//   return (
//     <div class="flex flex-col gap-4 p-4">
//       {cards.map((card, index) => (
//         <Card
//           key={index}
//           {...card}
//           onOpen$={() => (selectedCard.value = card)}
//         />
//       ))}

//       {selectedCard.value && (
//         <Modal
//           title={selectedCard.value.title}
//           description={selectedCard.value.details}
//           onClose$={() => (selectedCard.value = null)}
//         />
//       )}
//     </div>
//   );
// });
