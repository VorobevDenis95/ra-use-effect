import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import Details from './components/Details'
import { PropsInfoEl } from './components/ListItem'

function App() {

  const [info, setInfo] = useState({
    id: 0, name: 0,
  });

  const onClickElement = (el) =>  {
    if ((info && info.id !== el.id) || !info ) {
      setInfo((prevState) => {
        return {
          id: el.id,
          name: el.name, 
        }
      })
    }
    console.log(info);
}

  return (
    <>
      <div className="container">
        <List onClickElement={onClickElement}/>
        <Details id={info.id} name={info.name} />
      </div>
      
    </>
  )
}

export default App
