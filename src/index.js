
let index = ["raydium", "solana", "oxygen", "vechain", "eos", "ethereum", "chiliz", "serum", "uniswap", "binancecoin", "filecoin", "curve-dao-token", "band-protocol", "litecoin", "chainlink", "stellar", "concierge-io", "ripple"]
var request = new XMLHttpRequest();

table = document.getElementById("crypto");

(function loop(i, length) {
  if (i >= length) {
    return;
  }
  var url = "https://api.coingecko.com/api/v3/coins/" + index[i];
  request.open("GET", url);
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      var data = JSON.parse(request.responseText);
      var newRow = table.insertRow(table.length);

      var cellImg = newRow.insertCell(0);
      const img = document.createElement("img");
      img.setAttribute("src", data.image.large);
      img.setAttribute("width", "40");
      img.setAttribute("height", "40");
      cellImg.appendChild(img);

      var cellName = newRow.insertCell(1);
      cellName.textContent = data.localization.en;

      var cellPriceUSD = newRow.insertCell(2);
      cellPriceUSD.textContent = data.market_data.current_price.usd;

      var cellATH = newRow.insertCell(3);
      cellATH.textContent = data.market_data.ath.usd;

      var cellRank = newRow.insertCell(4);
      cellRank.textContent = data.coingecko_rank;

      var cellQte = newRow.insertCell(5);
      const input = document.createElement("input");
      input.setAttribute("type", "number");
      input.setAttribute("id", "name");
      input.setAttribute("name", "name");
      cellQte.appendChild(input);
      cellQte.addEventListener("change", () => { cellTotal.textContent = (input.value * data.market_data.current_price.usd).toFixed(3) });

      var cellTotal = newRow.insertCell(6);
      cellTotal.textContent = "0";

      loop(i + 1, length);
    }
  }
  request.send();
})(0, index.length);


