import "./revenue-status.css";
function RevenueStatus(props)
{
    return(
        <div className="revenue-card">
            <div className="logo">
                <div className="circle"></div>
                <div className="dollar">$</div>
            </div>
            <div className="total-revenue">
                <div className="title">Total Revenue</div>
                <div className="revenue">{props.Revenue.revenue}</div>
            </div>
            <div className="progress-bar">
            <div className="full">
                <div className="percentage"></div>
            </div>
           </div>
        </div>
    );
}
export default RevenueStatus;