// import FetchTodo from "./components/FetchTodo"

import { Suspense } from "react"
import FetchTodo1 from "./components/FetchTodo1"

const App = () => {
  return (
    <Suspense>
      {/* <FetchTodo /> */}
      <FetchTodo1 />
    </Suspense>
  )
}

export default App