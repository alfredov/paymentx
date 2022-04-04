export type TOrder = {
  id: string,
  price: number, 
  due: string,
  status: 'PAID' | 'DUE' | 'OUTSTANDING',
}
