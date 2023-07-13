import NavBar from './components/NavBar/NavBar'
import './index.css'

function App() {

  return (

    <div className="App">

      <NavBar />
      <main className="bg-[#f3f4f6]">
        <p className="text-3xl font-bold ">
          Hello world!
        </p>
      </main>
      <footer>
        <span>footer</span>
      </footer>
    </div>

  )
}

export default App
