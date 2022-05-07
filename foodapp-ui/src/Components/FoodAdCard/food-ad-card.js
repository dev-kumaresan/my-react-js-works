import "./food-ad-card.css";
import Dots from "../Dots/dots";
import AdContent from "../AdContent/ad-content";
import Bend from "../Bend/bend";
import CircleButton from "../CircleButton/circle-button";
import RightArrow from "../RightArrow/right-arrow";
function FoodAdCard()
{
  return(
    <div className="ad-card">
      <Dots />
      <AdContent />
      <Bend />
      <CircleButton />
      <RightArrow />
   </div>
   );
}
export default FoodAdCard;