import Image from "./Components/Image/Image";
import Name from "./Components/Name/Name";
import Objective from "./Components/Objective/Objective";
import Edu from "./Components/Edu-qualification/Edu";
import Technical from "./Components/Technical/Technical";
import Practice from "./Components/Practice-works/Practice";
import Hobbies from "./Components/Hobbies/Hobbies";
import Reference from "./Components/Reference/Reference";
import Declaration from "./Components/Declaration/Declaration";
function App() {
return (
  <>
  <div className="Image-Container">
    <Image />
  </div>
  <div className="Name-Container">
    <Name />
  </div>
  <div className="Objective-Container">
    <Objective />
  </div>
  <div className="Edu-Container">
    <Edu />
  </div>
  <div className="Technical-Container">
    <Technical />
  </div>
  <div className="Practice-Container">
    <Practice />
  </div>
  <div className="Hobbies-Container">
    <Hobbies />
  </div>
  <div className="Reference-Container">
    <Reference />
  </div>
  <div className="Declaration-Container">
    <Declaration />
  </div>
  </>
  );
}

export default App;
