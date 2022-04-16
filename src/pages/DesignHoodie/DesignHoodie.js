import React, { useState } from "react";
import "./DesignHoodie.css";
import PageTools from "../../components/DesignerPage/PageTools";
import PageView from "../../components/DesignerPage/PageView";
import ProductInfo from "../../components/DesignerPage/ProductInfo";

function DesignHoodie() {
  const [view, setView] = useState("front");
  const [colourNumber, setColourNumber] = useState("");

  return (
    <>
      <div className="designerPage gutters">
        <div className="designerPage__section">
          <PageTools view={view} setView={setView}/>
          <PageView view={view} colourNumber={colourNumber}/>
          <ProductInfo colourNumber={colourNumber} setColourNumber={setColourNumber}/>
        </div>
      </div>
    </>
  );
}

export default DesignHoodie;
