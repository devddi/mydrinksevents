export interface EventImage {
  id: string;
  url: string;
  caption?: string;
}

export interface MyEvent {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  gallery: EventImage[];
}

export const mockEvents: MyEvent[] = [
  {
    id: "1",
    title: "Casamento de Gabriela e Thiago",
    date: "15 de Outubro de 2025",
    shortDescription: "Uma celebração inesquecível ao pôr do sol com drinks personalizados e muita emoção.",
    fullDescription: "O casamento de Gabriela e Thiago foi uma verdadeira obra de arte. Realizado em uma fazenda centenária, a proposta era unir o rústico ao luxo. Nossa equipe de mixologistas desenvolveu 3 drinks autorais exclusivos para o casal, inspirados em suas viagens pela Europa. O bar funcionou por 10 horas ininterruptas, com destaque para o 'Totem Digital', onde os convidados escolhiam suas bebidas de forma interativa. A experiência foi marcada pela elegância, atendimento impecável e sabores únicos.",
    coverImage: "/assets/nossas-entregas/estrutura-premium.jpg",
    gallery: [
      { id: "g1", url: "/assets/nossas-entregas/drinks-autorais.jpg", caption: "Drinks Autorais Exclusivos" },
      { id: "g2", url: "/assets/nossas-entregas/atendimento.jpg", caption: "Atendimento Impecável" },
      { id: "g3", url: "/assets/nossas-entregas/ambientacao.jpg", caption: "Ambientação do Bar" },
      { id: "g4", url: "/assets/nossas-entregas/experiencia-personalizada.jpg", caption: "Momentos Únicos" },
      { id: "g5", url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80", caption: "Detalhes do Drink" },
      { id: "g6", url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80", caption: "Mixologia em Ação" }
    ]
  },
  {
    id: "2",
    title: "Baile de Gala XYZ",
    date: "22 de Novembro de 2025",
    shortDescription: "Luxo, sofisticação e uma carta de drinks clássicos reinventados para um evento corporativo de alto nível.",
    fullDescription: "Para o evento anual da empresa XYZ, o desafio era impressionar 500 convidados de alto escalão com um serviço impecável e veloz. Implementamos nossa solução de 'Bar Sem Filas', com três amplos pontos de atendimento e mais de 10 bartenders trabalhando em sincronia. A estrela da noite foi a apresentação da 'Tábua de Shots com LED', que trouxe um momento de celebração surpreendente. Os drinks foram servidos em taças de cristal premium, elevando a experiência ao mais alto padrão corporativo.",
    coverImage: "/assets/nossas-entregas/espaco-fisico.jpg",
    gallery: [
      { id: "g1", url: "/assets/nossas-entregas/sem-filas.jpg", caption: "Eficiência e Velocidade" },
      { id: "g2", url: "/assets/nossas-entregas/tabua-shots-led.png", caption: "Celebração com Shots" },
      { id: "g3", url: "/assets/nossas-entregas/totem-digital.jpg", caption: "Inovação no Atendimento" },
      { id: "g4", url: "https://images.unsplash.com/photo-1470337458703-4151201460bc?auto=format&fit=crop&q=80", caption: "Taças Premium" },
      { id: "g5", url: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80", caption: "Detalhes do Bar" },
      { id: "g6", url: "https://images.unsplash.com/photo-1574096079513-d8259312b78a?auto=format&fit=crop&q=80", caption: "Mixologista" }
    ]
  },
  {
    id: "3",
    title: "Aniversário de 30 da Sofia",
    date: "05 de Dezembro de 2025",
    shortDescription: "Festa tropical com um bar vibrante, muita energia e drinks refrescantes à beira da piscina.",
    fullDescription: "Os 30 anos da Sofia foram comemorados de forma inesquecível: um luau sofisticado. O bar de drinks foi o centro das atenções, com um design totalmente integrado ao tema tropical, utilizando folhagens naturais e iluminação suave. Trouxemos uma carta focada em frescor, utilizando frutas exóticas, espumas aromáticas e fumaça em alguns coquetéis para o efeito 'wow'. A energia da equipe contagiou os convidados, transformando a preparação de cada drink em um pequeno espetáculo particular.",
    coverImage: "/assets/nossas-entregas/totem-digital.png",
    gallery: [
      { id: "g1", url: "/assets/nossas-entregas/drinks-autorais.jpg", caption: "Cores e Sabores" },
      { id: "g2", url: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80", caption: "Toque Tropical" },
      { id: "g3", url: "https://images.unsplash.com/photo-1601000676458-7578013e8400?auto=format&fit=crop&q=80", caption: "Refrescância" },
      { id: "g4", url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80", caption: "Preparo Cuidadoso" },
      { id: "g5", url: "https://images.unsplash.com/photo-1575037614876-c3853d9e80a0?auto=format&fit=crop&q=80", caption: "Espumas e Aromas" }
    ]
  },
  {
    id: "4",
    title: "Lançamento da Marca Nova",
    date: "12 de Janeiro de 2026",
    shortDescription: "Evento de RP focado em conexões, networking e coquetelaria minimalista.",
    fullDescription: "Neste evento focado na imprensa e influenciadores para o lançamento de uma nova marca de moda, a precisão visual era mandatória. Criamos um bar no estilo 'Speakeasy' moderno, super clean. Os drinks seguiram a paleta de cores da marca, utilizando técnicas como clarificação (drinks transparentes mas cheios de sabor) e gelos cristalinos com o logo da empresa carimbado. A sutileza e o minimalismo provaram que, muitas vezes, menos é realmente mais.",
    coverImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80",
    gallery: [
      { id: "g1", url: "https://images.unsplash.com/photo-1609951651556-5334e2706168?auto=format&fit=crop&q=80", caption: "Gelo Cristalino" },
      { id: "g2", url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80", caption: "Minimalismo" },
      { id: "g3", url: "https://images.unsplash.com/photo-1470337458703-4151201460bc?auto=format&fit=crop&q=80", caption: "Apresentação Impecável" },
      { id: "g4", url: "/assets/nossas-entregas/experiencia-personalizada.jpg", caption: "Experiência de Marca" }
    ]
  }
];
