var React = require('react');

var _team = React.createClass({
  render: function() {
    return (
      <section className="bg-cust5" id="team">
        <div className="container">
          <h1 className="text-center">Core Team 主辦單位介紹</h1>
          <hr className="light" />
          <p />
            <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="thumbnail">
                    <img src="images/membersphoto/max.jpg" />
                    <div className="caption">
                      <h3>Yi-Hsun Max Chou</h3>
                      <h4>
                        <span className="label label-info">
                          Co-Founder
                        </span>
                      </h4>
                      <p>
                        寫網站是我的樂趣，我對網站的情有獨鍾無人能懂 <br />
                        目前國三畢業，一天到晚debug 到深夜<br />
                        從矽谷回來後，為了高中生的未來而戰，改變現今問題 let Taiwan get better
                      </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <img src="images/membersphoto/kaiyowu.jpg" />
                  <div className="caption">
                    <h3>Kaiyo Wu</h3>
                    <h4>
                      <span className="label label-info">
                        Co-Founder
                      </span>
                    </h4>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="thumbnail">
                <img src="images/membersphoto/leeon.jpg" />
                <div className="caption">
                  <h3>薛澄溱 Lee On</h3>
                  <p>
                    高中自學生 (Home-Schooling) 熱愛自學生活，徜徉在軟體的海域之中好一陣子，最近在修習機器學習。和程式語言 Java 關係非凡、共生共存。<br />立志讓台灣教育突破封鎖線！
                  </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img src="images/membersphoto/wuyan.jpg" />
              <div className="caption">
                <h3>吳家鴻</h3>
                <p>
                  吳言 中壢人<br />
                  目前暫居中壢高中三年級<br />
                  跟你們很多人一樣 不會寫程式<br />
                  專長美工拍攝剪輯<br />
                  崇尚墨子思想卻常常嘴炮<br />
                </p>
            </div>
          </div>
        </div>

          </div>
        </div>
      </section>
    );
  }
});

module.exports = _team;
