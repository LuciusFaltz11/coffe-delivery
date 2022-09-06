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

interface ShoppingProps {
  complement?: string | undefined;
  number: string;
  cep: string;
  street: string;
  district: string;
  city: string;
  uf: string;
}

interface CoffeContextType {
  cart: Product[];
  handleAddProductOnCart: (product: Coffes, quantity: number) => void;
  cartProductsAmount: number;
  handleChangePaymentOption: (payment: string) => void;
  paymentMethod: string;
  decreaseQuantityOfProductOnCart: (id: string) => void;
  increaseQuantityOfProductOnCart: (id: string) => void;
  removeItemOfCart: (id: string) => void;
  createNewShopping: (data: ShoppingProps) => void;
  shoppingForm: ShoppingProps;
}

export const CoffeContext = createContext({} as CoffeContextType);

export const CoffeProvider = ({ children }: CoffeProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cartProductsAmount, setCartProductsAmount] = useState(0);
  const [shoppingForm, setShoppingForm] = useState<ShoppingProps>(
    {} as ShoppingProps
  );

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

  const handleChangePaymentOption = (payment: string) => {
    setPaymentMethod(payment);
  };

  const increaseQuantityOfProductOnCart = (id: string) => {
    const itemIndex = cart.findIndex((item) => item.id === id);
    const newCart = cart;
    newCart[itemIndex].quantity += 1;
    setCart([...newCart]);
  };

  const decreaseQuantityOfProductOnCart = (id: string) => {
    const itemIndex = cart.findIndex((item) => item.id === id);
    const newCart = cart;
    if (newCart[itemIndex].quantity > 1) {
      newCart[itemIndex].quantity -= 1;
    }
    setCart([...newCart]);
  };

  const createNewShopping = (data: ShoppingProps) => {
    setShoppingForm(data);
  };

  const removeItemOfCart = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <CoffeContext.Provider
      value={{
        cart,
        handleAddProductOnCart,
        cartProductsAmount,
        handleChangePaymentOption,
        paymentMethod,
        decreaseQuantityOfProductOnCart,
        increaseQuantityOfProductOnCart,
        createNewShopping,
        shoppingForm,
        removeItemOfCart,
      }}
    >
      {children}
    </CoffeContext.Provider>
  );
};
