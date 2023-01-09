import React, { useRef } from 'react'

const DestinationData = ({data, handleData}) => {
  const refButton = useRef()
  const handleClick = (event) =>{
    if(event.target.classList.contains('data-button')){
      refButton
            .current
            .childNodes
            .forEach(child => child.setAttribute('aria-selected',false))
        event.target.setAttribute('aria-selected',true)
    }
    handleData(event.target.getAttribute('id'))
  }


  return (
    data?(<main className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      <picture>
        <source srcSet={data.images.webp} type="image/webp"></source>
        <img src={data.images.png} alt={data.name} />
      </picture> 

      <div onClick={()=>handleClick( event )} ref={refButton} className={`tabList underline-indicators flex`}>
        <button
          aria-selected={true}
          id="Moon"
          className="data-button uppercase ff-sans-cond text-accent bg-none letter-spacing-2"
        >
          Moon
        </button>
        <button
          aria-selected={false}
          id="Mars"
          className="data-button uppercase ff-sans-cond text-accent bg-none letter-spacing-2"
        >
          Mars
        </button>
        <button
          aria-selected={false}
          id="Europa"
          className="data-button uppercase ff-sans-cond text-accent bg-none letter-spacing-2"
        >
          Europa
        </button>
        <button
          aria-selected={false}
          id="Titan"
          className="data-button uppercase ff-sans-cond text-accent bg-none letter-spacing-2"
        >
          Titan
        </button>
      </div>

      <article className="destination-info flow">
        <h2 className="ff-serif fs-900 uppercase">{data.name}</h2>

        <p>
          {data.description}
        </p>

        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif fs-500 uppercase">{data.distance}</p>
          </div>

          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif fs-500 uppercase">{data.travel}</p>
          </div>
        </div>
      </article>
    </main>):<div></div>
  )
}

export default DestinationData

