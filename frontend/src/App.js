
import './App.css';
import {Component} from "react";

class App extends Component{
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await fetch('/products');
    const body = await response.json();
    this.setState({products: body});
  }

  render() {
    const {products} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
              <h2>products</h2>
              {products.map(product =>
                  <div key={product.id}>
                    {product.productname} ({product.price})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;
