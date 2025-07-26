const Footer = () => {

  const currentYear = new Date().getFullYear()
  
  return (
    <footer>
      &copy; {currentYear} My Website
    </footer>
  )
}

export default Footer