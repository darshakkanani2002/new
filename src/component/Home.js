import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import $ from 'jquery'
// import MybackImage from 'assets/image/Desktop.jpg'
export default class Home extends Component {

    render() {
        return (
            <div>
                <div className="active  back-img" >


                    <div className="col-lg-12 align-items-center" style={{ paddingTop: '6.5rem' }}>
                        <div className="text-center">
                            <h1 className="text-light" style={{ fontSize: '70px' }}>Find Your Next Stay</h1>
                        </div>
                        <div className="col-lg-12 text-center align-items-center">
                            <h6 className="text-light" style={{ fontSize: '20px' }}>Get the best prices on 2,000,000+ Properties, Worldwide
                            </h6>
                        </div>
                    </div>
                </div>

                <section className="container booking-section">
                    <div className="st-banner-search-form style_2">
                        <div className="st-search-form-el">
                            <div className="st-search-el">
                                <div className="search-form">
                                    <form className="form d-flex align-items-center">
                                        <div className="d-flex align-items-center field-detination">
                                            <span className="stt-icon stt-icon-location1"></span>
                                            <div className="st-form-dropdown-icon">
                                                <label>Location</label>
                                                <div className="render">
                                                    <input type="text" placeholder="Where are you going?"
                                                        style={{ border: 'none', outline: 'none' }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group form-date-field form-date-search d-flex align-items-center"
                                            data-format="MM/DD/YYYY">
                                            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

                                            <script
                                                src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>

                                            <link rel="stylesheet"
                                                to="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.css" />

                                            <div className="date-item-wrapper d-flex align-items-center checkin">
                                                <span className="stt-icon stt-icon-in"></span>
                                                <div className="item-inner">
                                                    <label>Check in</label><br />
                                                    <input id="startdate" placeholder="Add Date"
                                                        style={{ width: '63%', border: 'none', outline: 'none' }} />
                                                </div>
                                            </div>
                                            <span className="stt-icon stt-icon-arrow-right-1"></span>
                                            <div className="date-item-wrapper d-flex align-items-center checkout">

                                                <span className="stt-icon stt-icon-out"></span>
                                                <div className="item-inner">
                                                    <label>Check out</label><br />
                                                    <input id="enddate" className="" placeholder="Add Date"
                                                        style={{ width: '63%', border: 'none', outline: 'none' }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" d-flex align-items-center   field-detination">
                                            <span className="stt-icon stt-icon-user2"></span>
                                            <div className="st-form-dropdown-icon">
                                                <label>GUest</label>
                                                <div className="render">
                                                    <input type="text" placeholder="Where are you going?"
                                                        style={{ border: 'none', outline: 'none' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-search-wrapper">
                                            <button className="btn btn-primary btn-search"><span
                                                className="stt-icon stt-icon-search-normal"></span>Search </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- <script>
    $(document).ready(function () {
        $("#startdate").datepicker();
        $("#enddate").datepicker();
    })
</script> --> */}
                </section>



                {/* <!-----------------------------------------------------------------------------> */}

                <div className="row container mx-auto " >
                    <div className="col-lg-6  mt-3 p-4" data-aos="fade-right" data-aos-duration="3000">
                        <img src="../assets/image/Frame1.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6  mt-3 p-4" data-aos="fade-left" data-aos-duration="3000">
                        <img src="../assets/image/Frame2.png" alt="" className="img-fluid" />
                    </div>
                </div>

                {/* <!-----------------------section 3------------------------------------> */}
                <div data-aos="fade-up" data-aos-duration="3000">
                    <div className="container-fluid" style={{ marginTop: '7rem' }}>
                        <h2 className="text-center">Top destinations</h2>
                    </div>

                    <div className="container my-5">

                        <div className='row text-center'>
                            <div className='col-lg-2'>
                                <div>
                                    <img src="../assets/image/slide-1.png" alt="" className="img-fluid" width="80%" />
                                </div>
                                <div className="pt-2">
                                    <h6>New York City</h6>
                                    <p>7 Hotels</p>
                                </div>
                            </div>

                            <div className='col-lg-2'>
                                <img src="../assets/image/slide-2.png" alt="" className="img-fluid" width="80%" />

                                <div className="pt-2">
                                    <h6>Thailand City</h6>
                                    <p>5 Hotels</p>
                                </div>
                            </div>

                            <div className='col-lg-2'>
                                <img src="../assets/image/slide-3.png" alt="" className="img-fluid" width="80%" />

                                <div className="pt-2">
                                    <h6>London City</h6>
                                    <p>6 Hotels</p>
                                </div>

                            </div>

                            <div className='col-lg-2'>
                                <img src="../assets/image/slide-4.png" alt="" className="img-fluid" width="80%" />

                                <div className="pt-2">
                                    <h6>Torranto</h6>
                                    <p>3 Hotels</p>
                                </div>

                            </div>

                            <div className='col-lg-2'>
                                <img src="../assets/image/slide-5.png" alt="" className="img-fluid" width="80%" />

                                <div className="pt-2">
                                    <h6>Kitchener</h6>
                                    <p>4 Hotels</p>
                                </div>

                            </div>

                            <div className='col-lg-2'>
                                <img src="../assets/image/slide-6.png" alt="" className="img-fluid" width="80%" />

                                <div className="pt-2">
                                    <h6>Noida City</h6>
                                    <p>3 Hotels</p>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>

                {/* <!------------------section 5-----------------------------> */}
                <section className="bg-light py-5 container-fluid" style={{ marginTop: '3rem' }} data-aos="zoom-in" data-aos-duration="3000">
                    <div className="col-lg-12 text-center">
                        <h2>Plan Your next staycation</h2>
                    </div>
                    <div className='container-fluid'>
                        <div className="row mt-5">

                            <div className="col-lg-3">
                                <div className="s5-img-div mt-3" style={{ backgroundColor: 'white' }}>
                                    <div className="position-relative next-div">
                                        <Link to="hotel.html"> <img src="../assets/image/destination-1.png" alt=""
                                            className="img-fluid img-border next-img" width="100%" /></Link>
                                        <i className="bi bi-heart s5-icon"></i>
                                        <div className="px-4 pt-2">
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <h6>Redac Gateway Hotel</h6>
                                            <p>Los Angeles</p>

                                            <div className="border"></div>
                                            <div className="clearfix1 mt-3">
                                                <button type="button" className="btn btn-info">5 / 5</button>&emsp;
                                                <h6 className="pt-2">Excellent</h6>&emsp;
                                                <p className="pt-1">(3 Reviews)</p>
                                            </div>

                                            <p className="pt-2">From: <b> €136,000</b> / night</p>
                                        </div>
                                    </div>
                                </div>


                            </div>


                            <div className="col-lg-3">
                                <div className="s5-img-div mt-3" style={{ backgroundColor: 'white' }}>
                                    <div className="position-relative next-div">
                                        <img src="../assets/image/destination-2.png" alt="" className="img-fluid img-border next-img" width="100%" />
                                        <i className="bi bi-heart s5-icon"></i>

                                        <div className="px-4 pt-2">
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <h6>Eastren Discovery</h6>
                                            <p>New York City</p>

                                            <div className="border"></div>
                                            <div className="clearfix1 mt-3">
                                                <button type="button" className="btn btn-info">5 / 5</button>&emsp;
                                                <h6 className="pt-2">Excellent</h6>&emsp;
                                                <p className="pt-1">(3 Reviews)</p>
                                            </div>

                                            <p className="pt-2">From: <b> €100,000</b> / night</p>
                                        </div>
                                    </div>
                                </div>


                            </div>



                            <div className="col-lg-3">
                                <div className="s5-img-div mt-3" style={{ backgroundColor: 'white' }}>
                                    <div className="position-relative next-div">
                                        <img src="../assets/image/destination-3.png" alt="" className="img-fluid img-border next-img" width="100%" />
                                        <i className="bi bi-heart s5-icon"></i>

                                        <div className="px-4 pt-2">
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <h6>Southwest State</h6>
                                            <p>Los Angeles</p>

                                            <div className="border"></div>
                                            <div className="clearfix1 mt-3">
                                                <button type="button" className="btn btn-info">5 / 5</button>&emsp;
                                                <h6 className="pt-2">Excellent</h6>&emsp;
                                                <p className="pt-1">(2 Reviews)</p>
                                            </div>

                                            <p className="pt-2">From: <b> €180,000</b> / night</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="col-lg-3">
                                <div className="s5-img-div mt-3" style={{ backgroundColor: 'white' }}>
                                    <div className="position-relative next-div">
                                        <div className="next-div">
                                            <img src="../assets/image/destination-4.png" alt="" className="img-fluid img-border next-img"
                                                width="100%" />
                                            <i className="bi bi-heart s5-icon"></i>
                                        </div>
                                        <div className="px-4 pt-2">
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                            <h6>Treehouse Villas</h6>
                                            <p>Los Angeles</p>

                                            <div className="border"></div>
                                            <div className="clearfix1 mt-3">
                                                <button type="button" className="btn btn-info">5 / 5</button>&emsp;
                                                <h6 className="pt-2">Excellent</h6>&emsp;
                                                <p className="pt-1">(3 Reviews)</p>
                                            </div>

                                            <p className="pt-2">From: <b> €180,000</b> / night</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </section>



                {/* <!---------------------section 6--------------------------------------> */}

                <section className="bg-light py-5" style={{ marginTop: '3rem' }} data-aos="zoom-in-up" data-aos-duration="3000">
                    <div className="col-lg-12 text-center">
                        <h2>Recommanded Your Destination</h2>
                    </div>

                    <div className="row container-fluid mx-auto mt-5">

                        <div className="col-lg-3">
                            <div className="s5-img-div mt-3" style={{ backgroundColor: 'white' }}>
                                <div className="position-relative next-div">
                                    <Link to="hotel.html"> <img src="../assets/image/destination-1.png" alt=""
                                        className="img-fluid img-border next-img" width="100%" /></Link>
                                    <i className="bi bi-heart s5-icon"></i>
                                    <div className="px-4 pt-2">
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <h6>Redac Gateway Hotel</h6>
                                        <p>Los Angeles</p>

                                        <div className="border"></div>
                                        <div className="clearfix1 mt-3">
                                            <button type="button" className="btn btn-info">5 / 5</button>&emsp;
                                            <h6 className="pt-2">Excellent</h6>&emsp;
                                            <p className="pt-1">(3 Reviews)</p>
                                        </div>

                                        <p className="pt-2">From: <b> €136,000</b> / night</p>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className="col-lg-3">
                            <div className="s5-img-div mt-3" style={{ backgroundColor: 'white' }}>
                                <div className="position-relative next-div">
                                    <img src="../assets/image/destination-2.png" alt="" className="img-fluid img-border next-img" width="100%" />
                                    <i className="bi bi-heart s5-icon"></i>

                                    <div className="px-4 pt-2">
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <h6>Eastren Discovery</h6>
                                        <p>New York City</p>

                                        <div className="border"></div>
                                        <div className="clearfix1 mt-3">
                                            <button type="button" className="btn btn-info">5 / 5</button>&emsp;
                                            <h6 className="pt-2">Excellent</h6>&emsp;
                                            <p className="pt-1">(3 Reviews)</p>
                                        </div>

                                        <p className="pt-2">From: <b> €100,000</b> / night</p>
                                    </div>
                                </div>
                            </div>


                        </div>



                        <div className="col-lg-3">
                            <div className="s5-img-div mt-3" style={{ backgroundColor: 'white' }}>
                                <div className="position-relative next-div">
                                    <img src="../assets/image/destination-3.png" alt="" className="img-fluid img-border next-img" width="100%" />
                                    <i className="bi bi-heart s5-icon"></i>

                                    <div className="px-4 pt-2">
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <h6>Southwest State</h6>
                                        <p>Los Angeles</p>

                                        <div className="border"></div>
                                        <div className="clearfix1 mt-3">
                                            <button type="button" className="btn btn-info">5 / 5</button>&emsp;
                                            <h6 className="pt-2">Excellent</h6>&emsp;
                                            <p className="pt-1">(2 Reviews)</p>
                                        </div>

                                        <p className="pt-2">From: <b> €180,000</b> / night</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-lg-3">
                            <div className="s5-img-div mt-3" style={{ backgroundColor: 'white' }}>
                                <div className="position-relative next-div">
                                    <div className="next-div">
                                        <img src="../assets/image/destination-4.png" alt="" className="img-fluid img-border next-img"
                                            width="100%" />
                                        <i className="bi bi-heart s5-icon"></i>
                                    </div>
                                    <div className="px-4 pt-2">
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                                        <h6>Treehouse Villas</h6>
                                        <p>Los Angeles</p>

                                        <div className="border"></div>
                                        <div className="clearfix1 mt-3">
                                            <button type="button" className="btn btn-info">5 / 5</button>&emsp;
                                            <h6 className="pt-2">Excellent</h6>&emsp;
                                            <p className="pt-1">(3 Reviews)</p>
                                        </div>

                                        <p className="pt-2">From: <b> €180,000</b> / night</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>

                {/* <!------------------------section 7-----------------------------------------------> */}
                <section className="p-5">
                    <div className="row2 clearfix my-5 align-items-center s7-border bg-light">
                        <div className="col-lg-6" data-aos="flip-right" data-aos-duration="3000">
                            <img src="../assets/image/seaplane-1.png" alt="" className=" img-border-2 border" width="100%" />
                        </div>

                        <div className="col-lg-6 text-center" data-aos="flip-left" data-aos-duration="3000">
                            <h2>Get special offers, and <br /> more from traveler</h2>
                            <p>subscribe to see secret deals prices drop <br /> the moment you sign up!</p>

                            <form className="row g-3 justify-content-center">


                                <div className="custom-search" style={{ width: '70%' }}>
                                    <input type="text" className="custom-search-input" placeholder="Enter your email" />
                                    <button className="custom-search-botton" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>
            </div>


        );
    }
}
