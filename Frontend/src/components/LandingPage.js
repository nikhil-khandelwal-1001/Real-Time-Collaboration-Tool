import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="container text-center mt-5 landing-container">
            <div className="jumbotron bg-light p-5 ">
                <h1 className="display-4 landing-title">Welcome to CollabTool</h1>
                <p className="lead landing-description">
                    CollabTool is your go-to platform for seamless real-time collaboration. 
                    Work together on documents, share ideas, and communicate effortlessly with your team.
                </p>
                <hr className="my-4" />
                <p className='landing-description'>
                    Whether you're working on a team project or just need to organize your thoughts, 
                    CollabTool offers all the features you need to stay productive.
                </p>
                <div className="mt-4 landing-buttons">
                    <Link to="/register" className="btn btn-primary btn-lg me-3 landing-btn">Register</Link>
                    <Link to="/login" className="btn btn-secondary btn-lg landing-btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
