import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]); // Add this state for products

  // Fetch products once when the component mounts
  useEffect(() => {
    const getApi = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err));
    };

    getApi();
  }, []); // Empty dependency array ensures it only runs once on mount
  const increaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };
  function addItemToCart(id) {
  // Kiểm tra xem products đã được lấy chưa
  if (products.length === 0) {
    console.error("Error: Products not yet fetched.");
    return;
  }

  setItems((prevItems) => {
    const item = prevItems.find((item) => item.id === id);

    if (!item) {
      // If the item doesn't exist in the cart, fetch the product
      const product = products.find((product) => product.id === id);

      if (product) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      }
    } else {
      return prevItems.map((item) => {
        if (item.id === id) {
          item.qty++;
          item.totalPrice += item.product.price;
        }

        return item;
      });
    }
  });
}
  
  function removeItemFromCart(id) {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }
  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider value={{ items, getItemsCount, addItemToCart, getTotalPrice ,removeItemFromCart, increaseQuantity,
        decreaseQuantity,}}>
      {props.children}
    </CartContext.Provider>
  );
}
