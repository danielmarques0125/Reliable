import React from 'react'

export const Navbar2 = () => {
  return (
    <div class='billingbody'>
      <div class='main heading'>
        <div className='Heading'>
          <h2 className='supportheading'>Support &nbsp; &nbsp; &nbsp;</h2><h2 className='supportheading grey'>| &nbsp; &nbsp;</h2>
          <p className='supportheading sub'>Support Tickets -</p><p className='supportheading sub white'> Ticket Details</p>
        </div>
      </div>
      <div className='billbox'>
        <div className='topbill'>
          <div className='billicon'><img height={60} width={60} src={require('./Billicon.png')} ></img></div>
          <h1 className='Billheading'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam…</h1>
          <div color='white' className='billitems'></div>
        </div>
        <div class="container text-lrgt">
          <div class="row">
            <div class="col-3 p-3 mb-1">
              By Paul Elliott
            </div>
            <div class="col-3 p-3 mb-2">
              EMPLOYEE
            </div>
            <div class="col-3 p-3 mb-3">
              Updated 3 Hours Ago - February 5th, 2022 at 5:30 PM - Third in DOM, ordered first
              <div class="container overflow-hidden data">
                <div class="row gy-5">
                  <div class="col-6">
                    <div class="p-3">Ticker Number</div>
                    <div class='p-4'>2</div>
                  </div>
                  <div class="col-6">
                    <div class="p-3">Opened by</div>
                    <div class='p-4'>Paul Elliott</div>
                  </div>
                  <div class="col-6">
                    <div class="p-3">Product/ Service</div>
                    <div class='p-4'>Not Applicable</div>
                  </div>
                  <div class="col-6">
                    <div class="p-3">Department</div>
                    <div class='p-4'>Department Name</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <input type={'text'} className='inputbox' placeholder='Enter a message'></input>
        <div className='input-box'>
          <button type="button" className='submitbutton'>Send Message</button>
        </div>

        <div className='reviewbox'>
          <div className='reviewprofile'>
            <img id='reviewiimage' src={require('./porfileimage.png')}></img>
            <div class="container text-center">
              <div class="row row-cols-3">
                <div class="namecol">Paul Elliott</div>
                <div class="designation">EMPLOYEE</div>
                <div class="Reply">Reply</div>
                <div class="time">1 hour</div>
              </div>
            </div>
          </div>
          <div className='reviewtext'>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </div>
        <div className='reviewbox second'>
          <div className='reviewprofile'>
            <img id='reviewiimage' src={require('./porfileimage.png')}></img>
            <div class="container text-center">
              <div class="row row-cols-3">
                <div class="namecol">Paul Elliott</div>
                <div class="designation customer">CUSTOMER</div>
                <div class="Reply">Reply</div>
                <div class="time">1 hour</div>
              </div>
            </div>
          </div>
          <div className='reviewtext'>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </div>
        <div className='reviewbox '>
          <div className='reviewprofile'>
            <img id='reviewiimage' src={require('./porfileimage.png')}></img>
            <div class="container text-center">
              <div class="row row-cols-3">
                <div class="namecol">Paul Elliott</div>
                <div class="designation">EMPLOYEE</div>
                <div class="Reply">Reply</div>
                <div class="time">1 hour</div>
              </div>
            </div>
          </div>
          <div className='reviewtext 3'>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </div>
        <div className='reviewbox second'>
          <div className='reviewprofile'>
            <img id='reviewiimage' src={require('./porfileimage.png')}></img>
            <div class="container text-center">
              <div class="row row-cols-3">
                <div class="namecol">Paul Elliott</div>
                <div class="designation customer">CUSTOMER</div>
                <div class="Reply">Reply</div>
                <div class="time">1 hour</div>
              </div>
            </div>
          </div>
          <div className='reviewtext'>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link active" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>



      </div>

    </div>
  )
}