import { createContext, useContext, useMemo, useState } from "react";
import currency from "currency.js";

const CurrencyContext = createContext();


export const Symbols = {
  USD: "$",
  SYP: "ل.س",
  EUR: "€",
};

export function CurrencyProvider({ children }) {
  const [currency1, setCurrency1] = useState("USD");

  const changeCurrency = (newCurr) => setCurrency1(newCurr);
  const value = {
    currency1,
    changeCurrency,
    setCurrency1,
    symbol: Symbol[currency1]||currency1,}
  

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}