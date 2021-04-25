import React from 'react'

function Section(props) {
    return (
        <section id="section">
             <div className="section centre">
            <div className="section-container">
                <div className="section-card-content">
                    <h1>{props.title}</h1>
                    <h6>{props.story}</h6>
                </div>
                <div className="section-card-img">
                    <img src={props.image} alt=""/>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Section
