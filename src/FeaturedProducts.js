import React from 'react'
import i1 from './images/1.jpg';
import i2 from './images/2.jpg';
import i3 from './images/3.jpg';
import i4 from './images/4.jpg';

import './custom.css';

const FeaturedProducts = () => {
    return (
        <>
        {/* <div> */}

     
           <div className="col-3">
                <div row>
                    <img src={i1} className="card-img-top" style={{ maxWidth: '100%' }} />
                </div>
                <div className="row mt-3">
                    <i className="my-auto">Essential for Women</i>
                </div>
                <div className="row">
                    <a  className="my-auto">Multivitamin 18+</a>
                </div>
                <div className="row .subs mt-4">
                    <p className="subs"> The clinical-backed multivitamin, reimagined for women 18+.</p>
               
                </div>

            </div> 
            <div className="col-3">
                <div row>
                    <img src={i2} className="card-img-top" style={{ maxWidth: '100%' }} />
                </div>
                <div className="row mt-3">
                    <i className="my-auto">Essential for Women</i>
                </div>
                <div className="row">
                    <a  className="my-auto">Prenatal Multivitamin</a>
                </div>
                <div className="row .subs mt-4">
                    <p className="subs"> The prenatal multivitamin for thinking, trying, and when it's time.</p>
               
                </div>
            </div>
            <div className="col-3">
                <div row>
                    <img src={i3} className="card-img-top" style={{ maxWidth: '100%' }} />
                </div>
                <div className="row mt-3">
                    <i className="my-auto">Essential Protein</i>
                </div>
                <div className="row">
                    <a  className="my-auto">Daily Shake 18+</a>
                </div>
                <div className="row .subs mt-4">
                    <p className="subs"> 
The reimagined plant-based protein for adults 18-49.</p>
               
                </div>
            </div>
            <div className="col-3">
                <div row>
                    <img src={i4} className="card-img-top" style={{ maxWidth: '100%' }} />
                </div>
                <div className="row mt-3">
                    <i className="my-auto">Essential for Men</i>
                </div>
                <div className="row">
                    <a  className="my-auto">Multivitamin 18+</a>
                </div>
                <div className="row .subs mt-4">
                    <p className="subs"> 

Formulated for men 18-49 to help fill nutrient gaps in their diet.*</p>
               
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default FeaturedProducts
