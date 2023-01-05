import React from "react";
import styles from "../css/Component.module.css";

const InteractiveElements = () => {
  return (
    <section className="flow" id="interactive-elements">
      <h2 className="numbered-title">
        <span>03</span> Interactive elements
      </h2>

      {/* <!-- navigation --> */}
      <div>
        <nav>
          <ul className={`${styles.primaryNavigation} flex underline-indicators`}>
            <li className="active">
              <a className="text-accent uppercase letter-spacing-2" href="#">
                <span>01</span>Active
              </a>
            </li>
            <li>
              <a className="text-accent uppercase letter-spacing-2" href="#">
                <span>02</span>Hovered
              </a>
            </li>
            <li>
              <a className="text-accent uppercase letter-spacing-2" href="#">
                <span>03</span>Idle
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex" style={{ "--gap": "10rem" }} >
        <div style={{ marginTop: "5rem" }}>
          {/* <!-- explore button --> */}
          <a
            href="#"
            className={`${styles.largeButton} uppercase ff-serif fs-600 text-dark bg-white`}
          >
            Explore
          </a>
        </div>

        <div className="flow" style={{ marginBottom: "50vh","--flow-space":"4rem" }}>
          {/* <!-- Tabs --> */}
          <div className={`${styles.tabList} underline-indicators flex`}>
            <button aria-selected={true} className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Moon</button>
            <button aria-selected={false} className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Mars</button>
            <button aria-selected={false} className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Europa</button>
          </div>

          {/* <!-- Dots --> */}
          <div className={`${styles.dotIndicators} flex`}>
            <button aria-selected={true}> <span className="sr-only">Slide Title</span></button>
            <button aria-selected={false}> <span className="sr-only">Slide Title</span></button>
            <button aria-selected={false}> <span className="sr-only">Slide Title</span></button>
          </div>

          {/* <!-- Numbers --> */}
          <div className={`${styles.numberIndicators} flex`}>
            <button aria-selected={true}  className={`ff-serif`}> 1 </button>
            <button aria-selected={false} className={`ff-serif`}> 2 </button>
            <button aria-selected={false} className={`ff-serif`}> 3 </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveElements;
