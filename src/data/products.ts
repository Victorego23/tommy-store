import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Tommy Classic Air',
    price: 129.99,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    description: 'Zapatillas urbanas de máxima comodidad.',
    longDescription: 'Diseñadas para el día a día. Las Tommy Classic Air incorporan nuestra mejor tecnología de amortiguación. Su exterior de cuero sintético premium garantiza durabilidad extrema mientras mantienes un estilo clásico inconfundible.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    isNew: true
  },
  {
    id: '2',
    name: 'Streetwear Hoodie Pro',
    price: 89.50,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    description: 'Sudadera premium con interior de felpa.',
    longDescription: 'La sudadera definitiva para tus outfits streetwear. Construida con 100% algodón de alto gramaje, costuras reforzadas y un ajuste oversized perfecto. Resistente al viento y extremadamente suave.',
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true
  },
  {
    id: '3',
    name: 'Tommy Runner X1',
    price: 159.90,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
    description: 'Rendimiento superior en pista.',
    longDescription: 'Supera tus límites con las Runner X1. Suela de goma antideslizante ultraligera y malla transpirable que mantiene tus pies frescos. Ideales para maratones y entrenamientos intensos.',
    sizes: ['8', '9', '10', '11'],
    isNew: false
  },
  {
    id: '4',
    name: 'Oversized Minimal Tee',
    price: 34.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    description: 'Camiseta de algodón orgánico holgada.',
    longDescription: 'Menos es más. Camiseta básica de corte ancho (oversized), tejida con algodón 100% orgánico certificado. Ideal para armar cualquier outfit minimalista de alta gama.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: false
  },
  {
    id: '5',
    name: 'Urban Cargo Pants',
    price: 99.00,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    description: 'Pantalones cargo de alta resistencia.',
    longDescription: 'Con 6 bolsillos funcionales y tejido antidesgarro, estos pantalones combinan utilidad táctica con la estética urbana moderna.',
    sizes: ['28', '30', '32', '34', '36'],
    isNew: true
  },
  {
    id: '6',
    name: 'Tommy High-Top Kicks',
    price: 145.00,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80',
    description: 'Estilo botín clásico reinventado.',
    longDescription: 'Soporte adicional en el tobillo y estética retro. Elaboradas con materiales ecológicos sin comprometer la resistencia ni el diseño.',
    sizes: ['7', '8', '9', '10', '11'],
    isNew: false
  },
  {
    id: '7',
    name: 'Essential Beanie',
    price: 24.50,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80',
    description: 'Gorro tejido de lana merino.',
    longDescription: 'No permitas que el frío arruine tu estilo. Gorro ajustado de lana merino transpirable que retiene el calor de manera eficiente.',
    sizes: ['Única'],
    isNew: false
  },
  {
    id: '8',
    name: 'Performance Track Jacket',
    price: 110.00,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    description: 'Chaqueta ligera e impermeable.',
    longDescription: 'Protégete de los elementos con esta chaqueta aerodinámica. Material hidrofóbico que repele el agua al instante y te mantiene seco en las condiciones más duras.',
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true
  }
];
