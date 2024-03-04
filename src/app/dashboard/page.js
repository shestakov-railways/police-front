import {
  Page
} from "./components"
import { cookies } from 'next/headers'
import { checkJWT } from "../services/auth"
import {
  NotFound
} from "../components"

export default async function Dashboard() {
    const cookieStore = cookies()
    const token = cookieStore.get('token');
    const isValid = await checkJWT(token?.value); 
    
    if(!token?.value || !isValid) return <NotFound />;

    return (
      <>
        <Page />
      </>
    );
}
