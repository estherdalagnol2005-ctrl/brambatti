/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductCategory, Differential, Region, CredibilityItem } from './types';

export const WHATSAPP_NUMBER = '54992819218';
export const WHATSAPP_LINK_BASE = 'https://wa.me/5554992819218';

export const getWhatsAppLink = (message?: string) => {
  if (!message) return WHATSAPP_LINK_BASE;
  return `${WHATSAPP_LINK_BASE}?text=${encodeURIComponent(message)}`;
};

export const CREDIBILITY_ITEMS: CredibilityItem[] = [
  {
    id: 'years',
    metric: '19+ Anos',
    label: 'No mercado da beleza gaúcha',
  },
  {
    id: 'clients',
    metric: '2.000+',
    label: 'Clientes e salões atendidos',
  },
  {
    id: 'awards',
    metric: '3x Premiada',
    label: 'Destaque oficial pela Ecosmetics',
  },
  {
    id: 'regions',
    metric: 'Multi-Regiões',
    label: 'Atendimento presencial no RS',
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'coloracao',
    name: 'Coloração Profissional',
    description: 'Cores vibrantes, cobertura perfeita de brancos e alta durabilidade com tecnologia protetora dos fios.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    whatsappMessage: 'Olá! Gostaria de mais informações sobre a linha de Coloração Profissional da Ecosmetics.',
  },
  {
    id: 'descolorantes',
    name: 'Pós Descolorantes',
    description: 'Abertura de tons precisa, segura e uniforme, mantendo a integridade da fibra capilar.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    whatsappMessage: 'Olá! Gostaria de mais informações sobre os Pós Descolorantes profissionais da Ecosmetics.',
  },
  {
    id: 'shampoos',
    name: 'Shampoos & Condicionadores',
    description: 'Fórmulas de alta performance para limpeza profunda e condicionamento com ativos restauradores.',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
    whatsappMessage: 'Olá! Gostaria de mais informações sobre a linha de Shampoos e Condicionadores profissionais.',
  },
  {
    id: 'mascaras',
    name: 'Máscaras & Tratamentos',
    description: 'Nutrição, reconstrução e hidratação profunda que reparam danos químicos imediatos.',
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80',
    whatsappMessage: 'Olá! Gostaria de mais informações sobre as Máscaras e Tratamentos Ecosmetics.',
  },
  {
    id: 'finalizadores',
    name: 'Finalizadores Premium',
    description: 'Séruns, óleos e sprays que protegem contra calor, dão brilho extremo e selam as cutículas.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    whatsappMessage: 'Olá! Gostaria de mais informações sobre a linha de Finalizadores Premium da Ecosmetics.',
  },
  {
    id: 'manutencao',
    name: 'Produtos de Manutenção',
    description: 'Linhas Home Care que garantem a durabilidade dos resultados obtidos no salão.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    whatsappMessage: 'Olá! Gostaria de mais informações sobre os Produtos de Manutenção Home Care.',
  },
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: 'portfolio',
    title: 'Portfólio Selecionado',
    description: 'Curadoria focada em tecnologias inovadoras para tratamento e transformação capilar de alto nível.',
    iconName: 'Sparkles',
  },
  {
    id: 'atendimento',
    title: 'Atendimento Próximo',
    description: 'Consultores especializados prontos para visitar seu salão, entender suas necessidades e sugerir o melhor mix.',
    iconName: 'UserCheck',
  },
  {
    id: 'logistica',
    title: 'Logística Eficiente',
    description: 'Processos otimizados que garantem respostas ágeis e acompanhamento desde o pedido até a entrega.',
    iconName: 'Truck',
  },
  {
    id: 'qualidade',
    title: 'Qualidade & Regularidade',
    description: 'Estoques sempre abastecidos para garantir que seu salão nunca fique sem os produtos essenciais.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'suporte',
    title: 'Suporte Técnico',
    description: 'Auxílio sobre a melhor aplicação de cada produto e cursos de capacitação técnica autorizados.',
    iconName: 'GraduationCap',
  },
  {
    id: 'experiencia',
    title: 'Experiência no RS',
    description: 'Profundo conhecimento da dinâmica e do perfil dos profissionais e salões de beleza gaúchos.',
    iconName: 'MapPin',
  },
];

export const REGIONS: Region[] = [
  {
    id: 'caxias',
    name: 'Caxias do Sul',
    description: 'Nossa sede e centro logístico. Atendimento direto e imediato para salões da principal cidade industrial da Serra.',
    mainCities: ['Caxias do Sul', 'Galópolis', 'Ana Rech', 'Forqueta'],
  },
  {
    id: 'serra',
    name: 'Serra Gaúcha',
    description: 'Cobertura completa nas cidades do polo de turismo e beleza da serra, garantindo entregas recorrentes e visitas técnicas.',
    mainCities: ['Bento Gonçalves', 'Farroupilha', 'Gramado', 'Canela', 'Nova Prata', 'Carlos Barbosa', 'Garibaldi'],
  },
  {
    id: 'porto_alegre',
    name: 'Porto Alegre & Região Metropolitana',
    description: 'Atendimento qualificado na capital e arredores, apoiando os mais prestigiados salões de beleza da metrópole.',
    mainCities: ['Porto Alegre', 'Canoas', 'Novo Hamburgo', 'São Leopoldo', 'Gravataí', 'Viamão'],
  },
  {
    id: 'outras',
    name: 'Demais Regiões do RS',
    description: 'Atendimento via consultores regionais estrategicamente distribuídos por polos do interior gaúcho.',
    mainCities: ['Passo Fundo', 'Erechim', 'Santa Maria', 'Pelotas', 'Lajeado', 'Cruz Alta'],
  },
];

export const INSTAGRAM_LINK = 'https://www.instagram.com/brambatti_/';
export const ADDRESS_TEXT = 'Estrada Municipal Vicente Menezes, 338 - Linha 40 – Caxias do Sul/RS, CEP 95044-030';
export const MAPS_LINK = 'https://maps.google.com/?q=Estrada+Municipal+Vicente+Menezes,+338+-+Linha+40+-+Caxias+do+Sul/RS';
