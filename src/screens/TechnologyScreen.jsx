import React, { useState,useEffect,useRef } from "react";

const TechnologyScreen = ({data}) => {
  const [technologyData, setTechnologyData ] = useState(data[0])
  const refButton = useRef()

  const handleClick = (event) =>{
    if(event.target.classList.contains('data-button')){
      refButton
            .current
            .childNodes
            .forEach(child => child.setAttribute('aria-selected',false))
        event.target.setAttribute('aria-selected',true)
        setTechnologyData(data[Number(event.target.innerText)-1])
    }
  }
  
  useEffect(() => {
    const root = document.getElementById("root");
    root.setAttribute("class", "technology");
  }, []);

  return (
    <main className="grid-container grid-container--technology">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>

      <div onClick={handleClick} ref={refButton} className={`numberIndicators numbersIndicators--row flex`}>
        <button aria-selected={true} className={`ff-serif data-button`}>
          {" "}
          1{" "}
        </button>
        <button aria-selected={false} className={`ff-serif data-button`}>
          {" "}
          2{" "}
        </button>
        <button aria-selected={false} className={`ff-serif data-button`}>
          {" "}
          3{" "}
        </button>
      </div>

      <article className="tech-info flow">
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-serif uppercase">The terminology...</h2>
          <p className="fs-700 uppercase ff-serif">{technologyData.name}</p>
        </header>

        <p>
          {technologyData.description}
        </p>
      </article>
        <img
          className="landscape"
          src={technologyData.images.landscape}
        />
        <img
          className="potrait"
          src={technologyData.images.portrait}
          />
    </main>
  );
};

export default TechnologyScreen;
