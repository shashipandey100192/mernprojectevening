import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { First, Second } from './Fee';


function Educationlandingpage() {
    return (
        <div>
            <div className="container py-4">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Welcome Education portal</h1>
                        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                        <button className="btn btn-primary btn-lg" type="button">Example button</button>

                  <First />
                  <Second />

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Educationlandingpage