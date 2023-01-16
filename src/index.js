import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tweet from './App';
import reportWebVitals from './reportWebVitals';


let testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "I AM A CAT PERSON"
  },
  likes: 5,
  retweets: 3,
  timestamp: '2020-01-12 21:32:37'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tweet tweet={testTweet}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
