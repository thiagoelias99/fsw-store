import { OrderStatusEnum } from '@/lib/enums'

declare type Product = {
  id: string
  title: string
  description: string
  originalPrice: number
  discount: number
  sellPrice: number
  category: string
  images: string[]
  rating: number
}

declare type Category = {
  id: string
  slug: string
  name: string
  image: string
}

declare type Order = {
  id: string
  products: OrderProduct[],
  subTotal: number
  discount: number
  total: number
  status: OrderStatusEnum
  date: string
}

declare type OrderProduct = {
  product: Product
  quantity: number
  price: number
}