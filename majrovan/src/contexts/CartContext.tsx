import { createContext } from "react";
import { CardData } from '../hooks/useSanityCards';



// type CartAction = 
// | { type: "ADD"; card: CardData }
// | { type: "REMOVE"; id: string }
// | { type: "CLEAR" }

// function cartReducer(state: CardData[], action: CartAction): CardData[] {
//     switch (action.type) {
//         case "ADD":
//           if (state.find(c => c._id === action.card._id)) return state
//           return [...state, action.card]
//         case "REMOVE":
//           return state.filter(c => c._id !== action.id)
//         case "CLEAR":
//           return []
//         default:
//           return state
//     }
// }

export interface CartContextValue {
  cart: CardData[];
  dispatch: React.Dispatch<{ type: "ADD"; card: CardData } | { type: "REMOVE"; id: string } | { type: "CLEAR" }>;
}

export const CartContext = createContext<CartContextValue>({
  cart: [],
  dispatch: () => {
  },
});



// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, dispatch] = useReducer(cartReducer, []);
//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// export const useCart = () => useContext(CartContext)