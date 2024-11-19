import styles from "./App.module.css";
import { Navbar_Dark } from "./components/Navbar_Dark/Navbar_Dark";
import { Navbar_Light } from "./components/Navbar_Light/Navbar_Light";
import { Hero } from "./components/Hero/Hero";
import { Products } from "./components/Products/Products";

function App() {
  return (
    <div className={styles.App}>
      <Navbar_Dark />
      <Navbar_Light />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
