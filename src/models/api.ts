import { Crypto } from "./crypto";

const BASE_URL = "https://api.coingecko.com/api/v3/coins/";

export const API = {
  fetchCrypto: async (crypto: string) => {
    const raw = await fetch(BASE_URL + crypto); // requète
    const data: Object = await raw.json();
    return new Crypto(data);
  },
}