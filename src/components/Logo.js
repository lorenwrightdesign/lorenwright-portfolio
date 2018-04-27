import React from 'react';

class Logo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            introText: null
        };

        this.showIntroText = this.showIntroText.bind(this);
        this.hideIntroText = this.hideIntroText.bind(this);
    }

    showIntroText(event) {
        if(document.getElementById('logo').classList.contains('animationComplete')) {
            this.setState({
                introText: 1
            });
        }
    }

    hideIntroText(event) {
        if(document.getElementById('logo').classList.contains('animationComplete')) {
            this.setState({
                introText: null
            });
        }
    }

    render() {
        setTimeout(function() {
            document.getElementById('logo').classList.add('animationComplete');
        }, 6000);

        return (
            <div className="logo" id="logo">
                <div className="logo-container" onMouseEnter={this.showIntroText} onMouseLeave={this.hideIntroText}>
                    <svg version="1.1" x="0px" y="0px" viewBox="0 0 336.7 378">
                    <g id="backgroundPolygons">
                        <polygon id="poly1" className="st0" points="233.7,143 75.5,210.8 177.9,316.3 	"/>
                        <polygon id="poly2" className="st1" points="233.7,143 177.9,316.3 251.1,280.1 	"/>
                        <path id="poly3" className="st2" d="M87.7,41.2L17.3,81.8C6.6,88,0,99.5,0,111.9v27.5l75.5,71.4L87.7,41.2z"/>
                        <path id="poly4" className="st3" d="M257.2,45.9L185.7,4.6C180.3,1.5,174.3,0,168.3,0s-12,1.5-17.3,4.6l-13.3,7.7l96,130.7L257.2,45.9z"/>
                        <polygon id="poly5" className="st2" points="251.1,280.1 336.7,224.4 336.7,182.8 233.7,143 	"/>
                        <polygon id="poly6" className="st4" points="177.9,316.3 236.4,344.1 275.2,321.7 251.1,280.1 	"/>
                        <path id="poly7" className="st4" d="M75.5,210.8L0,252.3v13.9c0,12.4,6.6,23.9,17.3,30.1l12.4,7.1l148.2,12.9L75.5,210.8z"/>
                        <polygon id="poly8" className="st3" points="0,199.1 0,252.3 75.5,210.8 	"/>
                        <polygon id="poly9" className="st3" points="29.7,303.4 132,362.4 177.9,316.3 	"/>
                        <path id="poly10" className="st2" d="M132,362.4l19,11c5.4,3.1,11.4,4.6,17.3,4.6s12-1.5,17.4-4.6l50.8-29.3l-58.5-27.8L132,362.4z"/>
                        <path id="poly11" className="st5" d="M275.2,321.7l44.2-25.5c10.7-6.2,17.3-17.7,17.3-30.1v-41.7l-85.6,55.7L275.2,321.7z"/>
                        <polygon id="poly12" className="st0" points="257.2,45.9 233.7,143 336.7,182.8 336.7,136.5 290.4,65.1 	"/>
                        <polygon id="poly13" className="st1" points="233.7,143 137.7,12.3 87.7,41.2 75.5,210.8 	"/>
                        <polygon id="poly14" className="st5" points="0,139.4 0,199.1 75.5,210.8 	"/>
                        <path id="poly15" className="st5" d="M319.3,81.8l-28.9-16.7l46.3,71.3v-24.6C336.7,99.5,330.1,88,319.3,81.8z"/>
                    </g>
                    <g id="logo-white">
                        <path id="l" className="st6" d="M142.6,182.9c-0.9,1.6-2,3.1-3.5,4.4c-3.3,3-7.1,4.5-11.1,4.5c-4.5,0-8.4-1.6-11.6-4.7
                            c-3.2-3.1-5-7-5.2-11.8V94.9h-47v81.8c0,8.4,1.7,16.3,5,23.8c3.3,7.5,7.9,14.1,13.6,19.7c5.7,5.6,12.5,10.1,20.3,13.4
                            c7.8,3.3,16.1,5,24.9,5c7.2,0,14.2-1.1,21-3.4c5.9-2,11.4-4.9,16.5-8.7c-11.3-12.1-17.3-25.2-20.3-34.5
                            C144,188.7,143.2,185.6,142.6,182.9z"/>
                        <path id="w" className="st6" d="M224.8,94.9v80.7c0,4.5-1.6,8.4-4.8,11.5c-3.2,3.1-7.2,4.7-12,4.7c-4.1,0-7.8-1.4-11.3-4.1
                            c-3.5-2.7-5.2-6.7-5.2-12v-33.3h0c-0.2-12.8-10.6-23.1-23.5-23.1c-12.8,0-23.2,10.3-23.5,23.1h0v30.5l0.1,0v0
                            c0,0.4,1.9,30.9,26.8,54.7c10.5,8.4,22.8,11.3,36.6,11.3c8.4,0,16.4-1.6,24.2-4.8c7.8-3.2,14.6-7.6,20.4-13.1
                            c5.9-5.5,10.5-12.1,14-19.7c3.5-7.6,5.2-15.8,5.2-24.4V94.9H224.8z"/>
                        <g id="design">
                            <path className="st6" d="M113.5,271.2c0.1,5.6-3.3,11.3-11.1,11.3c-2.7,0-6,0-8.8,0v-22.3c2.7,0,6,0,8.8,0
                                C110,260.2,113.4,265.7,113.5,271.2z M97.8,278.5h4.6c5.1,0,7.1-3.7,7-7.3c-0.1-3.5-2.1-6.9-7-6.9h-4.6V278.5z"/>
                            <path className="st6" d="M139.8,282.5h-16.7c0-7.4,0-14.9,0-22.3h16.7v4.1h-12.5v5.1h12.1v3.9h-12.1v5h12.5V282.5z"/>
                            <path className="st6" d="M164.3,265.6c-0.8-1.3-2.9-2.5-5.3-2.5c-3.1,0-4.6,1.3-4.6,3c0,1.9,2.3,2.5,5,2.8c4.6,0.6,9,1.8,9,7.1
                                c0,5-4.4,7.1-9.4,7.1c-4.6,0-8.1-1.4-9.7-5.5l3.5-1.8c1,2.5,3.6,3.5,6.3,3.5c2.6,0,5.1-0.9,5.1-3.3c0-2.1-2.2-3-5.2-3.3
                                c-4.6-0.5-8.8-1.8-8.8-6.8c0-4.6,4.5-6.5,8.6-6.5c3.5,0,7.1,1,8.8,4.4L164.3,265.6z"/>
                            <path className="st6" d="M178.5,282.5v-22.3h4.2v22.3H178.5z"/>
                            <path className="st6" d="M210,265.7c-1.5-1.4-3.7-2.2-5.7-2.2c-4.8,0-7.7,3.6-7.7,8.2c0,3.7,2.1,7.5,7.7,7.5c1.8,0,3.3-0.4,5-1.8v-3.9
                                h-5.7v-3.8h9.6v9.4c-2.2,2.5-5,4-8.9,4c-8.4,0-11.8-5.5-11.8-11.4c0-6.3,3.9-12.1,11.8-12.1c3,0,6,1.1,8.3,3.4L210,265.7z"/>
                            <path className="st6" d="M238.2,260.2h4.2v22.3h-2.6v0L228,267.5v15h-4.2v-22.3h3.4l10.9,13.8V260.2z"/>
                        </g>
                        <path id="Border" className="st6" d="M168,16.8c5.5,0,10.9,1.4,15.8,4.2l121.7,70.3c9.8,5.6,15.8,16.1,15.8,27.4v140.6
                            c0,11.3-6,21.7-15.8,27.4L183.8,357c-4.9,2.8-10.3,4.2-15.8,4.2c-5.5,0-10.9-1.4-15.8-4.2L30.5,286.7c-9.8-5.6-15.8-16.1-15.8-27.4
                            V118.7c0-11.3,6-21.7,15.8-27.4l121.7-70.3C157.1,18.3,162.5,16.8,168,16.8 M168,9.8c-6.8,0-13.4,1.8-19.3,5.2L27,85.3
                            C15,92.2,7.7,105,7.7,118.7v140.6c0,13.7,7.4,26.6,19.3,33.4L148.7,363c5.9,3.4,12.5,5.2,19.3,5.2c6.8,0,13.4-1.8,19.3-5.2
                            L309,292.7c11.9-6.9,19.3-19.7,19.3-33.4V118.7c0-13.7-7.4-26.6-19.3-33.4L187.3,15C181.4,11.6,174.8,9.8,168,9.8L168,9.8z"/>
                    </g>
                    </svg>
                </div>
            </div>
        );
    }
}

module.exports = Logo;