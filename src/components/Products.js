import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import 'reactjs-popup/dist/index.css';
import '../styles/product.css';


class Products extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <Popup trigger={
            <a href={`#${product.id}`}>
              <img src={product.img} alt={product.title} />
              <p className="title">{product.title}</p>
            </a>
            } position="right center">
              <div className="popup">
                <h2>{product.title} by {product.author}</h2>
                <p>{product.description}</p>
              </div>
          </Popup>
            
          <b>{util.formatCurrency(product.price)}</b>
          <button
            className="btn"
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            <FontAwesomeIcon icon={faCartArrowDown} /> Add To Cart
          </button>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
