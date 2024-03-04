export const signIn = async (formData) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();

    if(data?.error) throw new Error(data?.message || 'Something went wrong');
    
    return data;
}