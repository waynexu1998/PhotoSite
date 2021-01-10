import './Home.css'
import './grid.css'
import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect } from 'react';
import { render } from '@testing-library/react';

class Home extends React.Component {

    componentDidMount() {
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".main_Div"),
            smooth: true,
            repeat: true
        });
        setTimeout(() => {
            scroll.update();
        }, 300);
    }
    
    
    render() {
        function onlick() {
            console.log("123")
        }

        return (
            <div data-scroll-container className="main_Div">
                <div className="horizontal_1"></div>
                <div className="horizontal_2"></div>
                <div className="horizontal_3"></div>
                <div className="horizontal_4"></div>
                <div className="vertical_1"></div>
                <div className="vertical_2"></div>
                <div className="vertical_3"></div>
                <div className="vertical_4"></div>
    
                <div className="left_Div">
    
                    <div className="title_Div">
                        <h1 className="main_Heading">
                            W<span className="title_X">X</span>
                        </h1>
                        <div className="rect"></div>
                    </div>
    
                    <div className="menu_Div">
                        <div className="menu">
                            <h2 onClick={onlick}>about me</h2>
                            <h2>contact</h2>
                            <h2>shop prints</h2>
                        </div>
                    </div>
    
                    <div className="link_Div">
                        <div className="menu">
                            <h3>instagram</h3>
                            <h3>linkedin</h3>
                            <h3>youtube</h3>
                            <h3>dribble</h3>
                
                        </div>
                        <div className="projects">
                            <h2> + landscape</h2>
                            <h2> + portraits</h2>
                            <h2> + on street</h2>
                            <h2> + motion</h2>
                            <h2 className="unavailable"> + ffuturee</h2>
                            <h2 className="unavailable"> + ffuturee</h2>
                            <h2 className="unavailable"> + ffuturee</h2>
                        </div>
                    </div>
                </div>
                <div data-scroll-section className="right_Div">
                    <div className="picture">
                        <img src="13.jpg" alt="1" className="i_1"></img>
                        <img src="14.jpg" alt="2" className="i_1"></img>
                    </div>
                </div>
            </div >
        );
    }

    
}

export default Home;