import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './index.css'
import mainImg from './assets/wall1.png';
import animatedImg from './assets/cube-animated.gif'

function App() {


  return (

    <div className="App">

      <NavBar />

      <main className="flex justify-center items-center relative bg-gradient-to-r from-primary to-transparent">

        <img className="m-4" src={animatedImg} alt="Animated Rubik's Cube" />
        <ItemListContainer title={"Solvix"} slogan={"Your Online Shop for Cubing Unmatched Excellence."} />

        <img className="-z-10 object-cover w-full h-full absolute filter grayscale background" src={mainImg} alt="Background image connected to Rubik's cube" />
      </main>


      <footer className="bg-primary-inverted flex justify-center items-center text-primary">
        <span>footer</span>
      </footer>
    </div>

  )
}

export default App
