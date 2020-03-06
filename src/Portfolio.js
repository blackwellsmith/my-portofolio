import React from 'react'

export const Portfolio = () => {
    return (
    <div>
        <div>
            <h2>The Legendary Anti-Procrastinator</h2>
            <hr/>
            <p>The Lengendary Anti-Procrastinator is a project from my Flatiron portfolio.
                This is a fun lister site that makes light of daily chores, encourages you to enjoy life, build lists, 
                prioritize your tasks, and delete when finished!
                Check out The Legendary Anti-Procrastinator is hosted on
                <a href="https://thelegendaryantiprocrastinator.herokuapp.com/"> Heroku.
                </a> Here are my github repos for <a href="https://github.com/blackwellsmith/family_chores_frontend">JavaScript </a>
                front end and <a href="https://github.com/blackwellsmith/family_chores_backend">Rails API</a> back end.
            </p>
        </div>
        <br/>
        <div>
            <h2>Heard</h2>
                <hr />
                <p>
                   Heard is a jobsearch journal that keeps your most important contacts and daily activities in order.
                   I wrote a post about Heard on <a href="https://dev.to/blackwellsmith/final-project-heard-1c55"> DEV</a> and recorded a
                   <a href="https://www.youtube.com/watch?v=fg4j0Z851Gk"> video walk through. </a>
                   Here are my github repos for the project <a href="https://github.com/blackwellsmith/jobhelper_frontend">React/Redux </a>
                   front end and <a href="https://github.com/blackwellsmith/api_backend_for_hurd">Rails API</a> back end.
                </p>
        </div>
        <br/>
        <div>
            <h2>I <span role="img">❤️</span> Resto</h2>
            <hr /> 
                <p>I Heart Resto is my take on a restaurant review site.
                 Users can sign up or login through Facebook omniauth.
                 Write short reviews no longer than 250 characters. This a github repo showcases
                 <a href="https://github.com/blackwellsmith/i-heart-resto">Rails</a> as front end and back end. </p>   
        </div>
    </div>   
    )
}