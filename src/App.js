import Header from "./components/Header/Header";
import "./App.css"
import BoxReaction from "./components/Box-reaction/BoxReaction";
import BoxFollow from "./components/Box-follow/BoxFollow";

function App() {
  return (
    <>
    <Header />
    <BoxReaction image={"./images/avatar-mark-webber.webp"} name={"Mark Webber"} event={"My first tournament today!"} time={"1m ago"}/>
    <BoxFollow image={"./images/avatar-angela-gray.webp"} name={"Angela Gray"} time={"5m ago"}/>
    <BoxReaction image={"./images/avatar-nathan-peterson.webp"} name={"Nathan Peterson"} event={"5 end-game strategies to increase your win rate"} time={"2 weeks ago"} />
    </>
  )
}

export default App;
