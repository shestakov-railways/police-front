
export const sendQuestion = async (token, data) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/contact/send-question`, {
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