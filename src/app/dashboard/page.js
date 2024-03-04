import {
  Page
} from "./components"
import { cookies } from 'next/headers'
import { checkJWT } from "../services/auth"

export default async function Dashboard() {
    const cookieStore = cookies()
    const token = cookieStore.get('token');
    const isValid = await checkJWT(token?.value); 
    
    if(!token?.value || !isValid) return (<h1>Page not found</h1>);

    return (
      <>
        <Page />
      </>
    );
}
