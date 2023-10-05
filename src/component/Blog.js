import React, { Component } from 'react';
import Iframe from 'react-iframe'

export default class Blog extends Component {
  render() {
    return (
      <div>
         {/* <!---------------------------------------------------------------------------------> */}
    <div className="row container mx-auto">
        <div className="col-lg-1">
            <li style={{listStyle: 'none'}}>Home</li>
        </div>
        <div className="col-lg-10">
            <li>Blog</li>
        </div>
    </div>
    <hr />
    {/* <!--------------------------------------------------------------------------> */}

    {/* <!-------------------------Main Section------------------------------------------------> */}
    <div className="row container mx-auto mb-5">
        <div className="col-lg-8">
            <section className="map-section">
                <div className="row">
                    <div className="col-lg-12">
                        <Iframe width="100%" height="515" src="https://www.youtube.com/embed/FjU_x1106pg"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></Iframe>
                    </div>
                    <div className="p-5">
                        <div className="clearfix1 mt-4">
                            <i className="fa-solid fa-circle travel-icon"> Travel</i>
                        </div>

                        <div className="col-lg-12">
                            <h2>Meet the Steve Jobs of the Travel Industry</h2>
                            <p>Vulputate amet magna bibendum et nibh at. Pretium tincidunt non turpis fermentum enim
                                scelerisque nec enim odio. Eget mi commodo suscipit quam molestie mi, morbi lectus
                                risus. Malesuada tristique bibendum cursus. Viverra sit diam ut viverra leo duis. Odio
                                consectetur enim, massa nibh euismod eget.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1">
                                <img src="/assets/image/hotel/person-1.jpg" alt="" className="img-fluid person-img" />
                            </div>
                            <div className="col-lg-11">
                                <h6><span style={{color: 'rgb(130, 130, 130)'}}>BY</span> Modtel <span
                                        style={{color: 'rgb(130, 130, 130)'}}> May 6,2022 4:15 Am</span></h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="map-section-1 mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <img src="/assets/image/blog/img-1.jpg" alt="" className="img-fluid blog-img" />
                    </div>
                    <div className="p-5">
                        <div className="clearfix1 mt-4">
                            <i className="fa-solid fa-circle travel-icon hotel-icon"> HOTEL</i>
                        </div>

                        <div className="col-lg-12">
                            <h2>A Seaside Reset in Laguna Beach</h2>
                            <p>From the iconic to the unexpected, the city of San Francisco never ceases to surprise.
                                Kick-start your effortlessly delivered Northern California holiday in the cosmopolitan
                                hills of The City . Join your Travel Director and fellow travellers for a Welcome
                                Reception at your hotel.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1">
                                <img src="/assets/image/hotel/person-1.jpg" alt="" className="img-fluid person-img" />
                            </div>
                            <div className="col-lg-11">
                                <h6><span style={{color: 'rgb(130, 130, 130)'}}>BY</span> Modtel <span
                                        style={{color: 'rgb(130, 130, 130)'}}> May 6,2022 4:15 Am</span></h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="map-section-1 mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <img src="/assets/image/blog/img-2.jpg" alt="" className="img-fluid blog-img" />
                    </div>
                    <div className="p-5">
                        <div className="clearfix1 mt-4">
                            <i className="fa-solid fa-circle travel-icon stay-icon"> STAYS</i>
                        </div>

                        <div className="col-lg-12">
                            <h2>Tiptoe through the Tulips of Washington</h2>
                            <p>2021 will be a Different Skagit Valley Tulip Festival. We know there will be restrictions
                                on the number of people who can visit our fields and gardens (and other retail
                                establishments /restaurants /venues) based on COVID guidelines established by the state
                                and county governments.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1">
                                <img src="/assets/image/hotel/person-1.jpg" alt="" className="img-fluid person-img" />
                            </div>
                            <div className="col-lg-11">
                                <h6><span style={{color: 'rgb(130, 130, 130)'}}>BY</span> Modtel <span
                                        style={{color: 'rgb(130, 130, 130)'}}> May 6,2022 4:15 Am</span></h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="map-section-1 mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <img src="/assets/image/blog/cali.jpg" alt="" className="img-fluid blog-img" />
                    </div>
                    <div className="p-5">
                        <div className="clearfix1 mt-4">
                            <i className="fa-solid fa-circle travel-icon stay-icon"> STAYS</i>
                        </div>

                        <div className="col-lg-12">
                            <h2>City Spotlight: Philadelphia</h2>
                            <p>This article is part of Earth Refuge’s Spotlight Series on Philadelphia. During the
                                summer of 2021, cities across the United States (‘US’) have seen record breaking
                                temperatures to an extent that scientists say would have been “virtually impossible” to
                                reach without anthropogenic climate change.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1">
                                <img src="/assets/image/hotel/person-1.jpg" alt="" className="img-fluid person-img" />
                            </div>
                            <div className="col-lg-11">
                                <h6><span style={{color: 'rgb(130, 130, 130)'}}>BY</span> Modtel <span
                                        style={{color: 'rgb(130, 130, 130)'}}> May 6,2022 4:15 Am</span></h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="map-section-1 mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <img src="/assets/image/blog/img-3.jpg" alt="" className="img-fluid blog-img" />
                    </div>
                    <div className="p-5">
                        <div className="clearfix1 mt-4">
                            <i className="fa-solid fa-circle travel-icon booking-icon"> BOOKING</i>
                        </div>

                        <div className="col-lg-12">
                            <h2>The Castle on the Cliff: Majestic, Magic, Manoir</h2>
                            <p>Thousands of migrants – of whom, many are children – suffer from deadly heat conditions
                                at the US-Mexico border. As the effects of climate change worsen day by day, extreme
                                weather conditions are causing a high risk of dehydration and death amongst migrants who
                                try to enter the States.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1">
                                <img src="/assets/image/hotel/person-1.jpg" alt="" className="img-fluid person-img" />
                            </div>
                            <div className="col-lg-11">
                                <h6><span style={{color: 'rgb(130, 130, 130)'}}>BY</span> Modtel <span
                                        style={{color: 'rgb(130, 130, 130)'}}> May 6,2022 4:15 Am</span></h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>


            <section className="map-section-1 mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <img src="/assets/image/blog/img-4.jpg" alt="" className="img-fluid blog-img" />
                    </div>
                    <div className="p-5">
                        <div className="clearfix1 mt-4">
                            <i className="fa-solid fa-circle travel-icon travel-icon"> TRAVEL</i>
                        </div>

                        <div className="col-lg-12">
                            <h2>All Aboard the Rocky Mountaineer</h2>
                            <p>In this interview, correspondent Polly Nash talks to fire fighter Cami Schafer about one
                                of the many frightening effects of climate change; the ever-growing threat of wildfires
                                around the world. Last year California was hit by the Dixie Fire, the largest single
                                forest fire in the state’s history.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1">
                                <img src="/assets/image/hotel/person-1.jpg" alt="" className="img-fluid person-img" />
                            </div>
                            <div className="col-lg-11">
                                <h6><span style={{color: 'rgb(130, 130, 130)'}}>BY</span> Modtel <span
                                        style={{color: 'rgb(130, 130, 130)'}}> May 6,2022 4:15 Am</span></h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="map-section-1 mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <img src="/assets/image/blog/img-5.jpg" alt="" className="img-fluid blog-img" />
                    </div>
                    <div className="p-5">
                        <div className="clearfix1 mt-4">
                            <i className="fa-solid fa-circle travel-icon hotel-icon"> HOTEL</i>
                        </div>

                        <div className="col-lg-12">
                            <h2>Pure Luxe in Punta Mita Rocky Mountaineer</h2>
                            <p>In this week’s interview, correspondent Ole ter Wey talks to climate activist Grace Fong
                                about the importance of climate education. Drawing on her very personal experiences with
                                the impacts of climate change in her home country of Fiji.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1">
                                <img src="/assets/image/hotel/person-1.jpg" alt="" className="img-fluid person-img" />
                            </div>
                            <div className="col-lg-11">
                                <h6><span style={{color: 'rgb(130, 130, 130)'}}>BY</span> Modtel <span
                                        style={{color: 'rgb(130, 130, 130)'}}> May 6,2022 4:15 Am</span></h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="map-section-1 mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <img src="/assets/image/blog/img-6.png" alt="" className="img-fluid blog-img" />
                    </div>
                    <div className="p-5">
                        <div className="clearfix1 mt-4">
                            <i className="fa-solid fa-circle travel-icon stay-icon"> STAYS</i>
                        </div>

                        <div className="col-lg-12">
                            <h2>How to Explain Travel to a Five-Year-Old</h2>
                            <p>I’ve been a traveler my whole life — and was lucky enough to have a family that
                                prioritized experiencing new destinations throughout my childhood. Now, it’s my nephew’s
                                turn. At two years old, with seven countries down, he’s on his way to becoming a citizen
                                of the world.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1">
                                <img src="/assets/image/hotel/person-1.jpg" alt="" className="img-fluid person-img" />
                            </div>
                            <div className="col-lg-11">
                                <h6><span style={{color: 'rgb(130, 130, 130)'}}>BY</span> Modtel <span
                                        style={{color: 'rgb(130, 130, 130)'}}> May 6,2022 4:15 Am</span></h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="map-section-1 mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <img src="/assets/image/blog/img-7.png" alt="" className="img-fluid blog-img" />
                    </div>
                    <div className="p-5">
                        <div className="clearfix1 mt-4">
                            <i className="fa-solid fa-circle travel-icon hotel-icon"> HOTEL</i>
                        </div>

                        <div className="col-lg-12">
                            <h2>The Best Kept Secrets About Travel</h2>
                            <p>PENNSYLVANIA, USA — The difference between a tourist and a traveler is getting to know a
                                culture, according to Karen Gershowitz, writer and travel addict. Since boarding a plane
                                to Europe when she was 17, Gershowitz has visited over 90 countries and “gained friends.
                            </p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1">
                                <img src="/assets/image/hotel/person-1.jpg" alt="" className="img-fluid person-img" />
                            </div>
                            <div className="col-lg-11">
                                <h6><span style={{color: 'rgb(130, 130, 130)'}}>BY</span> Modtel <span
                                        style={{color: 'rgb(130, 130, 130)'}}> May 6,2022 4:15 Am</span></h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="map-section-1 mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <img src="/assets/image/blog/img-8.png" alt="" className="img-fluid blog-img" />
                    </div>
                    <div className="p-5">
                        <div className="clearfix1 mt-4">
                            <i className="fa-solid fa-circle travel-icon booking-icon"> BOOKING</i>
                        </div>

                        <div className="col-lg-12">
                            <h2>The Ultimate Cheat Sheet on Travel</h2>
                            <p>If you’re a student who is planning on attending school abroad as part of your studies or
                                you’re being relocated by your company, it can seem daunting to visit a new country for
                                the first time. Looking for some tips and tricks to mastering international travel? We
                                have them, courtesy of Travel + Leisure.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1">
                                <img src="/assets/image/hotel/person-1.jpg" alt="" className="img-fluid person-img" />
                            </div>
                            <div className="col-lg-11">
                                <h6><span style={{color: 'rgb(130, 130, 130)'}}>BY</span> Modtel <span
                                        style={{color: 'rgb(130, 130, 130)'}}> May 6,2022 4:15 Am</span></h6>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>



        </div>

        <div className="col-lg-4">
            <section className="p-4 search-section">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Search</h2>
                        <hr />
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search"
                                aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i
                                    className="fa-solid fa-magnifying-glass"></i> </button>
                        </div>
                    </div>
                    </div>
            </section>

            {/* <!------------Post section----------> */}

            <section className="mt-5 p-4 search-section">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Popular posts</h2>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-3 text-center">
                        <img src="/assets/image/blog/post-1.jpg" alt="" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-9">
                        <h6>Meet the Steve Jobs of the Travel Industry</h6>
                        <p>May 6, 2022</p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-3 text-center">
                        <img src="/assets/image/blog/post-2.jpg" alt="" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-9">
                        <h6>A Seaside Reset in Laguna Beach</h6>
                        <p>April 6, 2022</p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-3 text-center">
                        <img src="/assets/image/blog/post-3.jpg" alt="" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-9">
                        <h6>Tiptoe through the Tulips of Washington</h6>
                        <p>April 6, 2022</p>
                    </div>
                </div>

            </section>

            <section className="mt-5 p-4 search-section">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Categories</h2>
                    </div>
                </div>
                <hr />

                <div className="row  align-items-center p-2 Categories-section">
                    <div className="col-lg-10">
                        <i className="fa-solid fa-circle travel-icon booking-icon"> BOOKING</i>
                    </div>

                    <div className="col-lg-2 ">
                        <h6 className="pt-2">2</h6>
                    </div>
                </div>

                <div className="row align-items-center p-2 mt-4 Categories-section">
                    <div className="col-lg-10">
                        <i className="fa-solid fa-circle travel-icon hotel-icon"> HOTEL</i>
                    </div>

                    <div className="col-lg-2 ">
                        <h6 className="pt-2">2</h6>
                    </div>
                </div>

                <div className="row  align-items-center p-2 mt-4 Categories-section">
                    <div className="col-lg-10">
                        <i className="fa-solid fa-circle travel-icon stay-icon"> STAYS</i>
                    </div>

                    <div className="col-lg-2 ">
                        <h6 className="pt-2">2</h6>
                    </div>
                </div>


                <div className="row  align-items-center p-2 mt-4 Categories-section">
                    <div className="col-lg-10">
                        <i className="fa-solid fa-circle travel-icon travel-icon"> TRAVEL</i>
                    </div>

                    <div className="col-lg-2 ">
                        <h6 className="pt-2">2</h6>
                    </div>
                </div>

            </section>

            {/* <!---------Tages section------------> */}
            <section className="mt-4 p-4 search-section">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Tags</h2>
                    </div>
                </div>

                <div className="clearfix1 ">
                    <div className="p-2 tags">
                        <h6>Content</h6>
                    </div>
                    <div className=" p-2 tags">
                        <h6>Offers</h6>
                    </div>

                    <div className="  p-2 tags">
                        <h6>Promotion</h6>
                    </div>
                </div>

                <div className="clearfix1 mt-3 ">
                    <div className=" p-2 tags">
                        <h6>SEO</h6>
                    </div>
                    <div className=" p-2 tags">
                        <h6>Social media</h6>
                    </div>

                    <div className=" p-2 tags">
                        <h6>Tools</h6>
                    </div>
                </div>


                <div className="clearfix1 mt-3 ">
                    <div className=" p-2 tags">
                        <h6>Traffic</h6>
                    </div>
                    <div className="  p-2 tags">
                        <h6>Website</h6>
                    </div>


                </div>
            </section>
        </div>
    </div>
    {/* <!-------------------------Main Section end------------------------------------------------></hr> */}
      </div>
    );
  }
}
