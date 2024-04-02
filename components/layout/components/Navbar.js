import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="nav-header bg-white shadow-xs border-0">
            <div className="nav-top">
                <Link href="/"><a><i className="feather-zap text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Sociala. </span> </a></Link>
                <Link href="#"><a className="mob-menu ms-auto me-2 chat-active-btn"><i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></a></Link>
                <Link href="/default-video"><a className="mob-menu me-2"><i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i></a></Link>
                <Link href="#"><a className="me-2 menu-search-icon mob-menu"><i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></a></Link>
                <button className="nav-menu me-0 ms-2"></button>
            </div>
            
            <form action="#" className="float-left header-search">
                <div className="form-group mb-0 icon-input">
                    <i className="feather-search font-sm text-grey-400"></i>
                    <input type="text" placeholder="Start typing to search.." className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg" />
                </div>
            </form>
            <Link href="/default"><a className="p-2 text-center ms-3 menu-icon center-menu-icon"><i className="feather-home font-lg alert-primary btn-round-lg theme-dark-bg text-current "></i></a></Link>
            <Link href="/default-storie"><a className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-zap font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></a></Link>
            <Link href="/default-video"><a className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-video font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></a></Link>
            <Link href="/default-group"><a className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-user font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></a></Link>
            <Link href="/shop-2"><a className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-shopping-bag font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></a></Link>

            <a href="#" className="p-2 text-center ms-auto menu-icon" id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false"><span className="dot-count bg-warning"></span><i className="feather-bell font-xl text-current"></i></a>
            <div className="dropdown-menu dropdown-menu-end p-4 rounded-3 border-0 shadow-lg" aria-labelledby="dropdownMenu3">
                
                <h4 className="fw-700 font-xss mb-4">Notification</h4>
                <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img src="/images/user-8.png" alt="user" className="w40 position-absolute left-0" />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Hendrix Stamp <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 3 min</span></h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">There are many variations of pass..</h6>
                </div>
                <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img src="/images/user-4.png" alt="user" className="w40 position-absolute left-0" />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Goria Coast <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 2 min</span></h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                </div>

                <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img src="/images/user-7.png" alt="user" className="w40 position-absolute left-0" />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Surfiya Zakir <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 1 min</span></h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                </div>
                <div className="card bg-transparent-card w-100 border-0 ps-5">
                    <img src="/images/user-6.png" alt="user" className="w40 position-absolute left-0" />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Victor Exrixon <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 30 sec</span></h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                </div>
            </div>
            <a href="#" className="p-2 text-center ms-3 menu-icon chat-active-btn"><i className="feather-message-square font-xl text-current"></i></a>
            <div className="p-2 text-center ms-3 position-relative dropdown-menu-icon menu-icon cursor-pointer">
                <i className="feather-settings animation-spin d-inline-block font-xl text-current"></i>
                <div className="dropdown-menu-settings switchcolor-wrap">
                    <h4 className="fw-700 font-sm mb-4">Settings</h4>
                    <h6 className="font-xssss text-grey-500 fw-700 mb-3 d-block">Choose Color Theme</h6>
                    <ul>
                        <li>
                            <label className="item-radio item-content">
                                <input type="radio" name="color-radio" value="red" checked /><i className="ti-check"></i>
                                <span className="circle-color bg-red" style={{backgroundColor: '#ff3b30'}}></span>
                            </label>
                        </li>
                        {/* Add the rest of the color theme options */}
                    </ul>
                    
                    {/* Add the rest of the settings options */}
                </div>
            </div>
            

            <Link href="/default-settings"><a className="p-0 ms-3 menu-icon"><img src="/images/profile-4.png" alt="user" className="w40 mt--1" /></a></Link>
            
        </div>
    );
};

export default Navbar;
