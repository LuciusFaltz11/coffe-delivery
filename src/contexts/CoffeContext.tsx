import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createContext, ReactNode, useState, useEffect } from 'react';
export interface Coffes {
  id: string;
  title: string;
  description: string;
  value: number;
  tags: string[];
  image: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  value: number;
  tags: string[];
  image: string;
  quantity: number;
}

interface CoffeProviderProps {
  children: ReactNode;
}

interface CoffeContextType {
  cart: Product[];
  handleAddProductOnCart: (product: Coffes, quantity: number) => void;
  cartProductsAmount: number;
}

export const CoffeContext = createContext({} as CoffeContextType);

export const CoffeProvider = ({ children }: CoffeProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartProductsAmount, setCartProductsAmount] = useState(0);

  const handleAddProductOnCart = (product: Coffes, quantity: number) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      const newCart = cart;
      newCart[itemIndex].quantity += quantity;
      setCart([...newCart]);
    } else {
      const newItemCart = {
        id: product.id,
        title: product.title,
        description: product.description,
        value: product.value,
        tags: product.tags,
        image: product.image,
        quantity: quantity,
      };
      setCart((state) => [...state, newItemCart]);
    }
  };

  const calculateAmountCart = () => {
    const productsAmount = cart.reduce(
      (acc, item) => {
        acc.amount += item.quantity;
        return acc;
      },
      { amount: 0 }
    );

    setCartProductsAmount(productsAmount.amount);
  };

  useEffect(() => {
    calculateAmountCart();
  }, [cart]);

  return (
    <CoffeContext.Provider
      value={{ cart, handleAddProductOnCart, cartProductsAmount }}
    >
      {children}
    </CoffeContext.Provider>
  );
};
