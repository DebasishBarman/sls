import React from 'react'
import './custom.css';
import FeaturedProducts from './FeaturedProducts';
import pill from './images/home-feat-dyson.jpg';
import world from './images/Home-Map.jpg';


const Custom = () => {
    return (
        <div className="row col-12">
            <div className="d-flex justify-items-center" style={{ position: 'relative' }}>
                
            </div>
            <div className="custom mt-4">
            </div>
            <div className="row col-12 mt-4">

                <div className="col-6">
                    <div className="row offset-2">
                        <div className="col-6 y">
                            <img className="mh-100" src={pill} style={{ maxHeight: '70%', zIndex: '1', position: 'relative', height: '80vh' }} />
                        </div>
                    </div>
                </div>
                <div className="col-6  my-auto">
                    <div className="d-flex align-items-center offset-2">
                        <div className="col ">
                            <div className="row">
                                <h2> We are not about</h2>
                            </div>
                            <div className="row"><h2>pseudoscience and half-</h2></div>
                            <div className="row"><h2>truths</h2></div>

                        </div>
                    </div>
                    <div className="d-flex align-items-center offset-2 mt-4">
                        <div className="col-10">
                            <p>From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need.</p>

                        </div>
                    </div>
                    <div className="d-flex align-items-center offset-2 mt-4">
                        <div className="col-10">
                            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', color: 'rgb(20, 43, 111)', fontWeight: 'bold', borderBottom: '2px solid rgb(20, 43, 111)', margin: '2px' }}>Who We Are</span>

                        </div>
                    </div>


                </div>

            </div>
            {/* Bottom div */}
            <div className="row col-12 mt-4 mb-4">
                <div className="col-6  my-auto">
                    <div className="d-flex align-items-center offset-2 mt-2">
                        <div className="col ">
                            <div className="row">
                                <h2> You deserve</h2>
                            </div>
                            <div className="row"><h2>traceability</h2></div>

                        </div>
                    </div>
                    <div className="d-flex align-items-center offset-2 mt-4">
                        <div className="col-8">
                            <p>We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind.</p>

                        </div>
                    </div>
                    <div className="d-flex align-items-center offset-2 mt-4">
                        <div className="col-10">
                            <div className="row">
                                <div>
                                    <span style={{
                                        fontSize: '18px', fontFamily: 'sans-serif', color: 'rgb(20, 43, 111)'
                                        , fontWeight: 'bold', borderBottom: '2px solid rgb(20, 43, 111)', margin: '2px'
                                    }}>Meet Our Ingredients</span>
                                </div>

                            </div>
                            <div className="row mt-4">
                                <div>
                                    <span style={{
                                        fontSize: '18px', fontFamily: 'sans-serif', color: 'rgb(20, 43, 111)'
                                        , fontWeight: 'bold', borderBottom: '2px solid rgb(20, 43, 111)', margin: '2px'
                                    }}>Our Clinical Study</span>
                                </div>

                            </div>


                        </div>
                    </div>


                </div>

                <div className="col-6">
                    <div className="row">
                        <div className="col-6 y">
                            <img className="mh-100" src={world} style={{ maxHeight: '70%', zIndex: '1', position: 'relative', height: '80vh' }} />
                        </div>
                    </div>
                </div>


            </div>
            <div className="container mt-4 ">
                <div className="d-flex justify-content-between mt-4  col-10 mx-auto">
                    <div>
                        <h2>Featured Products</h2>
                    </div>
                    <div className="my-auto">
                        <a className="my-auto" style={{
                                        fontSize: '18px', fontFamily: 'sans-serif', color: 'rgb(20, 43, 111)'
                                        , fontWeight: 'bold', borderBottom: '2px solid rgb(20, 43, 111)',
                                        textDecoration:'none'
                                    }}>Shop All</a>
                    </div>


                </div>
                <div className="d-flex justify-content-between mt-4  col-10 mx-auto">
                    <div className="row">
                    <FeaturedProducts/>
                    </div>
                        
                </div>

            </div>


        </div>
    )
}

export default Custom
