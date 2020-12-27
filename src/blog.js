import React, { Component } from 'react';
export default class Blog extends Component {
    render() {
        return (
            <section id="about">
                <div classsName="row">
                  
                    <div className="nine columns main-col">
                        <h2>Hi there...</h2>
                        <p>I am Sarah Mukuti. A computer Science student who believes in solving modern problems using technology.<br></br>
                            I am particularly intrigued by how things look thus I tend to lean more on improving my front-end skills.
                            I also love exploring the world of data science.
                        </p>
                    </div>
                    <div class="three columns">
                        <img className="profile-pic" src="./laptop.jpg" alt=""/> 
                    </div>
                </div>
            </section>
        );
    }
}