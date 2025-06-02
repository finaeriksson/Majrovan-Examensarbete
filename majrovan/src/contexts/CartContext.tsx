import { createContext } from "react";
import { CardData } from '../hooks/useSanityCards';



export interface CartContextValue {
  cart: CardData[];
  dispatch: React.Dispatch<{ type: "ADD"; card: CardData } | { type: "REMOVE"; id: string } | { type: "CLEAR" }>;
}

export const CartContext = createContext<CartContextValue>({
  cart: [],
  dispatch: () => {
  },
});

