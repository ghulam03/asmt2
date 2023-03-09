

import Card from "../components/Card"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import styles from "../styles/demo.module.css"
function Demo() {
  return (
    <>
    <div className={styles.cont}>

  
    <Header></Header>
    <Hero></Hero>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Footer></Footer>
    </div>
    </>
  )
}

export default Demo