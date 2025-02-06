import { component$ } from "@builder.io/qwik";
import { Card } from "./card";

interface CardProps {
  title: string;
  description: string;
  image: string;
  details: string[];
}

export const CardList = component$(() => {
  const cards: CardProps[] = [
    {
      title: "Direito Minerário",
      description:
        "A Fontes Bernardes Sociedade de Advogados atua nesta área do Direito que se dedica ao estudo das relações entre particulares e o Poder Público  com a exploração, processamento e comercialização de minérios e bens minerais.",
      image: "/Services/Scenery.jpg",
      details: [
        "Assessoria e Consultoria a Pessoas Naturais e Jurídicas que pretendem explorar bens minerais",
        "Compra e venda de ativos minerários",
        "Direitos de compra, royalties e tributação",
      ],
    },
    {
      title: "Direito Imobiliário e da Propriedade",
      description:
        "O Direito Imobiliário, e consequentemente o direito à propriedade, são  um dos basilares direitos fundamentais de todo indivíduo, por isso  requer uma atenção especial na hora de transacionar, dispor ou negociar  um bem imóvel.",
      image: "/Services/Building.jpg",
      details: [
        "Consultoria, Análise e Prevenção de Riscos em Transações Imobiliárias;",
        "Assessoria, Consultoria, Elaboração e Acompanhamento em Instrumentos de Compra e Venda de Imóveis, Cessões de Direitos Incorporações e Loteamentos, Garantias Imobiliárias, Locação, Sublocação e Arrendamento;",
        "Assessoria, Consultoria e Elaboração de Contratos de construção tendo por finalidade empreendimentos residenciais; comerciais; industriais e outros projetos de infraestrutura;",
        "Assessoria e Consultoria a Condomínios Edilícios;",
        "Consultoria e Assessoria em questões envolvendo Laudêmio, Enfiteuse Foro, Taxa de Ocupação, em áreas indígenas, de Marinha e da União.",
        "Consultoria, Análise e Prevenção com proteção ambiental na propriedade imóvel residencial, comercial e industrial em área urbana, rural ou litorânea;",
        "Postulação em juízo visando a proteção da propriedade, como:",
        "Ação de Reintegração ou Manutenção de Posse;",
        "Interdito Proibitório;",
        "Ação de Usucapião;",
        "Ação de Despejo;",
        "Ações Indenizatórias;",
        "Ação de Adjudicação Compulsória.",
        "Imóveis rurais:",
        "Consultoria, Assessoria e Acompanhamento envolvendo parcerias rurais e negócios estrangeiros, compra e venda, condomínio, servidões, enfiteuse, arrendamentos, reserva legal, área de proteção ambiental, e afins.",
        "Hotelaria e turismo: assessoria em investimentos na área de hotelaria e turismo, tais como hotéis, resorts, parques temáticos ou imóveis para o desenvolvimento de atividade turística em áreas litorâneas ou de marinha.",
      ],
    },
    {
      title:
        "Direito de Inovação e Tecnologia – Direito na Sociedade da Informação",
      description:
        "O Direito na Sociedade da Informação constitui hoje um dos principais  desafios para a sociedade moderna, pois assim como as facilidades e  inovações, surgiram problemas complexos com o avanço tecnológico na Era  da Sociedade da Informação, também chamado por muitos de “Era da Quarta  Revolução Industrial.",
      image: "/Services/Innovation.jpg",
      details: [
        "Consultoria e Assessoramento em relação a aplicação do Marco Civil da Internet, Investimento-Anjo, Lei de Inovação, Lei de Direitos Autorais, Lei de Propriedade Industrial, Código de Defesa do Consumidor e normas correlatas do Direito Brasileiro.",
        "Elaboração, Revisão e Análise de Políticas de Sigilo de Dados e Anti-Corrupção, voltadas para empresas de tecnologia;",
        "Elaboração, Revisão, Consultoria e Assessoramento de Contratos Eletrônicos, com base no ordenamento jurídico brasileiro e do Mercosul.",
        "Elaboração ou Revisão de MOU (Memorandum of Understanding) e NDA (Non-Disclosure Agreement).",
        "Consultoria e assessoria jurídica na constituição e enquadramento de Startups, Núcleos de Inovação Tecnológicas (NIT), Instituições Científicas e Tecnológicas (ICT), Incubadoras, Agências de Fomento, mediante a elaboração dos instrumentos necessários, e outros contratos e acordos correlacionados.",
        "Elaboração ou revisão de contratos e estatutos sociais, acordo de sócios/ acionistas.",
        "Elaboração ou revisão dos contratos com todos os prestadores de serviços terceirizados, visando garantir a propriedade intelectual da Startup.",
        "Elaboração de termos de uso, políticas de privacidade e demais contratos com clientes e usuários de acordo com o ordenamento jurídico brasileiro e, se o caso, internacional, visando mitigar os riscos legais da Startup.",
      ],
    },
    {
      title: "Direito de Família, Sucessões e Planejamento Sucessório",
      description:
        "Com a discrição e sigilo inerente, a Fontes Bernardes Sociedade de  Advogados trata das principais questões da área de direito de família e  das sucessões oferecendo todo suporte necessário para o completo  atendimento às necessidades do cliente, exigindo uma defesa combativa  dos interesses do cliente, com lealdade e respeito.",
      image: "/Services/Family.jpg",
      details: [
        "Alimentos (pedido de concessão, revisão, exoneração e execução);",
        "Casamento (regime de bens e pacto antenupcial);",
        "Divórcio e Separação;",
        "Doação;",
        "Escrituras Públicas envolvendo patrimônio e sociedade conjugal;",
        "Guarda e regulamentação de visita de menores;",
        "Interdição, Tutela e Curatela;",
        "Inventário e arrolamento;",
        "Planejamento familiar e sucessório;",
        "Filiação (adoção, reconhecimento socioafetivo e investigação de paternidade);",
        "Medida cautelar de arrolamento de bens;",
        "Medida cautelar de separação de corpos;",
        "Partilha de bens;",
        "Testamentos;",
        "União estável (reconhecimento e dissolução).",
      ],
    },
    {
      title: "Direito Tributário",
      description:
        "O Direito Tributário é uma das áreas de especialização do Direito que se dedica ao estudo à aplicação da legislação e normas que tratam da forma da arrecadação de recursos do Estado, ou seja dos tributos, tendo suas  espécies: impostos; taxas; contribuição de melhoria; empréstimo  compulsório e contribuições.",
      image: "/Services/Accounting.jpg",
      details: [
        "Análise e acompanhamento de processos e procedimentos nas autoridades fiscais e fazendárias municipal, estadual, distrital e federal.",
        "Consultoria e acompanhamento no contencioso administrativo e judicial, estratégias, defesas, recursos, sustentações orais;",
        "Ajuizamento de ações judiciais com questionamentos sobre exigências tributárias ilegais em todas as esfera",
      ],
    },
    {
      title: "Direito Público: Constitucional E Administrativo",
      description:
        "A atuação da Fontes Bernardes Sociedade de Advogados em Direito Público, em especial no Direito Constitucional e Administrativo divide-se em  dois focos: A relação do Particular com o Estado, e suas  particularidades; e a Limitação da Ação do Estado em face das Pessoas  Físicas e Jurídicas, nacionais ou estrangeiras.",
      image: "/Services/TradeCenter.jpg",
      details: [
        "Em relação ao Direito Constitucional, que é uma das áreas do Direito que se dedica ao estudo e à aplicação das normas que constituem e fundam os Estados e Nações, a atuação dá-se em:",
        "Postulação de medidas que procuram assegurar efetivamente os direitos e garantias constitucionais violados ou em risco, como habeas corpus, mandado de segurança, mandado de injunção, reclamações constitucionais e afins.",
        "Aconselhamento envolvendo questões de Direito Constitucional;",
        "Representação de seus clientes em processos perante o Supremo Tribunal Federal;",
        "Elaboração de pareceres acerca da constitucionalidade de leis ou atos normativos;",
        "Elaboração de memoriais, audiências com Ministros e sustentação oral de recursos perante o Supremo Tribunal Federal e Desembargadores dos Tribunais de Justiça e Tribunais Federais;",
        "Representação em ações cujos argumentos tratem de Direito Constitucional;",
        "Formulação de incidentes de arguição de inconstitucionalidade em ações perante as instâncias ordinárias;",
        "Já com relação ao Direito Administrativo, a área do direito esta que dedica-se ao estudo das normas e das relações da Administração Pública, seja ela direta (Governo dos Municípios, Estados, União e Distrito Federal), ou indireta (autarquias, associações públicas, agências reguladoras, empresas e fundações públicas e sociedades de economia mista) com os entes privados, pessoas físicas ou jurídicas, a atuação concentra-se em:",
        "Assessoria e consultoria de contratos com a Administração Pública direta e indireta.",
        "Defesa contra a aplicação de penalidades contratuais ou administrativas.",
        "Participação na fase de consulta pública e/ou audiência pública;",
        "Exame de procedimentos licitatórios;",
        "Auxílio na preparação dos documentos de habilitação e das propostas;",
        "Assessoria em procedimentos de dispensa ou inexigibilidade de licitação;",
        "Preparação de pleitos de reequilíbrio econômico-financeiro ou de prorrogação contratual;",
        "Apresentação de recursos e impugnações administrativas, medidas judiciais e/ou representações a Tribunais de Contas. ",
      ],
    },
    {
      title: "Responsabilidade Civil",
      description:
        "É uma das áreas de especialização do Direito que se dedica ao estudo e à aplicação da legislação que trata da matéria.",
      image: "/Services/Journal.jpg",
      details: [
        "A responsabilidade civil não é tão somente a discussão se há ou não dano moral, ou dano material, mas sim é a área do direito que visa tutelar o direito à integridade física, moral e patrimonial das pessoas físicas e jurídicas, pois todos nós, ao vivermos em sociedade, temos o dever jurídico de não causar danos, e caso venha a gerar tem o dever de reparar como determina a lei civil. Assim, a atuação da Fontes Bernardes Sociedade de Advogados se dá sob duas óticas de partida, em Prevenção e Defesa Contenciosa: inicialmente a prevenção de riscos para evitar a ocorrência de atos ilícitos que ensejem a responsabilização civil; e por fim a defesa dos interesses de nossos clientes na defesa ou na busca pela reparação de seus danos pelas vias judiciais, administrativas e consensuais. ",
      ],
    },
    {
      title: "Terceiro Setor E Responsabilidade Social",
      description:
        "É uma das áreas de especialização do Direito que se dedica ao estudo e à aplicação da legislação que trata sobre organizações sem fins  lucrativos e não governamentais, que tem como objetivo gerar serviços de caráter público.",
      image: "/Services/People.jpg",
      details: [
        "Criação e manutenção de fundações privadas, sociedades civis sem fins lucrativos, ONGs, OSCIPs e Organizações Sociais;",
        "Elaboração e revisão de estatutos de entidades sem fins lucrativos;",
        "acompanhamento para a obtenção do registro de filantropia e de utilidade pública;",
        "Captação de financiamento para projetos sociais;",
        "Projetos culturais e artísticos com base na Lei Rouanet e leis estaduais e municipais que oferecem incentivo tributário;",
        "Assistência legal na obtenção de benefícios fiscais;",
        "Prática de atividades pro bono.",
      ],
    },
  ];

  return (
    <div class="m-auto flex flex-col gap-12 px-6 py-20 lg:max-w-screen-xl">
      <h2
        id="areas"
        class="bg-gradient-to-r from-primary-base to-black bg-clip-text text-center text-transparent"
      >
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
