
export const checkJWT = async (token) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/check-jwt`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    
    if (response.status === 401) {
        return false;
    } else if (response.ok) {
        return true;
    }
}