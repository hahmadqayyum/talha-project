import React, { useState, useEffect } from 'react'
import './Stats.css'
import './nicepage.css'
import './style.css'
import axios from 'axios'
import CountUp from 'react-countup'
export default function Stats() {

    const [latest, setLatest] = useState([]);
    // const [isfetching, setFetching] = useState(false)

    useEffect(() => {
        axios
            .get("https://corona.lmao.ninja/v2/all")
            .then(res => {
                // setFetching(true)
                setLatest(res.data);
            })
            .catch(err => {
                console.log(err);

            });
    }, []);


    return (
        <div>

            <body className="u-body u-grey-10">
                {/* <NavBar /> */}

                <section className="u-align-center u-clearfix u-section-1" id="sec-9870">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-expanded-width-xs u-list u-list-1">
                            <div className="u-repeater u-repeater-1" style={{ display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "end" }}>
                                <div className="u-container-style u-list-item u-repeater-item" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                                        <div className="u-align-center u-container-style u-custom-color-1 u-group u-radius-15 u-shape-round u-group-4">
                                            <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-8">
                                                <h3 className="u-align-center u-text u-text-default u-text-4">Confirmed</h3>
                                                <br></br>
                                                <div>
                                                    <h4 className="u-align-center u-text u-text-default u-text-4" ><CountUp start={0} end={latest.cases} duration={2.3} separator="," /></h4>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-container-style u-list-item u-repeater-item" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                                        <div className="u-align-center u-container-style u-custom-color-1 u-group u-radius-15 u-shape-round u-group-4">
                                            <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-8">
                                                <h3 className="u-align-center u-text u-text-default u-text-4">Active</h3>
                                                <br></br>
                                                <h2 className="u-align-center u-text u-text-default u-text-4"><CountUp start={0} end={latest.active} duration={2.3} separator="," /></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-container-style u-list-item u-repeater-item" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                                        <div className="u-align-center u-container-style u-custom-color-1 u-group u-radius-15 u-shape-round u-group-4">
                                            <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-8">
                                                <h3 className="u-align-center u-text u-text-default u-text-4">Recovered</h3>
                                                <br></br>
                                                <h2 className="u-align-center u-text u-text-default u-text-4"><CountUp start={0} end={latest.recovered} duration={2.3} separator="," /></h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-container-style u-list-item u-repeater-item" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                                        <div className="u-align-center u-container-style u-custom-color-1 u-group u-radius-15 u-shape-round u-group-4">
                                            <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-8">
                                                <h3 className="u-align-center u-text u-text-default u-text-4"  >Deaths</h3>
                                                <br></br>
                                                <h2 className="u-align-center u-text u-text-default u-text-4"><CountUp start={0} end={latest.deaths} duration={2.3} separator="," /></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                            <div className="u-layout">
                                <div className="u-layout-row">
                                    <div className="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                                        <div className="u-container-layout u-container-layout-9">
                                            <ul className="u-custom-list u-text u-text-5">
                                                <li>
                                                    <div className="u-list-icon u-list-icon-1">
                                                        <svg className="u-svg-content" viewBox="0 0 512.008 512.008" id="svg-5422"><path d="m507.904 245.317-163.296-181.408c-2.848-3.168-6.848-5.056-11.072-5.28-4.352-.288-8.384 1.248-11.552 4.096l-47.552 42.784c-6.56 5.92-7.072 16.032-1.184 22.592l71.904 79.904h-329.152c-8.832 0-16 7.168-16 16v64c0 8.832 7.168 16 16 16h329.152l-71.904 79.872c-5.92 6.592-5.376 16.672 1.184 22.624l47.552 42.816c3.072 2.752 6.912 4.096 10.72 4.096 4.384 0 8.704-1.792 11.904-5.28l163.296-181.408c5.472-6.08 5.472-15.328 0-21.408z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <span >The Dounut Graph shows Data of Covid, it split into Continents with Countries - shows which continent has greater impact</span>
                                                </li>
                                                <li>
                                                    <div className="u-list-icon u-list-icon-2">
                                                        <svg className="u-svg-content" viewBox="0 0 512.008 512.008" id="svg-5422"><path d="m507.904 245.317-163.296-181.408c-2.848-3.168-6.848-5.056-11.072-5.28-4.352-.288-8.384 1.248-11.552 4.096l-47.552 42.784c-6.56 5.92-7.072 16.032-1.184 22.592l71.904 79.904h-329.152c-8.832 0-16 7.168-16 16v64c0 8.832 7.168 16 16 16h329.152l-71.904 79.872c-5.92 6.592-5.376 16.672 1.184 22.624l47.552 42.816c3.072 2.752 6.912 4.096 10.72 4.096 4.384 0 8.704-1.792 11.904-5.28l163.296-181.408c5.472-6.08 5.472-15.328 0-21.408z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <a href="#v"> <span >Searchable line chart for vaccination data
                                                    </span></a>
                                                </li>
                                                <li>
                                                    <div className="u-list-icon u-list-icon-3">
                                                        <svg className="u-svg-content" viewBox="0 0 512.008 512.008" id="svg-5422"><path d="m507.904 245.317-163.296-181.408c-2.848-3.168-6.848-5.056-11.072-5.28-4.352-.288-8.384 1.248-11.552 4.096l-47.552 42.784c-6.56 5.92-7.072 16.032-1.184 22.592l71.904 79.904h-329.152c-8.832 0-16 7.168-16 16v64c0 8.832 7.168 16 16 16h329.152l-71.904 79.872c-5.92 6.592-5.376 16.672 1.184 22.624l47.552 42.816c3.072 2.752 6.912 4.096 10.72 4.096 4.384 0 8.704-1.792 11.904-5.28l163.296-181.408c5.472-6.08 5.472-15.328 0-21.408z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <a href="#c"> <span  >Searchable line chart for key metrics</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                                        <div className="u-container-layout u-container-layout-10">
                                            <div class="flourish-embed flourish-chart" data-src="story/230085">
                                                {/* <script src="https://public.flourish.studio/resources/embed.js"></script> */}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="u-clearfix u-section-2" id="sec-ef58">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-1">
                            <div id="v" className="u-container-layout u-container-layout-1">

                                <div class="flourish-embed flourish-chart" data-src="story/767666">
                                    {/* <script src="https://public.flourish.studio/resources/embed.js"></script> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="u-clearfix u-section-3" id="sec-d2f1">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-1">
                            <div id="c" className="u-container-layout u-container-layout-1">
                                <div class="flourish-embed flourish-chart" data-src="story/230110">
                                    {/* <script src="https://public.flourish.studio/resources/embed.js"></script> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </body>
        </div >
    )

}