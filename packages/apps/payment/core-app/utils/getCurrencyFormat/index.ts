export type Currency = 'MXN'

const currencyMXFormat = (value: number) => {
  const currencyNumber = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(value)

  const regExp = /(\d)(?=(\d{3})+(?!\d))/g
  const replaceFormat = '$1,'
  const [firstItem, secondItem] = currencyNumber.split('.')
  return [firstItem.replace(regExp, replaceFormat), secondItem].join('.')
}

export const getCurrencyFormat = (value: number, currency: Currency) => {
  switch (currency) {
    case 'MXN':
      return currencyMXFormat(value)
    default: return value
  }
}
