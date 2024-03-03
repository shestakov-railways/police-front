'use client'
import {
  Preloader
} from "../components"
import {
  useState,
  useEffect
} from "react"
import {
  Page
} from "./components"

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 500);
  }, []); 
  
  return (
    <>
      <Preloader
        showPreloader={showPreloader}
      />

      <Page />
    </>
  );
}
