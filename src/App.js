import "./App.css";
import Header from "./components/header";
import ViewSection from "./components/ViewSection";
import { Component } from "react";
import InputSection from "./components/InputText";
import FinalViewSection from "./components/FinalViewSection";

class WireFrames extends Component {
  state = { inputUser: "", setQueue: [], finalViewList: [], timerStart: false };

  onchangeInputText = (e) => {
    this.setState({ inputUser: e.target.value });
  };

  pushItemsToFinalView = () => {
    console.log("timer running");
    const { setQueue } = this.state;
    if (setQueue.length > 0) {
      const item = setQueue.shift();
      this.setState((prevState) => ({
        finalViewList: [...prevState.finalViewList, item],
      }));
    } else {
      this.setState({ timerStart: true });
      console.log("timer stop");
    }
  };

  onclickAddButton = () => {
    let timerId;
    const { inputUser, timerStart } = this.state;
    this.setState((prevState) => ({
      setQueue: [...prevState.setQueue, inputUser],
    }));

    this.setState({ inputUser: "" });
    if (!timerStart) {
      timerId = setInterval(() => {
        this.pushItemsToFinalView();
      }, 10000);
    } else {
      clearInterval(timerId);
    }
  };

  render() {
    const { inputUser, setQueue, finalViewList } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <div className="bottom-section">
            <div className="bottom-left-section">
              <InputSection
                value={inputUser}
                onchangeInputText={this.onchangeInputText}
                onclickAddButton={this.onclickAddButton}
              />

              {/* {setQueue.map((each, index) => (
              <ViewSection key={index} listItem={each} />
            ))} */}
              <div className="view-section">
                <ViewSection setQueue={setQueue} />
              </div>
            </div>
          </div>
          <div className="final-view">
            <div className="final-view-display">
              <FinalViewSection finalViewList={finalViewList} />
            </div>
            <div className="final-view-btn-section">
              <button
                type="button"
                className="end-btn"
                onClick={this.endBtnToStopTimer}
              >
                End
              </button>
              <button type="button" className="view-button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WireFrames;
