import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './index.css'
import mainImg from './assets/wall1.png';
// import animatedImg from './assets/cube-animated.gif'
import logoSolvix from './assets/logo-no-letters.png'


function App() {


  return (

    <div className="App">

      <NavBar />

      <main className="flex justify-center items-center relative bg-gradient-to-r from-primary to-transparent flex-col sm:flex-row">

        {/* <img className="m-8" src={animatedImg} alt="Animated Rubik's Cube" /> */}
        <img className="m-8 drop-shadow-sm" src={logoSolvix} alt="Animated Rubik's Cube" />
        
        <div className="flex flex-col">

        
          <ItemListContainer title={"Solvix"} slogan={"Your Online Shop for Cubing Unmatched Excellence."} />

          
        </div>

        <img className="-z-10 object-cover w-full h-full absolute filter grayscale background" src={mainImg} alt="Background image connected to Rubik's cube" />
      </main>


      <footer className="bg-primary-inverted flex justify-center items-center text-primary">
        <span>footer</span>
      </footer>
    </div>

  )
}

export default App
