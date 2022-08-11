const setNewsletter = async (state, setLoading) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": "heroku@test.co",
                "name": "test"
            })
        };
        const response = await fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', requestOptions);
        const data = await response.json();
        // this.setState({ postId: data.id });
        console.log(data)
    } catch (error) {
        console.log(error);
    }
};
export {
    setNewsletter
}
