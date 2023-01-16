import PropTypes from 'prop-types';

const NameWithHandle = ({author}) => {
    return(
        <span className="name-with-handle"> 
        <span className="name">
            {author.name}
        </span>
        <span className="handle">@{author.handle}</span>
        </span>
    )
}

NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
}

export default NameWithHandle;