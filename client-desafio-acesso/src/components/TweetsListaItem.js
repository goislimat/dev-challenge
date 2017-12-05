import React from "react";
import PropTypes from "prop-types";

const TweetsListaItem = props => (
  <div className="col s8 offset-s2">
    <div className="card white">
      <div className="row card-content grey-text text-grey-darken-3">
        <div className="col s2">
          <img src={props.avatar} alt="" className="circle responsive-img" />
        </div>
        <div className="col s10">
          <span className="card-title">{props.username}</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: props.text }} />
      </div>
      <div className="card-action">
        <a
          href={`https://twitter.com/${props.screen_name}`}
          className="light-blue-text text-light-blue-darken-2"
        >
          @{props.screen_name}
        </a>
      </div>
    </div>
  </div>
);

TweetsListaItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  screen_name: PropTypes.string.isRequired
};

export default TweetsListaItem;
