const MainContent: React.FC = () => {
   
  const textContent: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit  
                               Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.  
                               Nisi ut aliquip ex ea commodo consequat.  
                               Duis aute irure dolor in reprehenderit in voluptate velit esse.  
                               Cillum dolore eu fugiat nulla pariatur.`;

  return (
    <main>
      <h2>Main Content</h2>
      <p>{textContent}</p>
    </main>
  )
}

export default MainContent