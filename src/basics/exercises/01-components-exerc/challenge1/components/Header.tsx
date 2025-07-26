   type NavLink = {
     label: string;
     href: string;
   };

   const title: string = "Welcome to my website!";

   const navLinks: NavLink[] = [
     { label: 'Home', href: '#' },
     { label: 'About', href: '#' },
     { label: 'Contact', href: '#' },
   ];

const Header: React.FC = () => {

  return (
    <header>
      <h1>{title}</h1>
      <nav>
        {navLinks.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
        ))}
      </nav>
    </header>  
  )
}

export default Header