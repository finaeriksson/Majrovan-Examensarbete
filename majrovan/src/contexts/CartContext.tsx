// src/contexts/CartContext.tsx
import { createContext } from "react";
import type { CardData } from "../hooks/useSanityCards";

// 1) Definiera vilka Action-typer vi kan skicka till Reducern:
export type CartAction =
  | { type: "ADD"; card: CardData }
  | { type: "REMOVE_ONE"; id: string }
  | { type: "REMOVE_ALL"; id: string }
  | { type: "CLEAR" };

// 2) Varukorgens struktur: vi sparar varje rad som { item: CardData, quantity: number }:
export interface CartItem {
  item: CardData;
  quantity: number;
}

// 3) Vad Contexten innehåller: en lista av CartItem och en dispatch-funktion:
export interface CartContextValue {
  cart: CartItem[];
  dispatch: React.Dispatch<CartAction>;
}

// 4) Skapa själva Context-objektet med ett standardvärde (tom varukorg + tom dispatch):
export const CartContext = createContext<CartContextValue>({
  cart: [],
  dispatch: () => {
    // tom dispatch som standard; kommer aldrig att användas eftersom vi wrappar med Provider.
  },
});
