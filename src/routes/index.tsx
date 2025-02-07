import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { Hero } from "../components/hero/hero";
import { FirstSection } from "../components/sections/firstSection.tsx";
import { CardList } from "../components/cards/cardList.tsx";
import { Contact } from "../components/contact/contact.tsx";

export default component$(() => {
  return (
    <>
      <main class="pt-[72px]">
        <Hero
          subtitle="Possibilitando Segurança Jurídica Para"
          subtitleHighlight="Você"
          title="Fontes Bernardes Sociedade de Advogados"
          description="Assessoria, consultoria, correspondência e contencioso fazem parte de nosso portfólio de atuação. Nosso escritório de advocacia é integrado e especializado, conta com profissionais aptos para a resolução das necessidades de seus clientes, com agilidade na prestação de serviços jurídicos de acordo com as melhores práticas do mercado."
          buttonText="Entre Em Contato"
          buttonLink="#contato"
          imageSrc="/Hero/HeroImage.jpg"
        />
        <FirstSection
          title="Nosso Escritório"
          firstSubtitle="Comprometimento Com O Direito"
          firstDescription="A Fontes Bernardes Sociedade de Advogados oferece serviços jurídicos com o objetivo de defender direitos e interesses, extrajudiciais e  processuais, de nossos clientes, possibilitando a segurança jurídica  necessária para a tomada de decisões no exercício de suas atividades  comerciais, profissionais e familiares."
          secondSubtitle="Profissionais Qualificados"
          secondDescription="Assessoria, consultoria, correspondência e contencioso fazem parte de  nosso portfólio de atuação. Nosso escritório de advocacia é integrado e  especializado, conta com profissionais aptos para a resolução das  necessidades de seus clientes, com agilidade na prestação de serviços  jurídicos de acordo com as melhores práticas do mercado."
          imageSrc="/FirstSection/FirstSection.jpg"
        />
        <CardList />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "FBSA Law",
  meta: [
    {
      name: "description",
      content: "Página incial da Fontes Bernardes Sociedade de Advogados.",
    },
  ],
};
