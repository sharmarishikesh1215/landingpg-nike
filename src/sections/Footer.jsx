const Footer = () => {
  return (
    <section id="footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mx-20">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary mx-20">
            © 2024 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://x.com/RishikeshS91606">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.facebook.com/rishikesh.sharma.1840/">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.instagram.com/ig_rlshl/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;
