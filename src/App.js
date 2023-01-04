import { Container } from "react-bootstrap";
import NavScroll from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import CardeList from "./components/cardeList";
import { Data } from "./components/data";
import { useState } from "react";
 import Fade from 'react-reveal/Fade';
 import Zoom from 'react-reveal/Zoom';
 import Wobble from 'react-reveal/Wobble';

function App() {
  const [cardData, setCardData] = useState(Data);
//get all cat uniqe
  const allCategories = ['All',...new Set(Data.map(d => d.category))]

  // console.log(allCategories)
//filter by category
  const filterData = (cat) => {
    if (cat === "All") {
      setCardData(Data);
    } else {
      const cardData = Data.filter((det) => det.category === cat);
      setCardData(cardData);
    }
  };
  //filter by search from category
  const filterBySearsh = (ward) => {
    if (ward !== "") {
      const ardData = Data.filter((s) => s.title === ward)
      setCardData(ardData);
    }
  };
  
  return (
    <div className="color-body font">
     <Fade left >
      <NavScroll  filterBySearsh={filterBySearsh}/>
      </Fade>
      <Container>
        <Wobble >
        <Header />
        </Wobble>
        <Zoom>
          
        <Category filterData={filterData} allCategories={allCategories} />
        </Zoom>
        <CardeList cardData={cardData} />
      </Container>
  
      
    </div>
  );
}

export default App;
