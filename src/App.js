import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "./Avatar"
import Message from './Message';
import NameWithHandle from './Name';
import Time from './Time'
import RetweetButton from './Retweet';

const Replying = () => (
  <div className="replying">
    Replying to <span className="replyingTo">@PulseGhana</span>
  </div>
)

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
)

const LikeButton = ({count}) => (
 <span className="likebutton">
  <i className="fa fa-heart"/>
  {count > 0 && <span className="like-count"> {count}</span> }
 </span>
);

LikeButton.propTypes ={
  count: PropTypes.number
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
)


const Tweet = ({tweet}) => {
  return(
   <div className = 'tweet' >
    <Avatar hash={tweet.gravatar}/>
    <div className="content">
    <NameWithHandle author={tweet.author} /><Time time={tweet.timestamp} />
    <Replying />
    <Message text={tweet.message} />
    <div className="buttons">
      <ReplyButton />
      <RetweetButton count={tweet.retweets}/>
      <LikeButton count={tweet.likes}/>
      <MoreOptionsButton />
    </div>
    </div>
   </div>
  )
}




Tweet.propTypes = {
  tweet: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number
  ])
}

export default Tweet;
