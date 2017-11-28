import React from "react";
import PropTypes from "prop-types";

import HistoricoItem from "./HistoricoItem";

const Historico = props => (
  <div className="fullheight blue darken-1 col s3">
    <h5 className="orange-text text-lighten-2 center-align bold">
      Últimas buscas
    </h5>
    {props.searchedItems.length < 1 && (
      <span className="white-text bold">
        Ainda não foram registradas buscas
      </span>
    )}
    {props.searchedItems.length > 0 && (
      <ul className="">
        {props.searchedItems.map((item, i) => (
          <HistoricoItem
            key={i}
            keyword={item}
            onClickHistorico={props.onClickHistorico}
          />
        ))}
      </ul>
    )}
  </div>
);

Historico.propTypes = {
  searchedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickHistorico: PropTypes.func.isRequired
};

export default Historico;
