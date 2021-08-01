import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [currSection, setCurrSection] = useState("first-section");
  const [canVisitTwo, setCanVisitTwo] = useState(false);
  const [done, setDone] = useState(false);

  const firstStep = useRef();
  const secondStep = useRef();
  const thirdStep = useRef();

  //To highlight the steps that are done
  useEffect(() => {
    if (currSection === "first-section") {
      firstStep.current.classList.add("active-step");
      secondStep.current.classList.remove("active-step");
      thirdStep.current.classList.remove("active-step");
    }else if (currSection === "second-section") {
      firstStep.current.classList.add("active-step");
      secondStep.current.classList.add("active-step");
      thirdStep.current.classList.remove("active-step");
    }else if (currSection === "third-section") {
      firstStep.current.classList.add("active-step");
      secondStep.current.classList.add("active-step");
      thirdStep.current.classList.add("active-step");
    }
  }, [currSection])

  useEffect(() => {
    if (canVisitTwo) {
      secondStep.current.classList.add('can-be-activated');
      thirdStep.current.classList.add('can-be-activated');
    }
  }, [canVisitTwo])
  
  useEffect(() => {
    if (done) {
      firstStep.current.classList.add('done');
      secondStep.current.classList.add('done');
      thirdStep.current.classList.add('done');
    }
  },[done])

  const HandleSubmitTitle = () => {
    setCurrSection("second-section");
  }
  const HandleBackToFirst = () => {
    setCurrSection("first-section");
  }
  const HandleSubmitDescription = () => {
    setCurrSection("third-section");
    setCanVisitTwo(true);
  }
  const HandleBackToSecond = () => {
    setCurrSection("second-section");
  }
  const HandleGoAhead = () => {
    setCurrSection("final");
    setDone(true);
  }
  const HandleOne = () => {
    setCurrSection("first-section");
  }
  const HandleTwo = () => {
    setCurrSection("second-section");
  }
  const HandleThree = () => {
    setCurrSection("third-section");
  }
  return (
    <div className="main-container">
      <div className="form-container">
        <div className="left-section">
          <div className="choice-container">
            <div ref={firstStep} onClick={HandleOne} className="step-no active-step">1</div>
            <div>Choose title</div>
          </div>
          <div className="choice-container">
            <div ref={secondStep} onClick={HandleTwo} className="step-no active-step">2</div>
            <div>Choose description</div>
          </div>
          <div className="choice-container">
            <div ref={thirdStep} onClick={HandleThree} className="step-no active-step">3</div>
            <div>Confirm data</div>
          </div>
        </div>
        <div className="right-section">
          {currSection === "first-section" && <div className="first-section">
            <div className="section-title">Choose title content</div>
            <div className="button" onClick={HandleSubmitTitle} >Submit title</div>
          </div>}
          {currSection === "second-section" && <div className="second-section">
            <div className="section-title">Choose description content</div>
            <div className="button-group">
            <div className="button" onClick={HandleBackToFirst}>Back</div>
            <div className="button" onClick={HandleSubmitDescription} >Submit description</div>
            </div>
          </div>}
          {currSection === "third-section" && <div className="third-section">
            <div className="section-title">Are you happy now?</div>
            <div className="button-group">
            <div className="button" onClick={HandleBackToSecond}>No, Go back</div>
              <div className="button" onClick={HandleGoAhead}>Yes, Go ahead</div>
              </div>
          </div>}
          {currSection === "final" && <div className="final-section">
            <div className="section-title">Ok, we are done. Thanks for sending us your data</div>
          </div>}
        </div>
      </div>
    </div>
  );
}
export default App;