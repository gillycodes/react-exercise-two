import PropTypes from 'prop-types';

const getRetweetButton = (count) => {
    if(count > 0) {
      return(
        <span className="retweet-count">
          {count}
        </span>
      )
    } else {
      return null
    }
  }

  const RetweetButton = ({count}) => {
    return(
        <span className="retweetbutton"> 
        <i className="fa fa-retweet"/>
        {getRetweetButton(count)}
        </span>
    )
  }

  RetweetButton.propTypes = {
     count: PropTypes.number
  }


  export default RetweetButton;