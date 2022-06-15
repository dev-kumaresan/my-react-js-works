import "./dear-client.css";
function DearClient()
{
       return( 
              <div className="dear-card">
                <div className="content-holder">
                    <div className="dear-client-logo">
                     <img className="dc-logo" src={process.env.PUBLIC_URL+"DearClientLogo.png"} height="110" width="80" />
                    </div>
                    <div className="dear-client-content">
                     <div className="dc-heading">Dear Client</div>
                     <div className="dc-para">
                      <p>Join our online community. It helps In managing your projects</p>
                     </div>
                    </div>
                    <div className="down-arrow">
                     <i class="arrow down"></i>
                    </div>
                </div>
               </div>
       );
}
export default DearClient;