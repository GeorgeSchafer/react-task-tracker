import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
    {/* <h1 style={headingStyle}>{props.title}</h1> // CSS in JS */}
    <Button color='green' text='add' />
        

    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/**
 * CSS in JS
 */
// const headingStyle = {
//   color: 'red',
//   backgroundColor: '#ddd'
// }

export default Header



