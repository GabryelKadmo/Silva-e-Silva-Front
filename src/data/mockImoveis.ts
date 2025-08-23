import type { LatLngTuple } from "leaflet";

export interface Imovel {
  id: number;
  endereco: string;
  quartos: number;
  banheiros: number;
  area: number;
  preco: number;
  imagem: string;
  coordenadas: LatLngTuple;
  bairro?: string;
  tipo?: "casa" | "apartamento" | "sobrado" | "kitnet";
  descricao?: string;
}

// Mock data para os imóveis em Ribeirão Preto, SP
export const mockImoveis: Imovel[] = [
  {
    id: 1,
    endereco: "Rua das Árvores, 123, Jardim Botânico, Ribeirão Preto - SP",
    quartos: 3,
    banheiros: 2,
    area: 167,
    preco: 750000,
    imagem:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
    coordenadas: [-21.1775, -47.8208],
    bairro: "Jardim Botânico",
    tipo: "casa",
    descricao: "Casa moderna com jardim e garagem para 2 carros",
  },
  {
    id: 2,
    endereco: "Avenida dos Bandeirantes, 456, Centro, Ribeirão Preto - SP",
    quartos: 4,
    banheiros: 3,
    area: 232,
    preco: 950000,
    imagem:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400",
    coordenadas: [-21.165, -47.81],
    bairro: "Centro",
    tipo: "apartamento",
    descricao: "Apartamento no centro com vista panorâmica",
  },
  {
    id: 3,
    endereco: "Alameda dos Pinheiros, 789, Sumarezinho, Ribeirão Preto - SP",
    quartos: 2,
    banheiros: 2,
    area: 111,
    preco: 550000,
    imagem:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400",
    coordenadas: [-21.19, -47.83],
    bairro: "Sumarezinho",
    tipo: "apartamento",
    descricao: "Apartamento próximo à USP, ideal para estudantes",
  },
  {
    id: 4,
    endereco:
      "Rua Voluntários da Pátria, 321, Campos Elíseos, Ribeirão Preto - SP",
    quartos: 3,
    banheiros: 2,
    area: 145,
    preco: 680000,
    imagem:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=400",
    coordenadas: [-21.172, -47.815],
    bairro: "Campos Elíseos",
    tipo: "casa",
    descricao: "Casa em bairro residencial tranquilo",
  },
  {
    id: 5,
    endereco:
      "Avenida Presidente Vargas, 567, Higienópolis, Ribeirão Preto - SP",
    quartos: 4,
    banheiros: 4,
    area: 280,
    preco: 1200000,
    imagem:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=400",
    coordenadas: [-21.158, -47.805],
    bairro: "Higienópolis",
    tipo: "sobrado",
    descricao: "Sobrado de luxo em bairro nobre",
  },
  {
    id: 6,
    endereco: "Rua da Liberdade, 890, Vila Tibério, Ribeirão Preto - SP",
    quartos: 2,
    banheiros: 1,
    area: 85,
    preco: 380000,
    imagem:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400",
    coordenadas: [-21.195, -47.838],
    bairro: "Vila Tibério",
    tipo: "casa",
    descricao: "Casa simples em bairro tradicional",
  },
];

// Coordenadas centrais dos bairros de Ribeirão Preto para proteção de privacidade
export const BAIRROS_COORDENADAS: Record<string, LatLngTuple> = {
  "Jardim Botânico": [-21.1775, -47.8208],
  Centro: [-21.165, -47.81],
  Sumarezinho: [-21.19, -47.83],
  "Campos Elíseos": [-21.172, -47.815],
  Higienópolis: [-21.158, -47.805],
  "Vila Tibério": [-21.195, -47.838],
};

// Coordenadas e limites específicos de Ribeirão Preto
export const RIBEIRAO_PRETO_CONFIG = {
  center: [-21.1775, -47.8208] as LatLngTuple,
  // Bounds muito restritivos APENAS para a área urbana de Ribeirão Preto
  bounds: [
    [-21.21, -47.86], // Southwest (sul/oeste da cidade)
    [-21.14, -47.78], // Northeast (norte/leste da cidade)
  ] as [LatLngTuple, LatLngTuple],
  zoom: 12, // Zoom para mostrar a cidade toda
  maxZoom: 18,
};
