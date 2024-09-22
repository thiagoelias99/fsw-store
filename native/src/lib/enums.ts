export enum OrderStatusEnum {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export function OrderStatusEnumMapper(value: OrderStatusEnum): string {
  switch (value) {
    case OrderStatusEnum.PENDING:
      return 'Pendente'
    case OrderStatusEnum.COMPLETED:
      return 'Concluído'
  }
}