import React from 'react'
import "./Edu.css";
function Edu() {
  return (
    <div className="edu-holder">
    <div className="edu-header">
        <div className="head">EDUCATION -</div>
    </div>
    <div class="uk-container uk-padding">
    <div class="uk-timeline">
        <div class="uk-timeline-item">
            <div class="uk-timeline-icon">
                <span class="uk-badge"><span uk-icon="check"></span></span>
            </div>
            <div class="uk-timeline-content">
                <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <h3 class="uk-card-title"><time>2019 - 2022</time></h3>
                            <span class="uk-label uk-label-success uk-margin-auto-left">Master of Computer Applications</span>
                        </div>
                    </div>
                    <div class="uk-card-body">
											PSG College of Arts and Science, Coimbatore - <b>86%</b>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-timeline-item">
            <div class="uk-timeline-icon">
                <span class="uk-badge"><span uk-icon="check"></span></span>
            </div>
            <div class="uk-timeline-content">
                <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <h3 class="uk-card-title"><time datetime="2020-07-07">2016 - 2019</time></h3>
                            <span class="uk-label uk-label-warning uk-margin-auto-left">B.SC Computer science</span>
                        </div>
                    </div>
                    <div class="uk-card-body">
											St.Joseph's College, Tiruchirapalli - <b>73%</b>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-timeline-item">
            <div class="uk-timeline-icon">
                <span class="uk-badge"><span uk-icon="check"></span></span>
            </div>
            <div class="uk-timeline-content">
                <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <h3 class="uk-card-title"><time datetime="2020-07-07">2014 - 2016</time></h3>
                            <span class="uk-label uk-label-warning uk-margin-auto-left">12th Higher Education</span>
                        </div>
                    </div>
                    <div class="uk-card-body">  
											Dr.J.C.K School, Peravurani, Thanjavur(Dt) - <b>73%</b>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-timeline-item">
            <div class="uk-timeline-icon">
                <span class="uk-badge"><span uk-icon="check"></span></span>
            </div>
            <div class="uk-timeline-content">
                <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <h3 class="uk-card-title"><time datetime="2020-07-07">2013 - 2014</time></h3>
                            <span class="uk-label uk-label-warning uk-margin-auto-left">10th Secondary Education</span>
                        </div>
                    </div>
                    <div class="uk-card-body">  
						Modern Matriculation School, Alangudi(Po), Pudukkottai(Dt) - <b>79%</b>
                    </div>
                </div>
            </div>
        </div>

				
        </div>
    </div>
</div>
  )
}

export default Edu;