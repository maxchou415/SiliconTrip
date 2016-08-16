var React = require('react');

var _top = React.createClass({
  render: function() {
    return (
        <header>
          <div className="header-content">
            <div className="header-content-inner" style={{visibility: 'visible', animationName: 'zoomIn'}}>
              <h1 style={{fontSize: 65}}>Silicon Trip</h1>
              <hr />
              <p>在台灣體驗矽谷生活</p>
              <a href="jacascript: alert('6/29 晚間十點開放報名！');" className="page-scroll btn btn-outline btn-success btn-lg" target="_blank">立即報名</a>
              <a href="#about" className="page-scroll btn btn-outline btn-info btn-lg">瞭解更多</a>
	            <p>&nbsp;</p>
	            <h3><span className="label label-success">活動期間：July 22 ~ July 24</span></h3>
            </div>
          </div>
        </header>
    );
  }
});

module.exports = _top;
