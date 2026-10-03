export const NAV = [
  { label: "Filosofia", href: "#philosophy" },
  { label: "Tratamentos", href: "#treatments" },
  { label: "Especialista", href: "#specialist" },
  { label: "Resultados", href: "#results" },
];

export const HERO = {
  /* Quatro peças de texto independentes, exatamente como no Figma (Aurea,
     node 51:3) — NUNCA uma string que quebra sozinha. "titleH1" e
     "titleFacial" (linha 1 e a primeira palavra da linha 2) + "titleTail"
     (2ª palavra da linha 2, ao lado da cabeça da doutora) formam a
     headline em --ink; "titleHighlight" é a palavra gigante em destaque
     (--violet), posicionada atrás/ao redor da foto da doutora. */
  titleH1: "Harmonização",
  titleFacial: "Facial",
  titleTail: "Sem",
  titleHighlight: "excessos",
  body: "Tratamentos personalizados para equilibrar proporções e valorizar seus traços com precisão e naturalidade.",
  primary: "Agendar Avaliação",
  secondary: "Conhecer tratamentos",
};

export const PROMO = [
  "Harmonização sem excessos",
  "Respeito aos seus traços",
  "Resultados naturais",
  "Cada rosto é único",
  "Precisão em cada detalhe",
  "Beleza sem padrões",
];

/* 02 — Manifesto/Filosofia. Substitui o antigo bloco isolado de Manifesto +
   Stats: aqui a marca explica sua filosofia antes de vender procedimentos. */
export const PHILOSOPHY = {
  eyebrow: "Especialistas em harmonização facial",
  headingLead: "Harmonização não é",
  headingHighlight: "mudar",
  leadShort: "Cada harmonização é planejada para valorizar seus traços com equilíbrio e naturalidade.",
  lead: "Cada rosto tem proporções únicas. Por isso, cada harmonização é planejada individualmente para valorizar seus traços com equilíbrio, precisão e naturalidade.",
  /* Foto original (1200x1799) exibida sem zoom e sem recompressão: o quadro
     recorta só a faixa inferior (paciente), deixando o rosto da doutora fora. */
  image: { src: "/images/lumea/features.jpg", w: 1200, h: 1799, alt: "Paciente recebendo um atendimento de harmonização facial na Luméa" },
  features: [
    { icon: "expression", title: "Naturalidade",
      text: "Resultados sutis que preservam sua expressão e respeitam a identidade de cada rosto." },
    { icon: "proportion", title: "Planejamento individual",
      text: "Cada tratamento é pensado a partir das características, proporções e objetivos de cada paciente." },
    { icon: "ruler", title: "Precisão",
      text: "Técnica, anatomia e atenção aos detalhes em cada etapa do procedimento." },
    { icon: "care", title: "Acompanhamento próximo",
      text: "Cuidado contínuo antes, durante e depois de cada tratamento." },
  ],
};

export const TREATMENTS = {
  eyebrow: "Tratamentos",
  heading: ["Cada rosto pede uma", "abordagem diferente."],
  bodyShort: "Escolhidos para cada rosto e objetivo.",
  body: "Procedimentos escolhidos a partir das proporções, características e objetivos de cada paciente.",
  items: [
    { slug: "contouring", name: "Harmonização Facial",
      text: "Equilíbrio entre proporções faciais, planejado de acordo com as características do seu rosto.",
      image: "/images/lumea/treatments/Harmonização facial.jpg", focus: "center 35%" },
    { slug: "lips", name: "Preenchimento Labial",
      text: "Volume, contorno e proporção labial planejados de acordo com as características do seu rosto.",
      image: "/images/lumea/treatments/Preenchimento labial.jpg", focus: "center 42%" },
    { slug: "botox", name: "Toxina Botulínica",
      text: "Tratamento para suavizar linhas de expressão preservando a naturalidade dos movimentos.",
      image: "/images/lumea/treatments/Toxina Botulínica.jpg", focus: "center 10%" },
    { slug: "biostimulators", name: "Bioestimuladores de Colágeno",
      text: "Estímulo gradual de colágeno para melhorar firmeza, qualidade e sustentação da pele.",
      image: "/images/lumea/treatments/Bioestimuladores de Colágeno.jpg", focus: "center 38%" },
    { slug: "skinbooster", name: "Skinbooster",
      text: "Hidratação profunda indicada para melhorar viço, textura e qualidade da pele.",
      image: "/images/lumea/treatments/Skinbooster.jpg", focus: "center 30%" },
    { slug: "skin", name: "Rejuvenescimento da Pele",
      text: "Tratamento voltado à textura, luminosidade e firmeza da pele, com protocolos individualizados.",
      image: "/images/lumea/treatments/Rejuvenescimento da Pele.jpg", focus: "center 40%" },
  ],
  learnMore: "Saiba mais",
  viewAllHref: "#treatments",
};

