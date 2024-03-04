export const signUp = async (formData) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/sign-up`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
          }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data?.error?.message || 'Something went wrong');
        }
        return data;
    } catch (error) {
        return {
          isError: true,
          error: error.message
        }
    }
}