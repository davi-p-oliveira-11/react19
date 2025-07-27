const heading: string = `Hello, World!`;
const message: string = `Welcome to learning JSX!`;

const WelcomeMessage: React.FC = () => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{message}</p>
    </div>
  )
}

export default WelcomeMessage