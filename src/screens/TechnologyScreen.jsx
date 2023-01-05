import React,{useEffect} from 'react'

const TechnologyScreen = () => {
  useEffect(() => {
    const root = document.getElementById("root");
    root.setAttribute("class", "technology");
  }, []);
  return (
    <div>TechnologyScreen</div>
  )
}

export default TechnologyScreen