import { useState, useEffect } from 'react';

const Shop2Page_19 = () => {
  const [products, setProducts] = useState([]);

  const getShop2_19 = async() => {
    try{
      const response = await fetch(`https://esqwkehuhxspbqsektof.supabase.co/rest/v1/shop2_19?select=*`, {
        method: 'GET',
        headers: {
          apikey: process.env.API_KEY,
          Authorization: process.env.AUTHORIZATION_,
          
        }
      })
      console.log(process.env.AUTHORIZATION_);
      const data = await response.json();
      console.log('shop2 data', data);
      setProducts(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getShop2_19();
  }, [])

  if (!Array.isArray(products)) {
    console.log('products is not an array:', products);
    return <div>Loading... products is not an array</div>;
  }

  return (
    <div className="shop-page">
      <div className="collection-page">
        <h1 className="title">All products -- Supabase shop2</h1>
        <div className="items">
          {products.map((product) => {
            const {id, name, price, local_url} = product;
            return (
              <div className="collection-item" key={id}>
              <img className="image" src={local_url} alt="img"/>
              <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
              </div>
              <button className="custom-button">Add to Cart</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop2Page_19;
