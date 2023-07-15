import './index.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import mainImg from './assets/images/wall1.png';
import logoSolvix from './assets/images/logo-no-letters.png'
import Footer from './components/Footer/Footer';

function App() {


  return (

    <div className="App">

      <NavBar />

      <main className="flex justify-center items-center relative bg-gradient-to-r from-primary to-transparent flex-col sm:flex-row">

        <img className="logo-img drop-shadow-md sm:m-8 mb-1 mt-8" src={logoSolvix} alt="Animated Rubik's Cube" />
        <div className="flex flex-col">
          <ItemListContainer greeting={"Solvix"} slogan={"Your Online Shop for Cubing Unmatched Excellence."} />
        </div>
        <img className="-z-10 object-cover w-full h-full absolute filter grayscale background" src={mainImg} alt="Background image connected to Rubik's cube" />
      </main>

      <Footer />
    </div>

  )
}

export default App
