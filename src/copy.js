import React from 'react';
import Avatar from "./Avatar"
import Message from './Message';
import NameWithHandle from './Name';

const Time = () => (
  <span class="time">3h ago</span>
)

const Replying = () => (
  <div className="replying">
    Replying to <span className="replyingTo">@PulseGhana</span>
  </div>
)

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
)
const RetweenButton = () => (
  <i className="fa fa-retweet retweet-button"/>
)
const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
)
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
)


const Tweet = () => {
  return(
   <div className = 'tweet' >
    <Avatar />
    <div className="content">
    <NameWithHandle /><Time />
    <Replying />
    <Message />
    <div className="buttons">
      <ReplyButton />
      <RetweenButton />
      <LikeButton />
      <MoreOptionsButton />
    </div>
    </div>
   </div>
  )
}

export default Tweet;
