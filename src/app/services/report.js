
export const sendReport = async (token, data) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/reports/create`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data),
    })
    
    if (response.status === 401) {
        return false;
    } else if (response.ok) {
        return true;
    }
}