/* 04 — Banner CTA entre Tratamentos e Especialista: card editorial largo,
   headline de 2 linhas ("tratamento" em destaque na 1ª) + descrição + 1 CTA. */
export const RUPTURE = {
  headingPre: "Não sabe qual",
  headingHighlight: "tratamento",
  headingLine2: "é indicado para você?",
  body: "Na avaliação, analisamos suas características, objetivos e histórico para definir uma abordagem individual.",
  cta: "Agendar Avaliação",
  image: { src: "/images/lumea/banner.png", alt: "Atmosfera de cuidado em procedimento estético na Luméa" },
};

/* 05 — Especialista. Absorve os números que antes viviam isolados em Stats. */
export const SPECIALIST = {
  eyebrow: "A especialista",
  name: "Dra. Lívia Monteiro",
  role: "Biomédica Esteta · Especialista em Estética Avançada",
  quote: "Meu trabalho não começa escolhendo um procedimento. Começa entendendo o que realmente faz sentido para cada rosto.",
  bio: "Biomédica especializada em estética avançada e harmonização facial, Dra. Lívia Monteiro atua com foco em tratamentos individualizados e resultados naturais. Seu trabalho parte da análise das proporções faciais para definir intervenções precisas, respeitando as características e os objetivos de cada paciente.",
  /* Demonstrativo: descrições genéricas de formação, sem vincular a
     instituições, títulos ou registros de uma pessoa real (ver README do
     projeto sobre dados fictícios). */
  credentials: ["Biomedicina", "Estética Avançada", "Harmonização Facial", "Procedimentos Injetáveis"],
  stats: [
    { value: "10+", label: "Anos de experiência" },
    { value: "2.500+", label: "Procedimentos realizados" },
    { value: "1.800+", label: "Pacientes atendidas" },
  ],
  portrait: { src: "/images/lumea/Filosofia.png", alt: "Dra. Lívia Monteiro, especialista em estética avançada, sentada em um sofá segurando uma seringa" },
};

/* 06 — Resultados. Result showcase editorial: um único comparador grande por
   vez (nunca mais os 3 casos em zigue-zague), navegação troca o caso ativo. */
export const RESULTS = {
  eyebrow: "Resultados",
  headingLine1: "Sutil o suficiente",
  headingLine2Pre: "para continuar",
  headingLine2Highlight: "sendo você.",
  body: "Resultados que preservam sua expressão enquanto valorizam proporções, contornos e características individuais.",
  beforeLabel: "Antes",
  afterLabel: "Depois",
  demoDisclaimer: "Resultado individual. Cada paciente possui características e respostas diferentes ao tratamento.",
  /* Cada arquivo traz ANTES e DEPOIS na mesma imagem. layout "side": antes à
     esquerda, depois à direita — a imagem inteira é exibida, sem recorte.
     layout "stacked": antes em cima, depois embaixo (Preenchimento Labial);
     cada metade vira um quadro e os dois ficam lado a lado. `width` = largura
     máxima do caso em px (imagens quadradas ficam menores para não crescerem
     demais em altura). */
  cases: [
    { slug: "harmonizacao", treatment: "Harmonização Facial",
      text: "Proporções equilibradas e contornos mais definidos, sem mudar a sua identidade.",
      image: "/images/lumea/results/Harmonização Facial antes e depois.jpg", layout: "side", w: 1200, h: 1200, width: 780 },
    { slug: "labial", treatment: "Preenchimento Labial",
      text: "Lábios com contorno, volume e simetria na medida certa para o seu rosto.",
      image: "/images/lumea/results/Preenchimento Labial antes e depois.jpg", layout: "stacked", w: 1199, h: 1496, width: 920 },
    { slug: "toxina", treatment: "Toxina Botulínica",
      text: "Linhas de expressão suavizadas e um olhar mais descansado, com naturalidade.",
      image: "/images/lumea/results/Toxina Botulínica antes e depois.jpg", layout: "side", w: 736, h: 551, width: 920 },
    { slug: "pele", treatment: "Rejuvenescimento da Pele",
      text: "Textura mais uniforme, luminosidade e firmeza para devolver o viço da pele.",
      image: "/images/lumea/results/Rejuvenescimento da Pele antes e depois.jpg", layout: "side", w: 736, h: 736, width: 780 },
  ],
};

