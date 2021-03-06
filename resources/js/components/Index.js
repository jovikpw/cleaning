import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header, Footer, Home, About } from './';
export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Home/>
                <About/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Landing Component</div>
                        
                            <div className="card-body">I'm an Landing component!</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
