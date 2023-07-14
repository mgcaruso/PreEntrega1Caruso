import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './index.css'
import mainImg from './assets/2.jpg';

function App() {

  return (

    <div className="App">

      <NavBar />
      <main className="flex justify-center items-center relative bg-gradient-to-r from-primary  via-ultra-light to-transparent">
        <ItemListContainer data={"Welcome to Solvix!"} />
        <img className="-z-10 object-cover w-full h-full absolute filter grayscale background" src={mainImg} alt="Background image connected to Rubik's cube" />
      </main>
      {/* LIKE IT */}
      {/* <main className="flex justify-center items-center relative bg-gradient-to-r from-primary via-ultra-light to-transparent">
        <ItemListContainer data={"Welcome to Solvix!"} />
        <img className="-z-10 object-cover w-full h-full absolute filter grayscale" src={mainImg} alt="Background image connected to Rubik's cube" />
      </main> */}



      <footer className="bg-primary-inverted flex justify-center items-center text-primary">
        <span>footer</span>
      </footer>
    </div>

  )
}

export default App
