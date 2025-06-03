// src/contexts/CartProvider.tsx
import React, { useReducer, ReactNode } from "react";
import { CartContext, CartAction, CartItem } from "./CartContext";
// import type { CardData } from "../hooks/useSanityCards";

//
// 1) Reducer-funktionen: hur vi uppdaterar cart‐state beroende på vilken action vi skickar.
//
function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD": {
      // Finns produkten redan? → öka bara quantity med 1
      const idx = state.findIndex(ci => ci.item._id === action.card._id);
      if (idx >= 0) {
        // Kopiera hela arrayen och uppdatera kvantiteten på rätt rad
        const updated = [...state];
        updated[idx] = {
          item: updated[idx].item,
          quantity: updated[idx].quantity + 1,
        };
        return updated;
      }
      // Om den inte finns: lägg in med quantity = 1
      return [...state, { item: action.card, quantity: 1 }];
    }

    case "REMOVE_ONE": {
      // Minska qty med 1 om >1, annars ta bort hela raden
      const idx = state.findIndex(ci => ci.item._id === action.id);
      if (idx < 0) return state; // Hittade inget → gör ingenting

      const existing = state[idx];
      if (existing.quantity > 1) {
        const updated = [...state];
        updated[idx] = {
          item: existing.item,
          quantity: existing.quantity - 1,
        };
        return updated;
      } else {
        // Om quantity var 1, tar vi bort hela raden
        return state.filter(ci => ci.item._id !== action.id);
      }
    }

    case "REMOVE_ALL":
      // Ta bort alla exemplar (dvs hela raden)
      return state.filter(ci => ci.item._id !== action.id);

    case "CLEAR":
      // Tömvarukorgen helt
      return [];

    default:
      return state;
  }
}

//
// 2) CartProvider‐komponenten: wrappar barnen och injicerar cart + dispatch
//
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Använd useReducer med cartReducer och starta med tom array []
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
