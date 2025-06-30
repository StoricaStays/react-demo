import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container-xxl bg-white p-0">
        {/* Header Start */}
        <div className="container-fluid bg-dark px-0">
          <div className="row gx-0">
            <div className="col-lg-3 bg-dark d-none d-lg-block">
              <Link
                href="/"
                className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
              >
                <h2 className="m-0 text-primary">Storica Stays</h2>
              </Link>
            </div>
            <div className="col-lg-9">
              <div className="row gx-0 bg-white d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                  <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                    <i className="fa fa-envelope text-primary me-2"></i>
                    <p className="mb-0">info@storicastays.com</p>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center py-2">
                    <i className="fa fa-phone-alt text-primary me-2"></i>
                    <p className="mb-0">
                      <a href="tel:+91 6378365775">+91 6378365775</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                  <div className="d-inline-flex align-items-center py-2">
                    <a
                      className="me-3"
                      href="https://www.instagram.com/storicastays"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/916378365775" title="WhatsApp">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
              <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                <Link href="/" className="navbar-brand d-block d-lg-none">
                  <h1 className="m-0 text-primary text-uppercase">Storica Stays</h1>
                </Link>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav mr-auto py-0">
                    <Link href="/" className="nav-item nav-link">Home</Link>
                    <Link href="/about" className="nav-item nav-link active">About</Link>
                    <Link href="/#Rooms" className="nav-item nav-link">Rooms</Link>
                    <Link href="/#Contact" className="nav-item nav-link">Contact</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Header End */}

        {/* Page Header Start */}
        <div className="container-fluid page-header mb-5 p-0" style={{background: "linear-gradient(rgba(47, 123, 191, 0.7), rgba(47, 123, 191, 0.7)), url(img/General/CKC03886-HDR.jpg)"}}>
          <div className="container-fluid page-header-inner py-5">
            <div className="container text-center pb-5">
              <div className="row justify-content-center">
                <div className="col-lg-10 pt-lg-5 mt-lg-5">
                  <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h6 className="section-title text-start text-primary text-uppercase">
                  About Us
                </h6>
                <h1 className="mb-4">
                  Welcome to{" "}
                  <span className="text-primary text-uppercase">Storica Stays</span>
                </h1>
                <p className="mb-4">
                  Nestled amidst the timeless beauty of Jodhpur, Storica Stays
                  invites you to experience an unforgettable journey. With
                  stunning fort views from its rooftop restaurant, this heritage
                  backpacker hostel promises a unique blend of comfort and
                  adventure.
                </p>
                <p className="mb-4">
                  Discover cosy dormitory rooms and a private double
                  bedroom, designed to provide a peaceful oasis in the heart of
                  the city&apos;s vibrant old town. Our heritage property combines
                  traditional Rajasthani architecture with modern amenities to
                  ensure your stay is both authentic and comfortable.
                </p>
                <div className="row g-3 pb-4">
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                        <h2 className="mb-1">5</h2>
                        <p className="mb-0">Room Types</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                        <h2 className="mb-1">24/7</h2>
                        <p className="mb-0">Support</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-star fa-2x text-primary mb-2"></i>
                        <h2 className="mb-1">4.8</h2>
                        <p className="mb-0">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link className="btn btn-primary py-3 px-5 mt-2" href="/#Contact">Contact Us</Link>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-end">
                    <Image
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.1s"
                      src="img/General/CKC03844-HDR.jpg"
                      style={{marginTop: "25%"}}
                      alt="Storica Stays Heritage Property"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="col-6 text-start">
                    <Image
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.3s"
                      src="img/General/CKC03886-HDR.jpg"
                      alt="Rooftop Restaurant View"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <Image
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.5s"
                      src="img/General/CKC03983-HDR.jpg"
                      alt="Heritage Architecture"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="col-6 text-start">
                    <Image
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.7s"
                      src="img/General/CKC03907-HDR.jpg"
                      alt="Traditional Decor"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Features Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-primary text-uppercase">Our Features</h6>
              <h1 className="mb-5">Why Choose <span className="text-primary text-uppercase">Storica Stays</span></h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-fort-awesome text-primary mb-4"></i>
                    <h5>Heritage Property</h5>
                    <p>Experience authentic Rajasthani architecture and traditional design in our beautifully restored heritage building.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                    <h5>Rooftop Restaurant</h5>
                    <p>Enjoy delicious local and international cuisine with stunning fort views from our rooftop restaurant.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-map-marker-alt text-primary mb-4"></i>
                    <h5>Prime Location</h5>
                    <p>Located in the heart of Jodhpur&apos;s old town, walking distance to major attractions and markets.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-wifi text-primary mb-4"></i>
                    <h5>Free WiFi</h5>
                    <p>Stay connected with complimentary high-speed internet access throughout the property.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-concierge-bell text-primary mb-4"></i>
                    <h5>24/7 Reception</h5>
                    <p>Our friendly staff is available round the clock to assist you with any needs or travel arrangements.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-shield-alt text-primary mb-4"></i>
                    <h5>Safe & Secure</h5>
                    <p>Your safety is our priority with secure lockers, CCTV surveillance, and well-lit common areas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features End */}

        {/* Footer Start */}
        <div
          className="container-fluid bg-dark text-light footer wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container pb-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-4">
                <div className="bg-primary rounded p-4">
                  <Link href="/"><h1 className="text-white text-uppercase mb-3">Storica Stays</h1></Link>
                  <p className="text-white mb-0">
                    Experience the heritage and hospitality of Jodhpur at Storica Stays.
                    Your gateway to the Blue City&apos;s rich culture and history.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h6
                  className="section-title text-start text-primary text-uppercase mb-4"
                >
                  Contact
                </h6>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3"></i>Toorji Ka Jhalra,
                  Jodhpur, Rajasthan
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3"></i>
                  <a href="tel:+91 6378365775">+91 6378365775</a>
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3"></i>info@storicastays.com
                </p>
                <div className="d-flex pt-2 gap-2">
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://www.instagram.com/storicastays"
                  ><i className="fab fa-instagram"></i></a>
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://wa.me/916378365775"
                  ><i className="fab fa-whatsapp"></i></a>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="row gy-5 g-4">
                  <div className="col-md-6">
                    <h6
                      className="section-title text-start text-primary text-uppercase mb-4"
                    >
                      Company
                    </h6>
                    <Link className="btn btn-link" href="/about">About Us</Link>
                    <Link className="btn btn-link" href="/#Contact">Contact Us</Link>
                  </div>
                  <div className="col-md-6">
                    <h6
                      className="section-title text-start text-primary text-uppercase mb-4"
                    >
                      Services
                    </h6>
                    <a className="btn btn-link" href="">Food & Restaurant</a>
                    <a className="btn btn-link" href="">Event & Party</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy; <a className="border-bottom" href="#">Storica Stays</a>, All
                  Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                  Designed by <a className="border-bottom" href="#">Storica Team</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}

        {/* Floating Action Buttons */}
        <div className="fixed-bottom d-flex justify-content-end m-3">
          <div className="d-flex flex-column gap-2">
            <a
              href="https://wa.me/916378365775"
              target="_blank"
              className="btn btn-success btn-lg rounded-circle"
              title="Chat on WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="tel:+916378365775"
              className="btn btn-primary btn-lg rounded-circle"
              title="Call Us"
            >
              <i className="fa fa-phone-alt"></i>
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
  );
}
