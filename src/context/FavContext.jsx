import React, { createContext, useEffect, useState } from "react";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favorite, setFavorit] = useState(() => {
    try {
      const savedFav = localStorage.getItem("favorite");
      return savedFav ? JSON.parse(savedFav) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const addToFav = (product) => {
    
    setFavorit((Prev) => {
      const existingItem = Prev.find((item) => item.id === product.id);
      if (existingItem) {
        return;
      }
      return [...Prev, {...product}];
    });
  };

  const removeFromFav = (productId) => {
    setFavorit((Prev) => Prev.filter((item) => item.id !== productId));
  };

  

  const totalItemsFav = favorite.length;


  return (
    <FavContext.Provider
      value={{
        favorite,
        addToFav,
        removeFromFav,
        totalItemsFav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};
