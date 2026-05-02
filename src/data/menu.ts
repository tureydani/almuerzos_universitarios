import { buildImagePath } from '../utils/assets'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  image: string
}

export type MenuCategory = {
  id: string
  title: string
  description: string
  previewImage: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'desayunos',
    title: 'Desayunos',
    description: 'Empieza el dia con energia suave y sabores caseros.',
    previewImage: buildImagePath('desayunos', 'menudes.png'),
    items: [
      {
        id: 'avena-energetica',
        name: 'Avena energetica',
        description: 'Avena cremosa, frutas de temporada y semillas.',
        price: 'Bs 14',
        image: buildImagePath('desayunos', 'notadesayunos.png'),
      },
      {
        id: 'tostadas-integrales',
        name: 'Tostadas integrales',
        description: 'Pan integral, palta y huevo suave.',
        price: 'Bs 16',
        image: buildImagePath('desayunos', 'notadesayunos.png'),
      },
      {
        id: 'bowl-frutal',
        name: 'Bowl frutal',
        description: 'Yogurt natural, granola artesanal y frutas frescas.',
        price: 'Bs 15',
        image: buildImagePath('desayunos', 'notadesayunos.png'),
      },
    ],
  },
  {
    id: 'viandas',
    title: 'Viandas',
    description: 'Comidas listas para llevar, equilibradas y practicas.',
    previewImage: buildImagePath('viandas', 'menuviandas.png'),
    items: [
      {
        id: 'vianda-pollo',
        name: 'Vianda de pollo al horno',
        description: 'Pollo jugoso, arroz integral y ensalada fresca.',
        price: 'Bs 22',
        image: buildImagePath('viandas', 'notavianda.png'),
      },
      {
        id: 'vianda-vegetariana',
        name: 'Vianda vegetariana',
        description: 'Quinua, vegetales salteados y aderezo herbal.',
        price: 'Bs 20',
        image: buildImagePath('viandas', 'notavianda.png'),
      },
      {
        id: 'vianda-res',
        name: 'Vianda de res suave',
        description: 'Carne magra, papa dorada y ensalada tibia.',
        price: 'Bs 24',
        image: buildImagePath('viandas', 'notavianda.png'),
      },
    ],
  },
  {
    id: 'almuerzos',
    title: 'Almuerzos',
    description: 'Platos reconfortantes para una pausa completa.',
    previewImage: buildImagePath('almuerzos', 'menualm.png'),
    items: [
      {
        id: 'almuerzo-casero',
        name: 'Almuerzo casero',
        description: 'Proteina del dia, guarnicion y ensalada.',
        price: 'Bs 19',
        image: buildImagePath('almuerzos', 'notaalmuerzo.png'),
      },
      {
        id: 'sopa-nutritiva',
        name: 'Sopa nutritiva',
        description: 'Sopa caliente con verduras y granos.',
        price: 'Bs 16',
        image: buildImagePath('almuerzos', 'notaalmuerzo.png'),
      },
      {
        id: 'bowl-andino',
        name: 'Bowl andino',
        description: 'Quinua, vegetales asados y salsa casera.',
        price: 'Bs 21',
        image: buildImagePath('almuerzos', 'notaalmuerzo.png'),
      },
    ],
  },
  {
    id: 'postres',
    title: 'Postres',
    description: 'Dulces ligeros que suman bienestar.',
    previewImage: buildImagePath('postres', 'menupostr.png'),
    items: [
      {
        id: 'chia-frutos',
        name: 'Chia con frutos rojos',
        description: 'Pudin de chia con leche vegetal.',
        price: 'Bs 12',
        image: buildImagePath('postres', 'notapostre.png'),
      },
      {
        id: 'mousse-cacao',
        name: 'Mousse de cacao',
        description: 'Cacao natural, textura suave y ligera.',
        price: 'Bs 13',
        image: buildImagePath('postres', 'notapostre.png'),
      },
      {
        id: 'bites-avena',
        name: 'Bites de avena',
        description: 'Dulce artesanal con frutos secos.',
        price: 'Bs 10',
        image: buildImagePath('postres', 'notapostre.png'),
      },
    ],
  },
]
