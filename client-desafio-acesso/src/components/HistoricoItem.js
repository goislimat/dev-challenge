import React from "react";
import PropTypes from "prop-types";

class HistoricoItem extends React.Component {
  handleClick = () => {
    console.log(this.props.keyword);
    this.props.onClickHistorico(this.props.keyword);
  };

  render() {
    return (
      <li className="white-text bold line2 pointer" onClick={this.handleClick}>
        #{this.props.keyword}
      </li>
    );
  }
}

HistoricoItem.propTypes = {
  keyword: PropTypes.string.isRequired,
  onClickHistorico: PropTypes.func.isRequired
};

export default HistoricoItem;
