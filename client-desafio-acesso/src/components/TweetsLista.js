import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TweetsListaItem from "./TweetsListaItem";

const formatString = tweet => {
  const matchLinks = /http[s]*:\/\/(\S)+/gi;
  const matchRT = /(@)(\w+)/gi;
  const matchHashtags = /#[a-záãàâéêíóõôúçñ]+/gi;

  let formattedText = tweet.replace(
    matchLinks,
    '<a href="$&" target="_blank">$&</a>'
  );

  formattedText = formattedText.replace(
    matchRT,
    '<a href="https://twitter.com/$2" target="_blank">$&</a>'
  );

  formattedText = formattedText.replace(
    matchHashtags,
    '<span class="orange-text">$&</span>'
  );

  return formattedText;
};

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
              text={formatString(tweet.text)}
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
