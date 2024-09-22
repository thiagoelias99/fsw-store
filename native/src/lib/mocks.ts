import { Category, Order, Product } from '@/types/type'
import { OrderStatusEnum } from './enums'

const products: Product[] = [
  {
    id: '1',
    title: 'Mouse 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 100,
    discount: 10,
    sellPrice: 90,
    category: 'Mouses',
    images: [require('@/assets/images/details/image1.png'), require('@/assets/images/details/image2.png'), require('@/assets/images/details/image3.png'), require('@/assets/images/details/image4.png')],
    rating: 4.5
  },
  {
    id: '2',
    title: 'Mouse 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 200,
    discount: 13,
    sellPrice: 174,
    category: 'Mouses',
    images: [require('@/assets/images/details/image1.png'), require('@/assets/images/details/image2.png'), require('@/assets/images/details/image3.png'), require('@/assets/images/details/image4.png')],
    rating: 4.5
  },
  {
    id: '3',
    title: 'Mouse 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 300,
    discount: 0,
    sellPrice: 300,
    category: 'Mouses',
    images: [require('@/assets/images/details/image1.png'), require('@/assets/images/details/image2.png'), require('@/assets/images/details/image3.png'), require('@/assets/images/details/image4.png')],
    rating: 4.5
  },
  {
    id: '4',
    title: 'Mouse 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 400,
    discount: 0,
    sellPrice: 400,
    category: 'Mouses',
    images: [require('@/assets/images/details/image1.png'), require('@/assets/images/details/image2.png'), require('@/assets/images/details/image3.png'), require('@/assets/images/details/image4.png')],
    rating: 4.5
  },
  {
    id: '5',
    title: 'Mouse 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 500,
    discount: 7,
    sellPrice: 465,
    category: 'Mouses',
    images: [require('@/assets/images/details/image1.png'), require('@/assets/images/details/image2.png'), require('@/assets/images/details/image3.png'), require('@/assets/images/details/image4.png')],
    rating: 4.5
  },
  {
    id: '6',
    title: 'Teclado 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 600,
    discount: 0,
    sellPrice: 600,
    category: 'Teclados',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    rating: 4.5
  },
  {
    id: '7',
    title: 'Teclado 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 700,
    discount: 0,
    sellPrice: 700,
    category: 'Teclados',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    rating: 4.5
  },
  {
    id: '8',
    title: 'Teclado 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 800,
    discount: 5,
    sellPrice: 760,
    category: 'Teclados',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    rating: 4.5
  },
  {
    id: '9',
    title: 'Teclado 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 900,
    discount: 5,
    sellPrice: 855,
    category: 'Teclados',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    rating: 4.5
  },
  {
    id: '10',
    title: 'Teclado 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 1000,
    discount: 7,
    sellPrice: 930,
    category: 'Teclados',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    rating: 4.5
  },
  {
    id: '11',
    title: 'Monitor 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 1100,
    discount: 12,
    sellPrice: 968,
    category: 'Monitores',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    rating: 4.5
  },
  {
    id: '12',
    title: 'Monitor 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 1200,
    discount: 12,
    sellPrice: 1056,
    category: 'Monitores',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    rating: 4.5
  },
  {
    id: '13',
    title: 'Monitor 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 1300,
    discount: 10,
    sellPrice: 1170,
    category: 'Monitores',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    rating: 4.5
  },
  {
    id: '14',
    title: 'Monitor 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 1400,
    discount: 5,
    sellPrice: 1330,
    category: 'Monitores',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    rating: 4.5
  },
  {
    id: '15',
    title: 'Monitor 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    originalPrice: 1500,
    discount: 5,
    sellPrice: 1425,
    category: 'Monitores',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    rating: 4.5
  }
]

const categories: Category[] = [
  {
    id: '1',
    slug: 'mouses',
    image: require('@/assets/images/mouse.png')
  },
  {
    id: '2',
    slug: 'teclados',
    image: require('@/assets/images/teclado.png')
  },
  {
    id: '3',
    slug: 'monitores',
    image: require('@/assets/images/monitor.png')
  },
  {
    id: '4',
    slug: 'Mouse Pads',
    image: require('@/assets/images/mouse_pad.png')
  },
  {
    id: '5',
    slug: 'Headsets',
    image: require('@/assets/images/headset.png')
  },
  {
    id: '6',
    slug: 'Speakers',
    image: require('@/assets/images/speakers.png')
  }
]

const orders: Order[] = [
  {
    id: 'TE0000001',
    products: [
      {
        product: products[0],
        quantity: 1,
        price: 100
      },
      {
        product: products[1],
        quantity: 1,
        price: 200
      }
    ],
    subTotal: 300,
    discount: 30,
    total: 270,
    status: OrderStatusEnum.COMPLETED,
    date: '2024-08-26'
  },
  {
    id: 'TE0000002',
    products: [
      {
        product: products[2],
        quantity: 1,
        price: 700
      },
      {
        product: products[3],
        quantity: 1,
        price: 800
      }
    ],
    subTotal: 700,
    discount: 70,
    total: 630,
    status: OrderStatusEnum.COMPLETED,
    date: '2024-09-07'
  },
  {
    id: 'TE0000003',
    products: [
      {
        product: products[4],
        quantity: 1,
        price: 500
      },
      {
        product: products[5],
        quantity: 1,
        price: 600
      }
    ],
    subTotal: 1100,
    discount: 110,
    total: 990,
    status: OrderStatusEnum.PENDING,
    date: '2024-09-15'
  },
  {
    id: 'TE0000004',
    products: [
      {
        product: products[6],
        quantity: 1,
        price: 800
      },
      {
        product: products[7],
        quantity: 1,
        price: 900
      }
    ],
    subTotal: 1500,
    discount: 150,
    total: 1350,
    status: OrderStatusEnum.PENDING,
    date: '2024-09-21'
  }
]

export const mocks = { products, categories, orders }