export const CTA_MID = {
  text: "Seu resultado começa com uma avaliação individual.",
  button: "Agendar Avaliação",
};

/* 08 — Experiência Luméa. Antes "Por dentro da Luméa": galeria estática de
   5 fotos lado a lado. Agora um carrossel editorial de 3 momentos. */
export const EXPERIENCE = {
  eyebrow: "A experiência Luméa",
  heading: "Da primeira avaliação ao acompanhamento.",
  body: "Cada etapa é pensada para que seu atendimento seja tranquilo, personalizado e cuidadoso, desde o primeiro contato até o acompanhamento após o procedimento.",
  photos: [
    { n: "01", file: "momento-procedimento.png", alt: "Profissional realizando procedimento estético em paciente na Luméa", position: "50% 42%" },
    { n: "02", file: "momento-equipe.png", alt: "Equipe da Luméa na recepção da clínica", position: "50% 34%" },
    { n: "03", file: "momento-presente.png", alt: "Profissional entregando presente de boas-vindas a paciente", position: "50% 40%" },
  ],
  items: [
    { n: "01", title: "Primeiro contato", text: "Um atendimento próximo para entender suas necessidades, expectativas e objetivos antes mesmo da sua chegada à clínica." },
    { n: "02", title: "Avaliação personalizada", text: "Durante a consulta, avaliamos suas características individuais e conversamos sobre as possibilidades mais adequadas para você." },
    { n: "03", title: "Procedimento", text: "Cada tratamento é realizado de forma individualizada, respeitando sua anatomia, seus objetivos e a naturalidade dos resultados." },
    { n: "04", title: "Acompanhamento", text: "O cuidado continua após o procedimento, com orientações e acompanhamento para que você se sinta segura em cada etapa." },
  ],
};

/* Segurança e cuidado: cuidados concretos do atendimento, sem certificações,
   selos nem alegações regulatórias. */
export const SAFETY = {
  eyebrow: "Segurança e cuidado",
  heading: "Cada detalhe importa.",
  intro: "Do primeiro contato ao acompanhamento após o procedimento, cada etapa é conduzida com atenção aos protocolos, às características individuais e aos cuidados necessários para cada paciente.",
  image: { src: "/images/lumea/segurança.jpg", w: 749, h: 1124, alt: "Profissional de máscara, touca e luvas realizando um atendimento em ambiente preparado" },
  items: [
    { title: "Avaliação antes do procedimento",
      text: "Cada atendimento começa com uma avaliação individual para compreender características, objetivos, histórico e possíveis contraindicações antes de qualquer procedimento." },
    { title: "Produtos e materiais adequados",
      text: "São utilizados produtos e materiais apropriados para cada procedimento, seguindo os cuidados necessários para preservar a qualidade e a segurança do atendimento." },
    { title: "Higiene e protocolos",
      text: "O ambiente e os materiais utilizados seguem rotinas de higienização e cuidados adequados para cada etapa do atendimento." },
    { title: "Orientações após o procedimento",
      text: "Após o atendimento, cada paciente recebe orientações específicas sobre cuidados, recuperação e os sinais que devem ser observados durante o período posterior ao procedimento." },
  ],
};

export const VISIT_CTA = {
  headingPre: "Agende sua",
  headingHighlight: "avaliação",
  headingLine2: "na Luméa.",
  body: "Um atendimento individual para entender seus objetivos e avaliar quais tratamentos fazem sentido para você.",
  button: "Agendar Avaliação",
};

/* Depoimentos são conteúdo demonstrativo deste projeto conceitual — não
   representam pacientes reais nem avaliações verificadas (ver Footer). */
