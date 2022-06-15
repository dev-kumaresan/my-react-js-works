import "./hotel-card.css";

function HotelCard()
{
    return(
        <div className="Hotel-card">
        <div className="content-holder">
            <div className="Hotel-title">Hotel</div>
            <div className="Hotel-sub-title">Dashboard</div>
            <div className="seen-by">Seen by</div>
            <div className="avatars">
                <div className="avatar-4">
                    <div className="circle4">
                        <img className="img4" src={process.env.PUBLIC_URL+"avatar.png"} height="19" width="19" />
                    </div>
                </div>
                <div className="avatar-3">
                    <div className="circle3">
                    <img className="img3" src={process.env.PUBLIC_URL+"avatar.png"} height="19" width="19" />
                    </div>
                </div>
                <div className="avatar-2">
                    <div className="circle2">
                    <img className="img2" src={process.env.PUBLIC_URL+"avatar.png"} height="19" width="19" />
                    </div>
                </div>
            </div>  
            <div className="Hotel-buttons-holder">
                <div className="Hotel-button1-holder">
                    <div className="button1"></div>
                    <div className="b1c">Tour</div>
                </div>
                <div className="Hotel-button2-holder">
                    <div className="button2"></div>
                    <div className="b2c">Trip</div>
                </div>
                <div className="Hotel-button3-holder">
                    <div className="button3"></div>
                    <div className="b3c">Transport</div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default HotelCard;