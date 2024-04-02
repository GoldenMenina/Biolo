const Stories = () => {
    return (
        <div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
            <div className="owl-carousel category-card owl-theme overflow-hidden nav-none">
                <div className="owl-stage-outer"> 
                <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '928px' }}>
                

                <div className="owl-item active" style={{ width: 'auto', marginRight: '7px' }}><div className="item">
                    <div data-bs-toggle="modal" data-bs-target="#Modalstory" className="card w125 h200 d-block border-0 shadow-none rounded-xxxl bg-dark overflow-hidden mb-3 mt-3">
                        <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                            <a href="#">
                                <span className="btn-round-lg bg-white"><i className="feather-plus font-lg"></i></span>
                                <div className="clearfix"></div>
                                <h4 className="fw-700 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">Add Story </h4>
                            </a>
                        </div>
                    </div>
                </div>
                </div>


                <div className="owl-item active" style={{ width: 'auto', marginRight: '7px' }}>   <div className="item">
                    <div data-bs-toggle="modal" data-bs-target="#Modalstory" className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3" style={{backgroundImage: 'url(images/s-1.jpg)'}}>
                        <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                            <a href="#">
                                <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1"><img src="/images/user-11.png" alt="image" className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"/></figure>
                                <div className="clearfix"></div>
                                <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">Victor Exrixon </h4>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
              

                
                <div className="owl-item active" style={{ width: 'auto', marginRight: '7px' }}>      <div class="item">
                                        <div data-bs-toggle="modal" data-bs-target="#Modalstory" class="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3" style={{backgroundImage:"url(images/s-1.jpg)"}}>
                                            <div class="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                                <a href="#">
                                                    <figure class="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1"><img src="images/user-11.png" alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                    <div class="clearfix"></div>
                                                    <h4 class="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">Victor Exrixon </h4>
                                                </a>
                                            </div>
                                        </div>
                </div>
                </div>
           
           
                <div className="owl-item" style={{ width: 'auto', marginRight: '7px' }}> 
 <div class="item">
                    <div data-bs-toggle="modal" data-bs-target="#Modalstory" class="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3" style={{backgroundImage:"url(images/s-2.jpg"}} >
                        <div class="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                            <a href="#">
                                <figure class="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1"><img src="images/user-12.png" alt="image" class="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                <div class="clearfix"></div>
                                <h4 class="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">Surfiya Zakir </h4>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
               
            
                </div>
                </div> 
            </div>
        </div>
    );
};

export default Stories;
