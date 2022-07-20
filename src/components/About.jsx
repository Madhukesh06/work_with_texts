import React from 'react'
import { useState } from 'react'

export default function About(props) {

    const [btn, setBtn] = useState("Toggle To Darkmode")

    const [theme, setTheme] = useState({
        color: "black",
        backgroundColor: "white",
        bordere: "1px solid white"

    })

    let toggleTheme = () => {
        if (btn === "Toggle To Darkmode") {
            setBtn("Toggle To Lightmode")
            setTheme({
                color: "white",
                backgroundColor: "black",
                bordere: "1px solid white"
            })
        }
        else {
            setBtn("Toggle To Darkmode")
            setTheme({
                color: "black",
                backgroundColor: "white",
                bordere: "1px solid white"
            })
        }

    }

    return (
        <div>
            <hr />
            <h1 style={{ color: `${props.mode === "dark" ? "white" : "black"}` }}>About us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={theme}  >
                    <h2 className="accordion-header" id="headingOne" >
                        <button style={theme} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={theme}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={theme}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body ">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" onClick={toggleTheme} className="btn btn-dark my-3">{btn}</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div >
    )
}
