import React, { useEffect, useState } from "react";
import DestinationData from "../components/DestinationData";


const DestinationScreen = ({data}) => {
  const [destinationData, setDestinationData] = useState(data[0])

  useEffect(() => {
    const root = document.getElementById("root");
    root.setAttribute("class", "destination");
  }, [destinationData]);

  const dataHandler =  (dest) =>{
    let filteredData = data.filter( e => ( dest === e.name ))
    setDestinationData(filteredData[0]);
  }  

  return (
    <DestinationData data={destinationData} handleData={dataHandler}/>
  );
};

export default DestinationScreen;
