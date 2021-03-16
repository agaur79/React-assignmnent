import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function ProductList() {

  const { entities } = useSelector((state) => state.product);
  const loading = useSelector((state) => state.loading);

  return (
    <div className="container">
      <div className="row">
        <h1>Product Listing</h1>
      </div>
      <div className="row">
        <div className="two columns">
        </div>
        <div className="two columns">
          <Link to="/addProduct">
            <button className="button-primary">Add Product</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Category</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ _id, productName, productCategory }, i) => (
                  <tr key={i}>
                    <td>{_id}</td>
                    <td>{productName}</td>
                    <td>{productCategory}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
