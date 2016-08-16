var React = require('react');

var _supporters = React.createClass({
  render: function() {
    return (
      <section className="bg-cust7" id="supporters">
        <div className="container">
          <h1 className="text-center">贊助商</h1>
          <hr className="light" />
          <div className="row">
            <div className="col-md-6">
              <h2><span className="label label-primary">白銀級贊助</span></h2>
              <p></p>
              <blockquote>
                <h3>
                  <a href="http://www.ossf.org.tw" target="_blank">
                    富昌OSS基金會
                  </a>
                </h3>
              </blockquote>

              <h2><span className="label label-warning">場地協助</span></h2>
              <p></p>
              <blockquote>
                <h3>
                  <a href="http://www.tcyd.gov.taipei/" target="_blank">
                    臺北市青少年發展處
                  </a>
                </h3>
              </blockquote>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = _supporters;
