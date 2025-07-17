import { useState } from 'react';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import './components/App.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <div style={{ width: "100vw", overflowX: "hidden" }}>
      <Nav />

      <div className="px-3">
        <Search
          foodData={foodData}
          setFoodData={setFoodData}
          setFoodId={setFoodId}
        />

        <Container>
          <InnerContainer width="55%">
            <FoodList
              foodData={foodData}
              setFoodId={setFoodId}
            />
          </InnerContainer>

          <InnerContainer width="45%">
            {foodId ? (
              <FoodDetails
                foodId={foodId}
                setFoodId={setFoodId}
              />
            ) : (
              <p style={{ padding: '20px', fontWeight: 'bold' }}>
                👈 Select a food to view details
              </p>
            )}
          </InnerContainer>
        </Container>
      </div>
    </div>
  );
}

export default App;
