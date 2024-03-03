'use client'
import styles from "./page.module.css";
import {
  Preloader
} from "./components"
import {
  useState,
  useEffect
} from "react"

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setShowPreloader(false);
  }, 3000); 
  
  return (
    <>
      <Preloader
        showPreloader={showPreloader}
      />

      <main className={styles.main}>
        123
      </main>
    </>
  );
}
