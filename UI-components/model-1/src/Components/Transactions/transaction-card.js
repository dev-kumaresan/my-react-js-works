import "./transaction-card.css";

function TransactionCard(props)
{
   return(
        <div className="transaction-card">
         <div className="content">
            <div className="data">
                <div className="td-title">Transaction Detail</div>
                <div className="name">Hi Laura</div>
                <div className="balance">{props.Transaction.avl_balance}</div>
                <div className="balance-title">Available Balance</div>
            </div>
            <div className="profile-details">
                <div className="img-bg">
                  <img className="img" src={process.env.PUBLIC_URL+"me.jpg"} height="19" width="19" />
                </div>
                <div className="pn">{props.Transaction.credit_card}</div>
            </div>
            <div className="profile-images">
              <div className="circled-arrow">
                <div className="circle1"></div>
                <div className="long-right-arrow"><span style={{color : "#fff"}}>&#10230;</span></div>
              </div>
              <div className="images">
              <div className="image1">
              <img className="img1" src={process.env.PUBLIC_URL+"me.jpg"} height="19" width="19" />
              </div>
              <div className="image2">
              <img className="img2" src={process.env.PUBLIC_URL+"me.jpg"} height="19" width="19" />
              </div>
              <div className="image3">
              <img className="img3" src={process.env.PUBLIC_URL+"me.jpg"} height="19" width="19" />
              </div>
              <div className="image4">
              <img className="img4" src={process.env.PUBLIC_URL+"me.jpg"} height="19" width="19" />
              </div>
              </div>
            </div>
            <div className="send-button">
                <div className="send-btn"></div>
                <div className="send-b1c">Send</div>
            </div>
         </div>
        </div>
   );
}
export default TransactionCard; 