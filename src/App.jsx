import NavBar from './components/NavBar/NavBar'
import './index.css'

function App() {

  return (

    <div className="App">

      <NavBar />
      <main className="bg-ultra-light flex justify-center items-center">
        <p className="text-3xl font-bold ">
          Hello world!
        </p>
      </main>
      <footer className="bg-primary-inverted flex justify-center items-center text-primary">
        <span>footer</span>
      </footer>
    </div>

  )
}

export default App
