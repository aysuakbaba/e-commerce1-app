import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import menu from "../assets/menu.png";
import filter from '../assets/edit.png'
import { Image, Div, Title, Container } from "../styles/ClothStyle";
import ClothCategory from "../components/ClothCategory";
import FilterModal from "../components/FilterModal";

function ClothLayout() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  function toggleMenu() {
    setIsMenuOpened((prevMenu) => !prevMenu);
  }

  const [isFilterOpened, setIsFilterOpened] = useState(false)
  function toggleFilter() {
    setIsFilterOpened((prevFilter) => !prevFilter)
  }
  return (
    <>
      <MainNavigation />
      <Title>View All</Title>
      <Container>
        <div className="menu-filter">
        <Div>
          <Image src={menu} alt="menu" onClick={toggleMenu} />
          <h4>Clothing</h4> 
          
        </Div>
        {isMenuOpened && <ClothCategory/>}
        </div>
        <div className="menu-filter">
        <Div>
            <Image src={filter} alt='filter' onClick={toggleFilter}/>
            <h4>Filter</h4>
        </Div>
        <FilterModal isFilterOpened={isFilterOpened}/>
        </div>
      </Container>


      <main>
        
        {Outlet}
      </main>
      <Footer />
    </>
  );
}

export default ClothLayout;
