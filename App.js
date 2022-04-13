import React from "react"

export default function App () {
    return (
        <div className="container">
            <header>
                <img className="my--image" src='./images/my-image.png'></img>
            </header>
            <div className='intro'>
                <h1>S Venkatesh</h1>
                <h3>Web Developer</h3>
                <p className='intro--link'>www.xvenkyx.com</p>
                <div className='button--container'>
                    <button className='button--1'>Email</button>
                    <button className='button--2'>LinkedIn</button>
                </div>
            </div>
            <div className='about'>
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className='interests'>
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <footer>
                <a>Twitter</a>
                <a>Facebook</a>
                <a>Instagram</a>
                <a>GitHub</a>
            </footer>
        </div>
    )
}