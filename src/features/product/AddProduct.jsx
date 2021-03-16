import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { addProduct, fetchProduct } from "./productSlice";

export function AddProduct() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [error, setError] = useState(null);

  const handleProductName = (e) => setProductName(e.target.value);
  const handleProductCategory = (e) => setProductCategory(e.target.value);

  const handleClick = () => {
    if (productName && productCategory) {
      dispatch( addProduct({  productName, productCategory }) );
      setError(null);
      history.push("/");
      dispatch(fetchProduct())
    } else {
      setError("Fill in all fields");
    }

    setProductName("");
    setProductCategory("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add Product</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Product Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Clothes"
            id="nameInput"
            onChange={handleProductName}
            value={productName}
          />
          <label htmlFor="emailInput">Product Category</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="Levis"
            id="emailInput"
            onChange={handleProductCategory}
            value={productCategory}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
