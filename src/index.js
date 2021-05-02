function get_data() {
  let index = ["raydium", "solana", "vechain"]
  var request = new XMLHttpRequest();

  var table = document.createElement("TABLE");
  table.setAttribute("id", "myTable");
  document.body.appendChild(table);

  (function loop(i, length) {
    if (i >= length) {
      return;
    }
    var url = "https://api.coingecko.com/api/v3/coins/" + index[i];

    request.open("GET", url);
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        var data = JSON.parse(request.responseText);

        var row = document.createElement("TR");

        var idCell = document.createElement("TD");
        var usdCell = document.createElement("TD");
        var eurCell = document.createElement("TD");
        var rankCell = document.createElement("TD");

        var id = document.createTextNode(data.id);
        var usd = document.createTextNode(data.market_data.current_price.usd);
        var eur = document.createTextNode(data.market_data.current_price.eur);
        var rank = document.createTextNode(data.coingecko_rank);

        idCell.appendChild(id);
        usdCell.appendChild(usd);
        eurCell.appendChild(eur);
        rankCell.appendChild(rank);




        console.log("id : " + data.id);
        console.log("prix usd : " + data.market_data.current_price.usd);
        console.log("prix eur : " + data.market_data.current_price.eur);
        console.log("rank coingecko : " + data.coingecko_rank);
        loop(i + 1, length);
      }
    }
    request.send();
  })(0, index.length);

}

function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");
    
    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row " + i + ", column " + j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

window.addEventListener("load", () => {
  generate_table()
})