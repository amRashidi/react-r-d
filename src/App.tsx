import { Profiler } from 'react'
import './App.css'
import { Countdown } from './components/CountDown'
import renderProfile from './utils/profiler'

function App() {
  return (
    <>
      <h1>linaria Version</h1>
      <Profiler id="countdown-linaria" onRender={renderProfile}>
        <Countdown />
      </Profiler>
    </>
  )
}

export default App
