import React from 'react'
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './images/Category-Multivitamin.jpg';
import img2 from './images/protiens.jpg';
import img3 from './images/pregnency.jpg';
import img4 from './images/Category-Bundles.jpg';

const Cards = () => {
    return (
        <>
            <div className="col-3 m-2">
                <div className="cont">
                    <img src={img1} className="card-img-top zoom" style={{ maxWidth: '100%' }} />
                </div>
                <div className="mt-2 bg">
                    <p className="text-center my-auto mb-2">Shop Multivitamin</p>
                </div>
            </div>
            <div className="col-3 m-2">
                <div className="cont">
                    <img src={img2} className="card-img-top zoom" style={{ maxWidth: '100%' }} />
                </div>
                <div className="mt-2 bg">
                    <p className="text-center my-auto mb-2">Shop Protein</p>
                </div>
            </div>
            <div className="col-3 m-2">
                <div className="cont">
                    <img src={img3} className="card-img-top zoom" style={{ maxWidth: '100%' }} />
                </div>
                <div className="mt-2 bg">
                    <p className="text-center my-auto mb-2">Shop Pregnancy</p>
                </div>
            </div>
            <div className="col-3 m-2">
                <div className="cont">
                    <img src={img4} className="card-img-top zoom" style={{ maxWidth: '100%' }} />
                </div>
                <div className="mt-2 bg">
                    <p className="text-center my-auto mb-2">Shop Bundles</p>
                </div>
            </div>
        </>
    )
}

export default Cards
