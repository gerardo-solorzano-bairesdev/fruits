import logo from './logo.svg';
import './App.css';
import ProductCategoryRow from './components/ProductCategoryRow';
import ProductRow from './components/ProductRow';
import ProductTable from './components/ProductTable';

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function App() {
  const p1 =  {category: "Fruits", price: "$1", stocked: false, name: "Apple"}
  return (
    <div className="App">
      <ProductCategoryRow category="sdfsdf"/>
      <ProductRow product={p1}/>
      <ProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;
