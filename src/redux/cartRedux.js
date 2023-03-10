export const getCart = ({ cart }) => cart

const createActionName = (actionName) => `app/products/${actionName}`
const ADD_CART = createActionName('ADD_AD')
const REMOVE_CART = createActionName('REMOVE_CART')

export const addCart = (payload) => ({ type: ADD_CART, payload })
export const removeCart = (payload) => ({ type: REMOVE_CART, payload })

const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CART:
      let index = statePart.findIndex((cart) => cart.id === action.payload.id)

      if (index === -1) return [...statePart, action.payload]
      return statePart
    case REMOVE_CART:
      return statePart.filter((cart) => cart.id !== action.payload)
    default:
      return statePart
  }
}
export default cartReducer
