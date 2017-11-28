import React from "react";
import PropTypes from "prop-types";

import BuscaForm from "./BuscaForm";
import TweetsLista from "./TweetsLista";

const Busca = props => (
  <div className="overflow-y fullheight col s9">
    <h2>Buscador de Tweets</h2>
    <h4>Marketing Acesso</h4>
    <BuscaForm
      searchKeyword={props.searchKeyword}
      onKeywordChange={props.onKeywordChange}
      onSubmit={props.onSubmit}
    />
    <TweetsLista searchedItems={props.searchedItems} />
  </div>
);

Busca.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchedItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Busca;
