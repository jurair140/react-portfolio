import React from 'react'

function About() {
    return (
        <>
            <div className='p-5 mt-5 row container-fluid'>
                <div className='col-8'>
                    <h1>About Me</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque necessitatibus autem similique et quisquam, eos amet fugiat sed cupiditate ipsa consequuntur alias optio odio. Harum reiciendis sapiente nisi explicabo.</p>
                </div>
                <div className='col-4'>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/jW6v78DKJ5E?si=nCjhCcf4_aOOEsqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default About
