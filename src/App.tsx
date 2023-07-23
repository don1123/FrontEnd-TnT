import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './about'

const data:string[] = ['a','b','c','d','✅']

function App() {
  //const [count, setCount] = useState(0)
  const [state,setState] = useState<string>("test");
  return (
    <div className="main">
    <h1 className = "Space">Hello react Lppp</h1>
    <About data = {data} func = {setState}></About>
    <h1>{state}</h1>
    <input onChange={(e) => setState(e.target.value)}></input><br />

    {/* this is javascript*  
      data.map((item,idx) => {
        if (item === 'a') return <h1 key={idx}>AAA</h1>;
        else return <h4 key={idx}>item</h4>;
      })
      // map = ดึงข้อมูลจาก array / item คือของใน array / idx เปลี่ยนเป็น id ของ item ถ้าของข้างในเป็น object
      data.map((item,idx) =>(
        <h4 key={idx}>{item}</h4>
       )
      )
    */
    }
    </div>
  );
}

export default App;