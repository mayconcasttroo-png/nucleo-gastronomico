export type Restaurant = {
  id: string;
  name: string;
  description: string;
  address?: string;
  dishName: string;
  dishDescription?: string;
  dishImage?: string;
  coords?: { lat: number; lng: number };
};

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'bossa',
    name: 'BOSSA',
    description: 'Frutos do mar com toque contemporâneo e criativo.',
    address: 'Avenida Costa Azul, Rio das Ostras',
    dishName: 'Canoeiro',
    dishDescription:
      'Filé de salmão grelhado com batata ao murro, pangranato de coco e espuma leve de moqueca.',
    dishImage:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop&crop=faces&sat=-100&exp=15',
    coords: { lat: -22.52245, lng: -41.92046 },
  },
  {
    id: 'bartro',
    name: 'BARTRÔ',
    description: 'Bar moderno com boas porções e drinques autorais.',
    address: 'Rua Jandira Moraes Pimentel, 449 - Centro, Rio das Ostras',
    dishName: 'Maracangalha',
    dishDescription: 'Camarões grelhados sobre musseline de batata-doce com molho de maracujá.',
    dishImage:
      'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1200&auto=format&fit=crop&crop=faces&sat=-100&exp=15',
    coords: { lat: -22.5273042, lng: -41.9403437 },
  },
  {
    id: 'degusta',
    name: 'DEGUSTA – Comida Mexicana',
    description: 'Sabores mexicanos com uma pegada praiana.',
    address: 'Praça São Pedro, 99 - Centro, Rio das Ostras',
    dishName: 'Samba da Minha Terra',
    dishDescription:
      'Camarões ao estilo moqueca com crosta de farinha panko e catupiry.',
    dishImage: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -22.5272771, lng: -41.9455901 },
  },
  {
    id: 'delicias-de-casa',
    name: 'DELÍCIAS DE CASA',
    description: 'Culinária caseira com ingredientes frescos e saborosos.',
    address: 'Rua Jandira Moraes Pimentel - Centro, Rio das Ostras',
    dishName: 'Sabor da Maré',
    dishDescription: 'Filé de peixe grelhado com arroz de mariscos e farofa de castanha.',
    dishImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -22.5273042, lng: -41.9403437 },
  },
  {
    id: 'paiol',
    name: 'PAIOL Hamburgueria / Restaurante',
    description: 'Hambúrgueres artesanais e pratos do mar no mesmo cardápio.',
    address: 'Av. Principal, 200',
    dishName: 'Jangada',
    dishDescription:
      'Sanduíche com polvo grelhado, aioli de limão siciliano e rúcula no pão artesanal.',
    dishImage: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -12.9795, lng: -38.5000 },
  },
  {
    id: 'fornella',
    name: 'FORNELLA PIZZARIA',
    description: 'Pizza napolitana com ingredientes regionais.',
    address: 'R. Itália, 10',
    dishName: 'Pizza Encanto do Litoral',
    dishDescription:
      'Pizza com salmão e molho de maracujá, cream cheese e mussarela.',
    dishImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -12.9710, lng: -38.5020 },
  },
  {
    id: 'melanina',
    name: 'MELANINA (Café / Sobremesa)',
    description: 'Cafeteria e doces com identidade nordestina.',
    address: 'R. das Artes, 22',
    dishName: 'Lenda do Abaeté',
    dishDescription:
      'Sobremesa de creme caramelo com leite de coco e caramelo de café.',
    dishImage: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -12.9742, lng: -38.4980 },
  },
  {
    id: 'rico',
    name: 'RICO',
    description: 'Cozinha contemporânea com pegada litorânea.',
    address: 'Av. Beira-Mar, 300',
    dishName: 'Risoto das Ondas de Caymmi',
    dishDescription: 'Risoto criativo com frutos do mar e toque litorâneo.',
    dishImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -12.9725, lng: -38.5005 },
  },
  {
    id: 'vila-portuguesa',
    name: 'VILA PORTUGUESA',
    description: 'Sabores portugueses com influência do litoral.',
    address: 'R. do Fado, 7',
    dishName: 'Acalanto',
    dishDescription:
      'Gambas à Brás com camarões, batata palha artesanal e ervas frescas.',
    dishImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -12.9700, lng: -38.4960 },
  },
  {
    id: 'picanha-da-praia',
    name: 'PICANHA DA PRAIA',
    description: 'Churrascaria com opções de frutos do mar.',
    address: 'Av. das Ondas, 88',
    dishName: 'Encanto da Baía',
    dishDescription: 'Camarões ao molho curry com abacaxi e legumes braseados.',
    dishImage: 'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1200&auto=format&fit=crop&crop=faces&sat=-100&exp=15',
    coords: { lat: -12.9680, lng: -38.4950 },
  },
  {
    id: 'paladar-nordestino',
    name: 'PALADAR NORDESTINO',
    description: 'Comida nordestina com toques contemporâneos.',
    address: 'R. do Coco, 9',
    dishName: 'Barca do Bosque',
    dishDescription: 'Filé de linguado com camarões e molho de romã, acompanhado de legumes.',
    dishImage: 'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -12.9750, lng: -38.5070 },
  },

  {
    id: 'poke-da-casa',
    name: 'POKE DA CASA',
    description: 'Poke bowls frescos com peixes e ingredientes locais.',
    address: 'R. das Algas, 3',
    dishName: 'Caymmi Sunset',
    dishDescription: 'Poke de camarões marinados com abacate e cebola roxa.',
    dishImage: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -12.9735, lng: -38.4995 },
  },
  {
    id: 'sirisao',
    name: 'TrikTrik',
    description: 'Mariscos e pratos do litoral com personalidade.',
    address: 'Praça do Mar, 1',
    dishName: 'Encanto do Mar',
    dishDescription: 'Prato com polvo e frutos do mar inspirado no litoral.',
    dishImage: 'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1200&auto=format&fit=crop&crop=faces&sat=-100&exp=15',
    coords: { lat: -12.9770, lng: -38.5040 },
  }
];

export function getRestaurantById(id: string) {
  return RESTAURANTS.find((r) => r.id === id) || null;
}
