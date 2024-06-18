import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import culfest from '../assets/ExperienceImages/culfest.png';
import codophile from '../assets/ExperienceImages/codophile.png';
import ojass from '../assets/ExperienceImages/ojass.png';
import btbs from '../assets/ExperienceImages/btbs.png';

export default function Experience() {
  return (
    <div className='flex justify-center'>
      <div className='container lg:w-3/4'>
        <div className='text-center mt-40 text-gray-200 text-2xl leading-10'>
          what i have done so far <br />
          <span className='text-6xl font-bold'>Work Experience.</span>
        </div>
        <div className='mt-7'>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2023 - present"
              iconStyle={{ background: '#111111', color: '#fff', padding: "4px" }}
              icon={<img src={btbs} alt="myLogo" />}
            >
              <h3 className="vertical-timeline-element-title">Creative Head</h3>
              <h4 className="vertical-timeline-element-subtitle">BTBS</h4>
              <p>
                UI/UX, Poster Designing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023 - 2024"
              dateClassName="text-gray-200"
              iconStyle={{ background: '#111111', color: '#fff', padding: "4px" }}
              icon={<img src={ojass} alt="myLogo" />}
            >
              <h3 className="vertical-timeline-element-title">Hackathon Winner</h3>
              <h4 className="vertical-timeline-element-subtitle">OJASS 2K23</h4>
              <p>
                Won a OJASS WEB-D hackathon in
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023 - present"
              dateClassName="text-gray-200"
              iconStyle={{ background: '#111111', color: '#fff', padding: "4px" }}
              icon={<img src={codophile} alt="myLogo" />}
            >
              <h3 className="vertical-timeline-element-title">Web Devloper</h3>
              <h4 className="vertical-timeline-element-subtitle">Cdodphile.in</h4>
              <p>
                A easy to use CSS utality software
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023 - 2024"
              // contentStyle={{ color: '#fff' }}
              dateClassName="text-gray-200"
              iconStyle={{ background: '#111111', color: '#fff', padding: "4px" }}
              icon={<img src={culfest} alt="myLogo" />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">CULFEST 2023</h4>
              <p>
                designed website for CULFEST 2023 for NIT JSR
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>

        </div>
      </div>
    </div>
  )
}
