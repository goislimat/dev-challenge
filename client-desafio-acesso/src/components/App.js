import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Busca from "./Busca";
import Historico from "./Historico";
import { fetchTweets } from "../actions";

class App extends Component {
  state = {
    keyword: "",
    searchedItems: []
  };

  handleKeywordChange = keyword => {
    this.setState({ keyword });
  };

  handleSubmit = () => {
    const { keyword, searchedItems } = this.state;

    if (keyword) {
      this.setState({
        keyword: "",
        searchedItems: [keyword, ...searchedItems]
      });
      this.props.fetchTweets(this.state.keyword);
    }
  };

  handleClickHistorico = keyword => {
    this.props.fetchTweets(keyword);
  };

  render() {
    return (
      <div className="container">
        <div className="fullheight row">
          <Busca
            searchKeyword={this.state.keyword}
            searchedItems={this.state.searchedItems}
            onKeywordChange={this.handleKeywordChange}
            onSubmit={this.handleSubmit}
          />
          <Historico
            searchedItems={this.state.searchedItems}
            onClickHistorico={this.handleClickHistorico}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchTweets: PropTypes.func.isRequired
};

export default connect(null, { fetchTweets })(App);
