import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './componens/blogs/Blogs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Blogs></Blogs>
        <h1 className='text-orange-700'>hasib</h1>
      
    </div>
  )
}
export default App
