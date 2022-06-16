import { useState } from "react";
import reviews from "./data";

function App() {
  const [id, setId] = useState(0);
  const next = () => {
    if (id === 4) {
      setId(0);
    } else {
      setId(id + 1);
    }
  };
  const prev = () => {
    if (id === 0) {
      setId(4);
    } else {
      setId(id - 1);
    }
  };
  const random = () => {
    setId(Math.floor(Math.random() * 5));
  };

  return (
    <section>
      <main>
        <div className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <div className="review">
            <div className="img-container">
              <div className="person-img">
                <img className="person-img" src={reviews[id].image} alt="" />
                <div className="quote-icon">
                  <h4>
                    <i className="fa-solid fa-quote-right"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="author">
              <h4>{reviews[id].name}</h4>
            </div>
            <div className="job">{reviews[id].job}</div>
            <div className="info">
              <p>{reviews[id].text}</p>
            </div>
            <button onClick={() => { prev() }} className="prev-btn">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button onClick={() => {next()}} className="next-btn">
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <br />
            <button onClick={()=>{random()}} className="random-btn">
              surprise me
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
