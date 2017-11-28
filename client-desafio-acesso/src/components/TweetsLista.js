import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TweetsListaItem from "./TweetsListaItem";

const TweetsLista = props => (
  <div className="row">
    {props.searchedItems.length <= 0 && (
      <h4 className="center-align grey-text text-lighten-1">
        O resultado de sua busca será mostrado aqui
      </h4>
    )}
    {props.searchedItems.length > 0 &&
      props.tweetsData &&
      props.tweetsData.tweets.length === 0 && (
        <h4 className="center-align red-text text-darken-2">
          Não há resultados para o termo pesquisado
        </h4>
      )}
    {props.tweetsData &&
      props.tweetsData.tweets.length > 0 && (
        <div>
          <h6 className="center-align gray-text text-darken-2">
            {props.tweetsData.tweets.length} resultados para: #{props.tweetsData.hashtag}
          </h6>
          {props.tweetsData.tweets.map((tweet, i) => (
            <TweetsListaItem
              key={i}
              username={tweet.user.name}
              screen_name={tweet.user.screen_name}
              avatar={tweet.user.avatar}
              text={tweet.text}
            />
          ))}
        </div>
      )}
  </div>
);

function mapStateToProps({ tweets }) {
  return { tweetsData: tweets };
}

TweetsLista.propTypes = {
  searchedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  tweetsData: PropTypes.shape({
    hashtag: PropTypes.string.isRequired,
    tweets: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.shape({
          name: PropTypes.string.isRequired,
          screen_name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired
        }).isRequired
      })
    ).isRequired
  })
};

export default connect(mapStateToProps)(TweetsLista);
