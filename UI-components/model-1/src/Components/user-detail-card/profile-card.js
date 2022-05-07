import "./profile-card.css";
function ProfileCard(props)
{
    return(
        <>
        <div className="profile-holder">
            <div className="profile-card">
                <div className="header">
            <h1>{props.userData.name}</h1>
            <p>{props.userData.position}</p>
            </div>
            <div className="works-holder">
                <div className="total-projects-count">
                    <p>{props.userData.projects}</p>
                </div>
            
                <div className="total-revenue-count">
                    <p>{props.userData.revenue}</p>
                </div>
                <div className="title1">
                    <p>{props.userData.title1}</p>
                </div>
                <div className="title2">
                    <p>{props.userData.title2}</p>
                </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default ProfileCard;