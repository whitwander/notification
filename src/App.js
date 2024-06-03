import Header from "./components/Header/Header";
import "./App.css"
import BoxReaction from "./components/BoxReaction";
import BoxFollow from "./components/BoxFollow";
import BoxGroups from "./components/BoxGroups";

function App() {
  return (
    <>
    <Header />
    <BoxReaction image={"./images/avatar-mark-webber.webp"} name={"Mark Webber"} event={"My first tournament today!"} time={"1m ago"}/>
    <BoxFollow image={"./images/avatar-angela-gray.webp"} name={"Angela Gray"} time={"5m ago"}/>
    <BoxGroups image={"./images/avatar-jacob-thompson.webp"} name={"Jacob Thompson"} time={"1day ago"} att={"joined"} group={"Chess Club"} />
    <BoxReaction image={"./images/avatar-nathan-peterson.webp"} name={"Nathan Peterson"} event={"5 end-game strategies to increase your win rate"} time={"2 weeks ago"} />
    </>
  )
}

export default App;
