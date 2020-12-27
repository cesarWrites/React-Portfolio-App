import React, { Component } from 'react';
export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                         Contact links
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eighth columns footer-widgets">
                        <div className="widgets">
                            <h4><a href="https://www.linkedin.com/in/sarah-mukuti-10768b184/">LinkedIn</a></h4>
                            <h4><a href="https://github.com/cesarWrites">Github</a></h4>
                            <h4><a href="https://web.facebook.com/sarah.hasar.24">Facebook</a></h4>
                            <h4><a href="">Twitter</a></h4>
                            <h4><a href="gmail.com">sarahmukutic@gmail.com</a></h4>
                        </div>
                    </aside>
                </div>
            </section>
        )
    }
}