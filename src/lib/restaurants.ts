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
    coords: { lat: -22.525005044825953, lng: -41.92196604541569 },
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
    coords: { lat: -22.526917305763018, lng: -41.94272508959807 },
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
    coords: { lat: -22.51847071710228, lng: -41.92148717425248 },
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
    coords: { lat: -22.51582263722419, lng: -41.93056381657957 },
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
    coords: { lat: -22.494232227910985, lng: -41.92426667610864 },
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
    coords: { lat: -22.515611092827733, lng: -41.92601883192523 },
  },
  {
    id: 'rico',
    name: 'RICO',
    description: 'Cozinha contemporânea com pegada litorânea.',
    address: 'Av. Beira-Mar, 300',
    dishName: 'Risoto das Ondas de Caymmi',
    dishDescription: 'Risoto criativo com frutos do mar e toque litorâneo.',
    dishImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -22.526143574027184, lng: -41.92281483192503 },
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
    coords: { lat: -22.510775083583702, lng: -41.92774151582527 },
  },
  {
    id: 'picanha-da-praia',
    name: 'PICANHA DA PRAIA',
    description: 'Churrascaria com opções de frutos do mar.',
    address: 'Av. das Ondas, 88',
    dishName: 'Encanto da Baía',
    dishDescription: 'Camarões ao molho curry com abacaxi e legumes braseados.',
    dishImage: 'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1200&auto=format&fit=crop&crop=faces&sat=-100&exp=15',
    coords: { lat: -22.52587965592853, lng: -41.922497416579205 },
  },
  {
    id: 'paladar-nordestino',
    name: 'PALADAR NORDESTINO',
    description: 'Comida nordestina com toques contemporâneos.',
    address: 'R. do Coco, 9',
    dishName: 'Barca do Bosque',
    dishDescription: 'Filé de linguado com camarões e molho de romã, acompanhado de legumes.',
    dishImage: 'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -22.515313580581342, lng: -41.926299816579515 },
  },

  {
    id: 'poke-da-casa',
    name: 'POKE DA CASA',
    description: 'Poke bowls frescos com peixes e ingredientes locais.',
    address: 'R. das Algas, 3',
    dishName: 'Caymmi Sunset',
    dishDescription: 'Poke de camarões marinados com abacate e cebola roxa.',
    dishImage: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop',
    coords: { lat: -22.525518073130037, lng: -41.95650005890625 },
  },
  {
    id: 'sirisao',
    name: 'TrikTrik',
    description: 'Mariscos e pratos do litoral com personalidade.',
    address: 'Praça do Mar, 1',
    dishName: 'Encanto do Mar',
    dishDescription: 'Prato com polvo e frutos do mar inspirado no litoral.',
    dishImage: 'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1200&auto=format&fit=crop&crop=faces&sat=-100&exp=15',
    coords: { lat: -22.519744600531606, lng: -41.91951480560751 },
  },
  {
    id: 'alpha-teste',
    name: 'alpha teste',
    description: 'Restaurante de teste para desenvolvimento.',
    address: 'rua cachoeira de macacu, 520 casa, jardim marileia, rio das ostras-rj',
    dishName: 'teste',
    dishDescription: 'Prato de teste com ingredientes de teste.',
    dishImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop&crop=faces&sat=-100&exp=15',
    coords: { lat: -22.443088655131202, lng: -41.87394330309098 },
  }
];

export function getRestaurantById(id: string) {
  return RESTAURANTS.find((r) => r.id === id) || null;
}
