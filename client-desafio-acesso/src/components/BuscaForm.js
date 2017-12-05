import React from "react";
import PropTypes from "prop-types";

class BuscaForm extends React.Component {
  handleKeywordChange = e => {
    this.props.onKeywordChange(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit();
  };

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s10">
              <label htmlFor="keyword">Entre com a hashtag</label>
              <input
                type="text"
                placeholder="ex: acesso"
                id="keyword"
                name="keyword"
                value={this.props.searchKeyword}
                onChange={this.handleKeywordChange}
              />
            </div>
            <div className="input-field col s2">
              <button className="waves-effect waves-light orange btn">
                Buscar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

BuscaForm.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default BuscaForm;
