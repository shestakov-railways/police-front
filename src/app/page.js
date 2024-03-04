'use client'
import {
  Preloader
} from "./components"
import {
  useContext,
  useEffect
} from "react"
import {
  Page
} from "./sign-in/components"
import {
  LayoutContext
} from "./context"

export default function Home() {
  const { showPreloader, setShowPreloader } = useContext(LayoutContext); 

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
