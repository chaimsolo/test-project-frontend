import { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar.js";
import ProductsGrid from "../components/productgrid/productGrid.js";
import { speakersList } from "../data/speakers.js";
export default function Speakers() {
  
  
  return (
    
    <div>
      <Navbar />
      <ProductsGrid products={speakersList}/>
    </div>
  );
}