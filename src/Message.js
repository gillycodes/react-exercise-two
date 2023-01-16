import PropTypes from 'prop-types';

const Message = ({text}) => {
    return(
        <div className="message">
            {text}
        </div>
    )
}

Message.propTypes = {
    text: PropTypes.string
}

export default Message;