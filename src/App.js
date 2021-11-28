import logo from './logo.svg';
import './App.css';
import ProductCategoryRow from './components/ProductCategoryRow';
import ProductRow from './components/ProductRow';

function App() {
  const p1 =  {category: "Fruits", price: "$1", stocked: false, name: "Apple"}
  return (
    <div className="App">
      <ProductCategoryRow category="sdfsdf"/>
      <ProductRow product={p1}/>
    </div>
  );
}

export default App;