export const TESTIMONIALS = {
  rating: "5,0",
  ratingLabel: "Avaliações de pacientes",
  items: [
    { id: "t1", name: "Mariana R.", stars: 5, when: "há 2 semanas",
      quote: "Fui querendo fazer preenchimento e, durante a avaliação, a Dra. Lívia explicou que não era o que eu precisava naquele momento. Gostei muito da sinceridade." },
    { id: "t2", name: "Camila A.", stars: 5, when: "há 1 mês",
      quote: "O que mais gostei foi não sentir pressão para fazer vários procedimentos. Conversamos bastante e começamos só pelo que fazia sentido para mim." },
    { id: "t3", name: "Fernanda M.", stars: 5, when: "há 1 mês",
      quote: "Tinha muito medo de ficar artificial. Ela explicou todo o planejamento antes e o resultado ficou muito mais discreto do que eu imaginava." },
    { id: "t4", name: "Juliana A.", stars: 5, when: "há 2 meses",
      quote: "Desde a primeira avaliação me senti muito tranquila. Todas as etapas foram explicadas e consegui tirar minhas dúvidas antes de decidir." },
    { id: "t5", name: "Beatriz S.", stars: 5, when: "há 3 semanas",
      quote: "Fiz toxina botulínica pela primeira vez e o resultado foi exatamente o que eu queria: as linhas suavizaram e continuo com a minha expressão. Ambiente lindo e super acolhedor." },
    { id: "t6", name: "Larissa P.", stars: 5, when: "há 2 meses",
      quote: "Atendimento impecável do começo ao fim. Me mandaram orientações depois do procedimento e ainda perguntaram como eu estava na semana seguinte." },
    { id: "t7", name: "Renata C.", stars: 5, when: "há 4 meses",
      quote: "Já passei por outras clínicas e aqui é a primeira vez que sinto que olham o meu rosto como um todo, e não só a área que eu pedi. Voltarei com certeza." },
    { id: "t8", name: "Patrícia L.", stars: 4, when: "há 3 meses",
      quote: "Gostei muito do skinbooster, minha pele está com outro viço. Só achei que a agenda é bem concorrida, então vale marcar com antecedência." },
    { id: "t9", name: "Amanda F.", stars: 5, when: "há 5 meses",
      quote: "Fiz o preenchimento labial e ficou super natural, ninguém percebeu que fiz algo, só me perguntam se estou diferente. A Dra. Lívia tem um olhar muito cuidadoso." },
    { id: "t10", name: "Gabriela T.", stars: 5, when: "há 6 meses",
      quote: "Comecei com os bioestimuladores e estou apaixonada pela evolução. O resultado vem aos poucos, de forma bem natural, exatamente como ela havia explicado." },
    { id: "t11", name: "Isabela N.", stars: 5, when: "há 7 meses",
      quote: "Sou bem exigente e cheguei meio insegura. Saí da consulta muito confiante: tudo muito transparente, sem promessas exageradas." },
    { id: "t12", name: "Carolina V.", stars: 4, when: "há 8 meses",
      quote: "Equipe atenciosa e clínica impecável de tão limpa e organizada. Fiquei muito satisfeita com a harmonização, o resultado foi sutil e elegante." },
  ],
};

/* 12 — Localização. Usa só endereço/telefone/e-mail já existentes no
   projeto — nenhum horário de funcionamento é inventado. */
export const LOCATION = {
  eyebrow: "Visite a Luméa",
  headingLine1: "Um espaço pensado",
  headingLine2Pre: "para ",
  headingLine2Highlight: "receber você.",
  intro: "Atendimento com hora marcada em um ambiente reservado e preparado para receber você com tranquilidade.",
  addressLabel: "Endereço",
  address: "Rua Oscar Freire, 1250\nJardins, São Paulo - SP\n01426-001",
  hoursLabel: "Horários",
  hours: ["Segunda a sexta · 9h às 19h", "Sábado · 9h às 14h"],
  contactLabel: "Contato",
  contact: "(21) 98604-4236",
  cta: "Como chegar",
  geo: ["Jardins", "São Paulo, SP"],
};

/* Redes sociais do rodapé. Os perfis da Luméa ainda não existem no projeto:
   `href: "#"` é placeholder (o clique não faz nada). Trocar pelas URLs reais
   quando houver. */
export const SOCIALS = [
  { key: "instagram", label: "Instagram", href: "#" },
  { key: "x", label: "X", href: "#" },
  { key: "facebook", label: "Facebook", href: "#" },
  { key: "linkedin", label: "LinkedIn", href: "#" },
] as const;

