"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"
import type { Product } from "@/lib/types"

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity?: number } }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: { items: CartItem[] } }

const CartContext = createContext<{
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity = 1 } = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
          ),
        }
      }

      return {
        ...state,
        items: [...state.items, { ...product, quantity }],
      }
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== id),
        }
      }

      return {
        ...state,
        items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
      }
    }

    case "CLEAR_CART":
      return { items: [] }

    case "LOAD_CART":
      return { items: action.payload.items }

    default:
      return state
  }
}

// Helper functions for localStorage
const saveCartToStorage = (items: CartItem[]) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("holland-barrett-cart", JSON.stringify(items))
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error)
    }
  }
}

const loadCartFromStorage = (): CartItem[] => {
  if (typeof window !== "undefined") {
    try {
      const savedCart = localStorage.getItem("holland-barrett-cart")
      return savedCart ? JSON.parse(savedCart) : []
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error)
      return []
    }
  }
  return []
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedItems = loadCartFromStorage()
    if (savedItems.length > 0) {
      dispatch({ type: "LOAD_CART", payload: { items: savedItems } })
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    saveCartToStorage(state.items)
  }, [state.items])

  const addItem = (product: Product, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const getTotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}