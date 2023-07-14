
import './globals.css'
import styles from "./page.module.css";
import Header from "../headerr";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        <Header/>
         
        </p>
        
      </div>

      
      <Header/>

      
    </main>
  )
}
