import "./index.scss";

import { CRYPTOS } from "./models/crypto";
import { API } from "./models/api";

const table = document.getElementById("crypto") as any;

window.addEventListener('load', async () => {
  Object.values(CRYPTOS).forEach(async cryptoName => {
    const crypto = await API.fetchCrypto(cryptoName);
    let newRow = table.insertRow(table.length);

    let cellImg = newRow.insertCell(0);
    const img = document.createElement("img");
    img.setAttribute("src", crypto.image.large);
    img.setAttribute("width", "40");
    img.setAttribute("height", "40");
    cellImg.appendChild(img);

    let cellName = newRow.insertCell(1);
    cellName.textContent = crypto.localization.en;

    let cellPriceUSD = newRow.insertCell(2);
    if(crypto.market_data.current_price.usd < 1){
      cellPriceUSD.textContent = (crypto.market_data.current_price.usd).toFixed(5);
    }
    else{
      cellPriceUSD.textContent = (crypto.market_data.current_price.usd).toFixed(3);
    }
    

    let cellATH = newRow.insertCell(3);
    cellATH.textContent = (crypto.market_data.ath.usd).toFixed(5);

    let cellChg24h = newRow.insertCell(4);
    cellChg24h.textContent = (crypto.market_data.price_change_24h_in_currency.usd).toFixed(1);

    let cellRank = newRow.insertCell(5);
    cellRank.textContent = crypto.coingecko_rank;

    let cellQte = newRow.insertCell(6);
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "name");
    input.setAttribute("name", "name");
    cellQte.appendChild(input);
    cellQte.addEventListener("change", () => {
      cellTotal.textContent = ((input.value as any) * crypto.market_data.current_price.usd).toFixed(3) + " $"
    });

    let cellTotal = newRow.insertCell(7);
    cellTotal.textContent = "0 $";
  })
});