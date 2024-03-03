'use client'
import {
  Preloader
} from "./components"
import {
  useState,
  useEffect
} from "react"
import {
  Page
} from "./sign-in/components"

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 3000);
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
