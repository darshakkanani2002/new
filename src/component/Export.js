import React, { Component } from 'react';

export default class Export extends Component {
  render() {
    return (
      <div>
         {/* <!----------------------img section-------------------------> */}
    <section className="mt-4">
        <div className="row container mx-auto">
            <div className="col-lg-12">
                <img src="/assets/image/About/export.png" alt="" className="img-fluid" />
            </div>
        </div>
    </section>
    {/* <!----------------------img section end---------------------------> */}


    {/* <!----------------------------Work section-------------------------------------> */}
    <section className="my-5">
        <div className="row container mx-auto text-center">
            <div className="col-lg-12">
                <h1>How does it work?</h1>
            </div>
        </div>

        <div className="row container mx-auto mt-4">
            <div className="col-lg-4">
                <div className="row  work-card-div m-2">
                    <div className="col-lg-2">
                        <h1 className="work-h1">01</h1>
                    </div>

                    <div className="col-lg-9">
                        <h3>Sign up</h3>
                        <p>Praesent dolor sagittis, rhoncus netus bibendum et. Dolor id sed urna netus volutpat tortor.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="row work-card-div m-2">
                    <div className="col-lg-2">
                        <h1 className="work-h1">02</h1>
                    </div>

                    <div className="col-lg-9">
                        <h3>Add your services</h3>
                        <p>Praesent dolor sagittis, rhoncus netus bibendum et. Dolor id sed urna netus volutpat tortor.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="row work-card-div m-2">
                    <div className="col-lg-2">
                        <h1 className="work-h1">03</h1>
                    </div>

                    <div className="col-lg-9">
                        <h3>Get bookings</h3>
                        <p>Praesent dolor sagittis, rhoncus netus bibendum et. Dolor id sed urna netus volutpat tortor.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="row container mx-auto text-center mt-4">
            <div className="col-lg-12">
                <button type="button" className="btn btn-primary">Register Now</button>
            </div>
        </div>
    </section>
{/* <!---------------------------Work section end------------------------------------> */}


{/* <!----------------------Super host section-------------------> */}
    <section className="my-5 pb-5" style={{backgroundColor: 'rgb(242, 242, 242)'}}>
        <div className="row container mx-auto text-center pt-5">
            <div className="col-lg-12">
                <h1>Meet the super host</h1>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit,<br /> sed quia non numquam eius modi ullma tempora incidunt ut.</p>
            </div>
        </div>

        <div className="row container mx-auto mt-5">
            <div className="col-lg-3 col-sm-6 text-center">
                <img src="/assets/image/About/team1.png" alt="" className="img-fluid superhost-img w-75" />
                <div className=" mt-4">
                    <h4>Darlene Robertson</h4>
                    <p>Founder & CEO</p>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6 text-center">
                <img src="/assets/image/About/team2.png" alt="" className="img-fluid superhost-img w-75" />
                <div className=" mt-4">
                    <h4>Jenny Wilson</h4>
                    <p>Marketing Manager</p>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6 text-center">
                <img src="/assets/image/About/team3.png" alt="" className="img-fluid superhost-img w-75" />
                <div className=" mt-4">
                    <h4>Jerome Bell</h4>
                    <p>Product Manager</p>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6 text-center">
                <img src="/assets/image/About/team4.png" alt="" className="img-fluid superhost-img w-75" />
                <div className=" mt-4">
                    <h4>Annette Black</h4>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </div>


        <div className="row container mx-auto mt-5">
            <div className="col-lg-3 col-sm-6 text-center">
                <img src="/assets/image/About/team5.png" alt="" className="img-fluid superhost-img w-75" />
                <div className=" mt-4">
                    <h4>Eleanor Pena</h4>
                    <p>Creative Director</p>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6 text-center">
                <img src="/assets/image/About/team6.png" alt="" className="img-fluid superhost-img w-75" />
                <div className=" mt-4">
                    <h4>Marvin McKinney</h4>
                    <p>Chief Financial Officer</p>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6 text-center">
                <img src="/assets/image/About/team7.png" alt="" className="img-fluid superhost-img w-75" />
                <div className=" mt-4">
                    <h4>Annette Black</h4>
                    <p>Product Manager</p>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6 text-center">
                <img src="/assets/image/About/team8.png" alt="" className="img-fluid superhost-img w-75" />
                <div className=" mt-4">
                    <h4>Darrell Steward</h4>
                    <p>President of Sales</p>
                </div>
            </div>
        </div>
    </section>
    {/* <!-------------------------------Super host section end----------------------------------> */}

    {/* <!-------------------------------Question section-------------------> */}

    <section className="my-5">
        <div className="row container mx-auto text-center">
            <div className="col-lg-12">
                <h1>Frequently asked questions</h1>
            </div>
        </div>

        <div className="row container mx-auto ">
            <div className="col-lg-5 mx-auto">
                <div className="row pt-3 pb-1 mt-4 question-div">
                    <div className="col-lg-10">
                       <h5>How will I receive my payment?</h5>
                    </div>

                    <div className="col-lg-2">
                        <p><i className="fa-solid fa-plus"></i></p>
                    </div>
                </div>

                <div className="row  mt-4 pt-3 pb-1 question-div">
                    <div className="col-lg-10">
                       <h5>How to extend the support?</h5>
                    </div>

                    <div className="col-lg-2">
                        <p><i className="fa-solid fa-plus"></i></p>
                    </div>
                </div>

                <div className="row  mt-4 pt-3 pb-1 question-div">
                    <div className="col-lg-10">
                       <h5>How to Reset to Default Color?</h5>
                    </div>

                    <div className="col-lg-2">
                        <p><i className="fa-solid fa-plus"></i></p>
                    </div>
                </div>

                <div className="row  mt-4 pt-3 pb-1 question-div">
                    <div className="col-lg-10">
                       <h5>How Can I Config Twitter Key API?</h5>
                    </div>

                    <div className="col-lg-2">
                        <p><i className="fa-solid fa-plus"></i></p>
                    </div>
                </div>
             
            </div>

            <div className="col-lg-5 mx-auto">
                <div className="row  pt-3 pb-1 mt-4 question-div">
                    <div className="col-lg-10">
                       <h5>How to import demo Traveler</h5>
                    </div>

                    <div className="col-lg-2">
                        <p><i className="fa-solid fa-plus"></i></p>
                    </div>
                </div>

                <div className="row  mt-4 pt-3 pb-1 question-div">
                    <div className="col-lg-10">
                       <h5>Internal Server Error ?</h5>
                    </div>

                    <div className="col-lg-2">
                        <p><i className="fa-solid fa-plus"></i></p>
                    </div>
                </div>

                <div className="row  mt-4 pt-3 pb-1 question-div">
                    <div className="col-lg-10">
                       <h5>How to increase the PHP Time Limit</h5>
                    </div>

                    <div className="col-lg-2">
                        <p><i className="fa-solid fa-plus"></i></p>
                    </div>
                </div>

                <div className="row  mt-4 pt-3 pb-1 question-div">
                    <div className="col-lg-10">
                       <h5>How to using widget in Elementor</h5>
                    </div>

                    <div className="col-lg-2">
                        <p><i className="fa-solid fa-plus"></i></p>
                    </div>
                </div>
            </div>

        </div>
    </section>

       {/* <!-------------------------------Question section-------------------> */}

      </div>
    );
  }
}
