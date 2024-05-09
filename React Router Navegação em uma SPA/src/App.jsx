import React from "react";
import "./assets/css/base/base.css";
// Páginas
import Home from "./paginas/Home.jsx";
import Sobre from "./paginas/Sobre.jsx";
import Pagina404 from "./paginas/Pagina404.jsx";
import Cabecalho from "./components/Cabecalho.jsx"
import Post from './paginas/Post.jsx'
import Categoria from "./paginas/Categoria.jsx";
//Importando o React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/sobre">
            <Sobre />
          </Route>

          <Route path="/categoria/:id">
            <Categoria />
          </Route>

          {/* Quando utilizamos os : queremos dizer que esse id é quase como uma variável na URL permitindo uma busca dinânima não importa o valor apresentado no lugar de :id */}
          <Route path="/posts/:id">
            <Post />
          </Route>

          <Route>
              <Pagina404 />
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
