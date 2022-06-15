import "./project-detail.css";

function ProjectDetails()
{
    return(
        <div className="project-details-card">
            <div className="content-holder">
                <div className="project-details-content">
                    <div className="project-header">Project Details</div>
                    <div className="projector-name">Laura cowe</div>
                    <div className="projector-position">UX/UI Designer</div>
                    <div className="project-progress">Projects Progress</div>
                </div>
                <div className="percentage-progress">
                    <div className="percentage">75%</div>
                    <div className="progress-bar">
                    <div className="full">
                        <div className="half"></div>
                    </div>
                    </div>
                </div>
                <div className="navigation-tap">
                 <div className="dots">
                   <span className="dot1"></span>
                    <div className="space"></div>
                  <span className="dot2"></span>
                   <div className="space"></div>
                  <span className="dot2"></span>
                 </div>
               </div>
            </div>
        </div>
    );
}
export default ProjectDetails;