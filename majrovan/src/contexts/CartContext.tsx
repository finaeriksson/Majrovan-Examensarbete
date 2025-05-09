import { createContext, useContext, useReducer } from "react";
import { CardData } from '../hooks/useSanityCards';



type CartAction = 
| { type: "ADD"; card: CardData }
| { type: "REMOVE"; id: string }
| { type: "CLEAR" }

function cartReducer(state: CardData[], action: CartAction): CardData[] {
    switch (action.type) {
        case "ADD":
          if (state.find(c => c._id === action.card._id)) return state
          return [...state, action.card]
        case "REMOVE":
          return state.filter(c => c._id !== action.id)
        case "CLEAR":
          return []
        default:
          return state
    }
}

const CartContext = createContext<{
    cart: CardData[]
    dispatch: React.Dispatch<CartAction>
}>({ cart: [], dispatch: () => {} })

export const CartProvider: React.FC<{ children:React.ReactNode }> = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [])

    return (
       < CartContext.Provider value={{ cart, dispatch }}>
        {children}
       </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)