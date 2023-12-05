import { default as PT } from './Types'

const Button = ({color, text}) => {
    return <button className='btn' style={{ backgroundColor: color}}>{text}</button>
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    text: PT.string,
    color: PT.string
}

export default Button




