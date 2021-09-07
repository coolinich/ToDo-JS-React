import PropTypes from 'prop-types'

const Button = ({ btnTypeClass, text, onClick }) => {
    return (
        <button 
            className={`btn ${btnTypeClass}`}
            onClick={onClick}
            >{ text }
        </button>
    )
}

Button.defaultProps = {
    btnTypeClass: 'regular'
}

Button.propTypes = {
    text: PropTypes.node,
    btnTypeClass: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button
