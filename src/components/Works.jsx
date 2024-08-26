import React from 'react'

function Works() {
  return (
    <>
      <h1 className='text-center mt-5'>My Works</h1>

      <div className='d-flex justify-content-around flex-wrap mt-5'>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://img.freepik.com/free-vector/gradient-interview-portfolio-template_23-2149220443.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
          <div class="card-body">
            <h5 class="card-title">Work 1</h5>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://i.poweredtemplates.com/p/sp/113997/sp_slide_h_1.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
          <div class="card-body">
            <h5 class="card-title">Work 2</h5>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://visme.co/blog/wp-content/uploads/2023/06/How-to-Create-Present-Your-Portfolio-Presentation-Thumbnail.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
          <div class="card-body">
            <h5 class="card-title">Work 3</h5>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://i.etsystatic.com/21883908/r/il/a1b04b/2572552416/il_fullxfull.2572552416_3eor.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
          <div class="card-body">
            <h5 class="card-title">Work 4</h5>
          </div>
        </div>



      </div>
    </>
  )
}

export default Works
