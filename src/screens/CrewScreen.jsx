import React, { useEffect, useState, useRef } from "react";

const CrewScreen = ({data}) => {
  const [crewData, setCrewData ] = useState(data[0])
  const refButton = useRef()

  useEffect(() => {
    const root = document.getElementById("root");
    root.setAttribute("class", "crew");
  }, []);
  
  const handleClick = (event) =>{
    if(event.target.classList.contains('data-button')){
      refButton
            .current
            .childNodes
            .forEach(child => child.setAttribute('aria-selected',false))
        event.target.setAttribute('aria-selected',true)
        handleData(event.target.innerText)
    }
  }

  const handleData= (role) =>{
    let refinedRole = role.replace('The ','').toLowerCase()
    let filteredData = data.filter(e => e.role.toLowerCase() === refinedRole)
    setCrewData(filteredData[0])
  }
  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>
      <div ref={refButton} onClick={handleClick} className="dotIndicators flex">
        <button aria-selected="true" className="data-button">
          <span className="sr-only">The commander</span>
        </button>
        <button aria-selected="false" className="data-button">
          <span className="sr-only">The mission specialist</span>
        </button>
        <button aria-selected="false" className="data-button">
          <span className="sr-only">The pilot</span>
        </button>
        <button aria-selected="false" className="data-button">
          <span className="sr-only">The flight engineer</span>
        </button>
      </div>
      <article className="crew-details flow">
        <header className="flow flow--space-small">
        <h2 className="fs-600 ff-serif uppercase">{crewData.role}</h2>
        <p className="fs-700 uppercase ff-serif">{crewData.name}</p>
        </header>
        <p>
          {crewData.bio}
        </p>
      </article>

      <picture>
        <source srcSet={crewData.images.webp} type="image/webp"></source>
        <img src={crewData.images.png} alt={crewData.name} />
      </picture>
    </main>
  );
};

export default CrewScreen;
