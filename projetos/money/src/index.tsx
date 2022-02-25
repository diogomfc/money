import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";

import { App } from "./App";
import { GlobalStyle } from "./styles/global";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de site",
          amount: 2000,
          type: "deposit",
          category: "Venda",
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel do apartamento",
          amount: 1200,
          type: "withdrawal",
          category: "Casa",
          createdAt: new Date("2021-05-05 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    //Listar get
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    //Criar post
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
