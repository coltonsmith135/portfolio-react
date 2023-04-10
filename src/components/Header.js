const Header = ({ title }) => {
    return (
      <header>
          <h1 className="title">{title}</h1>
      </header>
    )
  }
  
  Header.defaultProps = {
      title: 'Colton Smith',
    
  }
  
  export default Header