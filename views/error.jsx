var React = require('react');

var ErrorMessgaes = React.createClass({
  render: function() {
    return (
      <html>
      <head>
        <title>Error</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
      </head>
        <body>
          <div className="container">
            <p>&nbsp;</p>
            <div className="row">
              <div className="col-md-6 col-md-offset-3" style={{textAlign: 'center'}}>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">Oops! 發生了一些錯誤！</h3>
                  </div>
                  <div className="panel-body">
                    趕緊聯絡 Silicon Trip
                    <br />
                    <a href="mailto:silicontrip.tw@gmail.com">silicontrip.tw@gmail.com</a>
                  </div>
                  <div className="panel-footer">
                    <a href="/" className="btn btn-primary btn-block">回首頁</a>
                    <a href="http://www.accupass.com/go/silicontrip2016" className="btn btn-success btn-block">立即報名</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </body>
      </html>
    );
  }
});

module.exports = ErrorMessgaes;
