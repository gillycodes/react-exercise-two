import PropTypes from 'prop-types';

function Avatar({hash}) {
    let url = `https://www.gravatar.com/avatar/${hash}`;
    return(
        <div>
            <img src={url} className="avatar" alt="avatar"/>
           
        </div>
    )
}

Avatar.propTypes = {
    hash: PropTypes.string
}

export default Avatar;