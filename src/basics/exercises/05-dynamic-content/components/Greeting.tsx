const title: string = `Dynamic Rendering`;
const message: string = `Hipermercado de SSSSSSSSSSSS`;
const name: string = `John`;
const currentDate = new Date().toDateString();


const Greeting: React.FC = () => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      <p>{name}</p>
      <p>Today is: {currentDate}</p>
    </div>
  )
}

export default Greeting