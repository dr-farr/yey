import { CODES, Currencies } from "currencies-map";
import getSymbolFromCurrency from "currency-symbol-map";

export interface Currency {
  name: string;
  code: string;
  symbol: string;
}

// All the currencies in original order.
const unorderedCurrencies: Currency[] = CODES.map((element) => {
  return {
    name: `${Currencies.names
      .get(element)
      ?.replace(/\b\w/g, (c) => c.toUpperCase())} (${
      getSymbolFromCurrency(element) ?? Currencies.symbols.get(element) ?? ""
    })`,
    code: element,
    symbol: getSymbolFromCurrency(element),
  };
});

// The Currencies we want at the top of the list.
export const currencies: Currency[] = [
  ...new Set([
    unorderedCurrencies.find(({ code }) => code === "AUD"),
    unorderedCurrencies.find(({ code }) => code === "CAD"),
    unorderedCurrencies.find(({ code }) => code === "CNY"),
    unorderedCurrencies.find(({ code }) => code === "EUR"),
    unorderedCurrencies.find(({ code }) => code === "GBP"),
    unorderedCurrencies.find(({ code }) => code === "JPY"),
    unorderedCurrencies.find(({ code }) => code === "USD"),
    ...unorderedCurrencies,
  ]),
];
