
const Header = (props, {title}) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <p></p>
        <h1>{title}</h1>
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header



