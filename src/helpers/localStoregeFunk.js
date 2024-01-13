export const localStoregeFunk = ({ id, title, image, price }) => {
  const amount = 1
  const itemToAdd = { id, title, image, price, amount }
  const isInLocalStorege = localStorage.getItem('basket')
  if (!isInLocalStorege) {
    localStorage.setItem('basket', JSON.stringify([itemToAdd]))
    return true
  }
  const lsProduct = JSON.parse(isInLocalStorege)
  const product = lsProduct.some(item => item.id === id)
  if (!product) {
    localStorage.setItem('basket', JSON.stringify([...lsProduct, itemToAdd]))
    return true
  }
  return false
}

export const localStorageMutaitionAmount = (idAmount, newAmount) => {
  const addedProduct = JSON.parse(localStorage.getItem('basket'))
  const addedProductNew = addedProduct.map(
    ({ id, title, image, price, amount }) =>
      id === idAmount
        ? { id, title, image, price, amount: newAmount }
        : { id, title, image, price, amount }
  )
  localStorage.setItem('basket', JSON.stringify([...addedProductNew]))
  console.log('addedProductNew',addedProductNew)
}

// localStorageMutaitionAmount(1, 5)
