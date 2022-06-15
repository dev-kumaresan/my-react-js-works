import "./travel-card.css";
function TravelCard()
{
    return(
            <div className="travel-card">
                <div className="content-holder">
                    <div className="travel-title">Travel</div>
                    <div className="travel-sub-title">Mobile Application</div>
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
                        <div className="avatar-1">
                            <div className="circle1">
                            <img className="img1" src={process.env.PUBLIC_URL+"avatar.png"} height="19" width="19" />
                            </div>
                        </div>
                    </div>  
                    <div className="travel-buttons-holder">
                        <div className="travel-button1-holder">
                            <div className="button1"></div>
                            <div className="b1c">Tour</div>
                        </div>
                        <div className="travel-button2-holder">
                            <div className="button2"></div>
                            <div className="b2c">Trip</div>
                        </div>
                        <div className="travel-button3-holder">
                            <div className="button3"></div>
                            <div className="b3c">Transport</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default TravelCard;