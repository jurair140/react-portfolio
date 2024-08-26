import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <>
            <div className='row p-4 bg-primary'>
                <div className="col">
                    <h3>Porfolio</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, facilis, dolores et quaerat tempore voluptatum sunt fuga earum, ad cupiditate voluptatem? Asperiores, dolore vero consequatur voluptas laudantium nisi labore magnam!</p>
                </div>
                <div className="col">
                    <h3>Links</h3>
                    <a href="">link 1</a>
                    <a href="">link 2</a>
                    <a href="">link 3</a>
                </div>
                <div className="col">
                    <h3>FeedBack</h3>
                    <textarea name="" id="" placeholder='please enter your Feedback ' className='form-control'></textarea>
                    <button className='btn btn-success mt-2'>submit</button>
                </div>
                <h4>portfolio &copy; all rights reserved</h4>
            </div>
        </>
    )
}

export default Footer
