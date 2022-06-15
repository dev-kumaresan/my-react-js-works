import "./dashboard.css";
function Dashboard()
{
    return(
            <div className="dashboard">
                <div className="content">
                 <div className="dashboard-content">
                    <div className="folder">
                        <div className="folder-bg"></div>
                        <div className="folder-icon">
                        <i class="fa fa-folder-open-o" style={{color : "#fff", fontWeight : "400"}}></i>
                        </div>
                    </div>
                    <div className="dashboard-title">Dashboard</div>
                 </div>
                 <div className="dashboard-menus">
                     <div className="email-menu">
                         <div className="email-icon"><i class="fa fa-envelope" aria-hidden="true" style={{color : "#534cbc"}}></i></div>
                          <div className="email-text">Email</div>
                     </div>
                     <div className="calendar-menu">
                         <div className="calendar-icon"><i class="fa fa-calendar" style={{color : "#534cbc"}}></i></div>
                          <div className="calendar-text">Calender</div>
                     </div>
                     <div className="graph-menu">
                         <div className="graph-icon"><i class="fa fa-bar-chart-o" style={{color : "#534cbc"}}></i></div>
                          <div className="graph-text">Graph</div>
                     </div>
                     <div className="forms-menu">
                         <div className="forms-icon"><i class="fa fa-file-text-o" style={{color : "#534cbc"}}></i></div>
                          <div className="forms-text">Forms</div>
                     </div>
                 </div>
                </div>
            </div>
         );
}
export default Dashboard;