import React, { Component } from 'react';

export default class Error extends Component {
    render() {
        return (
            <div>
                <section>
                    <div class="row container mx-auto mt-5">
                        <div class="col-lg-12 text-center">
                            <img src="./assets/image/404.png" alt="" class="img-fluid" />
                        </div>
                    </div>

                    <div class="row container mx-auto mt-5">
                        <div class="col-lg-12 text-center">
                            <h1 style={{fontFamily: 'inika'}}>Oops! Look like you're lost</h1>
                            <p>Either something went wrong or the page doesn't exist anymore.</p>
                            <button type="button" class="btn btn-primary mt-3 mb-5">Go To Home</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
