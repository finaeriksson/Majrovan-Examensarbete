import { ReactNode, useReducer } from "react";
import { CartContext } from "./CartContext";
import type { CardData } from "../hooks/useSanityCards";

type CartAction =
  | { type: "ADD"; card: CardData }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" };

function cartReducer(state: CardData[], action: CartAction): CardData[] {
  switch (action.type) {
    case "ADD":
      if (state.find((c) => c._id === action.card._id)) return state;
      return [...state, action.card];
    case "REMOVE":
      return state.filter((c) => c._id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
