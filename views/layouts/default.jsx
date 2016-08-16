var React = require('react');


var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html lang="en">
        <head>
            <title>{this.props.title}</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
              <meta property="og:title" content="Silicon Trip" />
              <meta property="og:type" content="conference" />
              <meta property="og:url" content="https://silicontrip.cf" />
              <meta property="og:description" content="Silicon Trip 是幾個國、高中生自發性組織，主要是讓「國中」與「高中」生入門寫程式與體驗在矽谷當地的生活。" />
              <meta property="og:image" content="http://silicontrip.cf/images/ogimg.png" />
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
              <link rel="stylesheet" type="text/css" href="stylesheets/cust.css" />
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
        </head>

        <body id="top">
          <script dangerouslySetInnerHTML={{__html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-73949158-4', 'auto');
            ga('send', 'pageview');

          `}} />

          <nav className="navbar navbar-default navbar-alpha navbar-fixed-top">
            <div className="container-fluid">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand page-scroll" href="#top">Silicon Trip</a>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><a href="#about" className="page-scroll">關於</a></li>
                  <li><a href="#speaker" className="page-scroll">講師介紹 與 Work Shop</a></li>
                  <li><a href="#schedule" className="page-scroll">行程表</a></li>
                  <li><a href="#qanda" className="page-scroll">活動 Q&A</a></li>
                  <li><a href="#team" className="page-scroll">Core Team</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#supporters" className="page-scroll">贊助商</a></li>
                  <li><a href="#contact" className="page-scroll">聯絡我們</a></li>
                  <li><a href="#" target="_blank">立即報名</a></li>
                </ul>
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container-fluid */}
          </nav>
          {this.props.children}

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/FitText.js/1.2.0/jquery.fittext.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/spin.js/2.3.2/spin.min.js"></script>
          <script src="javascripts/silicontrip.js"></script>



          </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
