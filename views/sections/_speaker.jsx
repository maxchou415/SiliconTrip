var React = require('react');

var _speaker = React.createClass({
  render: function() {
    return (
      <section className="bg-cust6" id="speaker">
        <h1 className="text-center">講師介紹 與 Work Shop</h1>
        <hr className="light" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2><span className="label label-primary">主要講師</span></h2>
              <p />
                <div className="col-sm-6 no-padding-left">
                  <div className="thumbnail">
                    <img src="images/speakers/ofa.jpg" />
                    <div className="caption">
                      <h3>Ofa Hsueh</h3>
                      <h4>
                        <span className="label label-info">
                          Startup
                        </span>
                        &nbsp;
                        <span className="label label-success">
                          Silicon Valley
                        </span>
                        &nbsp;
                        <span className="label label-primary">
                          Main
                        </span>
                      </h4>
                      <p>畢業於台大電機的Ofa，畢業後隨其前往美國矽谷進修，待過幾家新創公司與在矽谷生活一陣子，對於創業與新創有相當經驗。Ofa Hsueh 將在 Silicon Trip 以他的歷練分享他在美國矽谷的所見所聞！
</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 no-padding-left">
                <div className="thumbnail">
                  <img src="images/speakers/minhanyang.jpg" />
                  <div className="caption">
                    <h3>楊明翰</h3>
                    <h4>
                      <span className="label label-info">
                        Startup
                      </span>
                      &nbsp;
                      <span className="label label-primary">
                        Main
                      </span>
                    </h4>
                    <p>現職Poster擔任CTO 。仍在就讀大同大學三年級的他，於兩年前開始創業，在創業中看見了真實社會會遇到的種種問題。楊明翰將在 Silicon Trip 提點各位同學未來「創業最忌諱必死的幾種雷坑」，以及科技趨勢走向的方想「AI 的技術分析和趨勢討論」。</p>
                </div>
              </div>
            </div>
          </div>
            <div className="col-md-5">
              <h2><span className="label label-success">Work Shop</span></h2>
              <p />
              <div className="col-sm-12">
                <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">軟體待你如初戀</h3>
                </div>
                <div className="panel-body black">
                   一見如故之 Introduction of Software
                </div>
              </div>

              <div className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title"> 硬體 Make server on Tiny-Computer </h3>
                </div>
                <div className="panel-body black">
                  實作小型Node.js 伺服器
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = _speaker;
