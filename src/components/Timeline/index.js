import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from "../../utilities/timelineElements";
import "./index.scss"
import { ReactComponent as WorkIcon } from "../../assets/images/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/images/school.svg";
import "../../utilities/variables.scss"
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";


const Timeline = () => {
    let workIconStyle = { background: "#fb0357" };
    let schoolIconStyle = { background: "#f843fd" };
    const [letterClass, setLetterClass] = useState('text-animate');

    const refForm = useRef();
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container timeline-page">
                <div className="text-zone">

                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's', ' ', '&', ' ', 'E', 'x', 'p', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                    <VerticalTimeline>
                        {
                            timelineElements.map((element) => {
                                const isWorkIcon = element.icon === "work";
                                return (
                                    <VerticalTimelineElement
                                        key={element.key}
                                        date={element.date}
                                        dateClassName="date"
                                        iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                                        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                                    >
                                        <h3 className="vertical-timeline-element-title">
                                            {element.title}
                                        </h3>
                                        <h5 className="vertical-timeline-element-subtitle">
                                            {element.location}
                                        </h5>
                                        <p id="description">{element.description}</p>
                                    </VerticalTimelineElement>
                                )

                            })
                        }

                    </VerticalTimeline>
                </div>
            </div>
            <Loader type="ball-spin-fade-loader"/>
        </>
    )
};

export default Timeline;