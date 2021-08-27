import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import home from './images/home.jpg';
import './home.css';

const Home = () => {
    return (
        <div>
            <div className="container-fluid main" style={{ position: 'relative', textAlign: 'center' }}>
                <img className="img-responsive" src={home} style={{ maxWidth: '100%', position: 'relative' }} />
                <div className="centered">
                    <div className="col-12">
                        <div className="row">
                            <h2>The Future</h2>
                        </div>
                    </div>
                </div>
                <div className="centered2">
                    <h2>of health</h2>
                </div>
                <div className="centered3">
                <i><h2>— is clear.</h2></i>
                </div>
                <div className="centered4">
                <input type="button" value="Shop All"/>
                </div>
            </div>

        </div>
    )
}

export default Home
