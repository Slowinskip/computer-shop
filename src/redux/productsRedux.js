export const getProducts = ({ products }) => products
export const getProductsComputer = ({ products }) =>
  products.filter((product) => product.category === 'computer')
export const getProductsKayboardAndMouse = ({ products }) =>
  products.filter((product) => product.category === 'keybordandmouse')
export const getProductsById = ({ products }, id) =>
  products.find((product) => product.id == id)
const createActionName = (actionName) => `app/products/${actionName}`

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart
  }
}
export default productsReducer
