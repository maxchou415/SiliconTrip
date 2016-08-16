var React = require('react');

var _contact = React.createClass({
  render: function() {
    return (
      <footer className="bg-dark" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" style={{marginBottom: 50}}>
              <h2 className="section-heading wow zoomIn" style={{marginTop: 50}}>捐贈與聯繫</h2>
              <hr className="primary wow zoomIn" />
              <p className="wow zoomIn">有任何問題？或是想幫助Silicon Trip？</p>
            </div>
            <div className="col-lg-6 text-center" style={{marginBottom: 50}}>
              <h4>捐贈給 Silicon Trip</h4>
              <i className="fa fa-cc-paypal fa-3x wow bounceIn" />
              <br />
              <a href="https://goo.gl/k4SgPR" className="btn btn-outline btn-info btn-lg" target="_blank">立即捐贈</a>
            </div>
            <div className="col-lg-6 text-center" style={{marginBottom: 50}}>
              <h4>聯絡</h4>
              <i className="fa fa-envelope-o fa-3x wow bounceIn" data-wow-delay=".1s" />
              <br />
              <a href="mailto:silicontrip.tw@gmail.com" className="btn btn-outline btn-success">silicontrip.tw@gmail.com</a>
              <p><a href="http://m.me/silicontrip.high" className="btn btn-outline btn-info" target="_blank">
                 Send Message on Facebook Messenger
              </a></p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = _contact;
