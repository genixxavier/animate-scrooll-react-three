//import Scene from './Scene'

import { Suspense } from 'react'
import './App.css'
import SceneBottle from './SceneBottle'
import Label from './components/Label'

function App() {

  return (
    <div className='container' id='bg_container'>
      <div className='wrapper'>
        <Suspense fallback={null}>
          <Label />
          <SceneBottle />
        </Suspense>
      </div>
    </div>
  )
}

export default App