export const FOOTER = {
  institutional: "Luméa Estética Avançada",
  headline: ["Estética que valoriza", "o que faz você única."],
  address: "Rua Oscar Freire, 1250\nJardins, São Paulo - SP\n01426-001",
  clinicLinks: [
    { label: "Sobre", href: "#philosophy" },
    { label: "Especialista", href: "#specialist" },
    { label: "Resultados", href: "#results" },
    { label: "Localização", href: "#location" },
  ],
  /* Sem página própria por tratamento — os 4 apontam para a seção geral
     de Tratamentos, que é o destino real que existe no projeto. */
  treatmentLinks: [
    { label: "Harmonização Facial", href: "#treatments" },
    { label: "Toxina Botulínica", href: "#treatments" },
    { label: "Preenchimentos", href: "#treatments" },
    { label: "Bioestimuladores", href: "#treatments" },
  ],
  phone: "(21) 98604-4236",
  email: "hello@lumeaaesthetics.com",
  /* Sem perfil/número reais cadastrados no projeto ainda — placeholders
     seguros (não quebram o site), a trocar quando existirem. */
  careLinks: [
    { label: "Agendar avaliação", href: "#visit" },
    { label: "WhatsApp", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  copyright: "© 2026 Luméa Estética Avançada",
  rightsLine: "Todos os direitos reservados",
  legalLinks: [
    { label: "Política de Privacidade", href: "#" },
  ],
  /* Discreto de propósito — ver instrução na linha jurídica do rodapé, não
     é um aviso/banner. */
  conceptNote: "Projeto conceitual",
};

export const BRAND = {
  name: "Luméa Estética Avançada",
  short: "Luméa",
  subtitle: "ESTÉTICA AVANÇADA",
  city: "São Paulo, Brasil",
};

/* WhatsApp da clínica: destino do botão flutuante e de todos os botões de
   agendar. `number` = só dígitos, com DDI (55) + DDD (21). */
export const WHATSAPP = {
  number: "5521986044236",
  message: "Olá! Gostaria de agendar uma avaliação na Luméa.",
  tooltip: "Fale conosco",
};

/* Perguntas frequentes: foco em dúvidas práticas antes de agendar (processo,
   preparo, recuperação, duração) — sem repetir os argumentos de filosofia,
   especialista e tratamentos já presentes nas outras seções. */
export const FAQ = {
  eyebrow: "Dúvidas frequentes",
  heading: "Antes da sua avaliação, algumas respostas.",
  /* Duas abas: o que acontece até a consulta e o que vem depois do procedimento. */
  groups: [
    { key: "avaliacao", label: "Avaliação", items: [
      { q: "Como funciona a primeira avaliação?",
        a: "A primeira consulta é o momento de entender suas queixas, expectativas e objetivos. Também avaliamos as características do rosto e da pele para identificar quais possibilidades fazem sentido para o seu caso. A indicação de qualquer procedimento acontece somente após essa avaliação." },
      { q: "Preciso saber qual procedimento quero fazer antes de agendar?",
        a: "Não. Você não precisa chegar à consulta sabendo exatamente qual tratamento realizar. A avaliação serve justamente para entender suas necessidades e apresentar as possibilidades mais adequadas para o seu caso." },
      { q: "Posso combinar mais de um tratamento?",
        a: "Em alguns casos, diferentes procedimentos podem ser associados para tratar aspectos complementares. Essa decisão depende da avaliação individual e do que realmente faz sentido para cada paciente." },
      { q: "Como sei qual tratamento é indicado para mim?",
        a: "A indicação depende das características que desejamos tratar, da condição da pele, das proporções faciais e dos objetivos de cada paciente. Por isso, a recomendação é feita durante a avaliação, e não apenas pelo nome do procedimento." },
    ] },
    { key: "procedimento", label: "Procedimento", items: [
      { q: "Os procedimentos exigem algum preparo?",
        a: "O preparo varia de acordo com o procedimento escolhido. Durante a avaliação, você recebe todas as orientações necessárias para chegar ao tratamento de forma adequada e segura." },
      { q: "Quanto tempo dura a recuperação?",
        a: "O período de recuperação varia conforme o procedimento realizado e as características de cada paciente. Durante a consulta, explicamos o que esperar após o tratamento e quais cuidados devem ser seguidos." },
      { q: "Quando posso voltar à minha rotina?",
        a: "Isso depende do procedimento realizado e da resposta individual de cada paciente. As orientações sobre atividades, cuidados e retorno à rotina são explicadas especificamente para o tratamento realizado." },
      { q: "Os resultados são permanentes?",
        a: "A duração dos resultados depende do procedimento, do organismo e dos cuidados de cada paciente. Durante a avaliação, explicamos a expectativa de duração e se são necessários tratamentos de manutenção." },
    ] },
  ],
};

/** Link wa.me com a mensagem pronta — usado por todos os CTAs de agendamento. */
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`;
