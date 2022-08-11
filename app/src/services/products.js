const getAllProducts = async (state, setLoading) => {
  try {
    const response = await fetch("https://corebiz-test.herokuapp.com/api/v1/products");
    const data = await response.json();
    //   console.log(data)
    await state(data)
    setLoading(false)
  } catch (error) {
    console.log(error);
  }
};


export {
  getAllProducts
}
