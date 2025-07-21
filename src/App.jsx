import { useState } from 'react';
import Search from './components/Search';
import FoodList from './components/FoodList';
import FoodDetails from './components/FoodDetails'; 
import Nav from './components/Nav';
import './components/App.css';
import Container from './components/Container';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} setFoodId={setFoodId} />

      <Container>
        <div className={`p-2 m-2 ${foodId ? "w-md-50" : "w-100"}`}>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </div>
      </Container>

      {/* ✅ Show modal */}
      {foodId && <FoodDetails foodId={foodId} setFoodId={setFoodId} />}
    </>
  );
}

export default App;
