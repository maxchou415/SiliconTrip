var React = require('react');

var _schedule = React.createClass({
  render: function() {
    return (
      <section className="bg-cust3" id="schedule">
        <h1 className="text-center">行程表</h1>
        <p />
        <hr className="light" />
        <div className="row">
          <div className="col-md-12 black">
            <div className="col-md-6 col-md-offset-3">
              <div className="well center">
                  <h2>Main Talk</h2>
                  <h3>
                     <span className="label label-success">Run A startup</span>
                       <p />
                     <span className="label label-primary">A man in Silicon Valley</span>
                       <p />
                     <span className="label label-info">15-year-old in Silicon Valley</span>
                  </h3>
              </div>
            </div>
            <p>&nbsp;</p>
            <div className="col-md-4">
              <div className="well">
                <h2>Day 1</h2>
                <ol>
                  <li>08:30-09:20	學員簽到</li>
                  <li>09:30-10:00 Welcome to Silicon Trip Summer 2016 </li>
                  <li>10:00-11:00	A man in Silicon Valley（Speaker：Ofa Hsueh ）</li>
                  <li>11:10-12:10 15-year-old in Silicon Valley (Speaker: Max Chou)</li>
                  <li>12:10-13:20	Lunch Time && Chatting </li>
                  <li>13:30-15:00 Workshop: 軟體待你如初戀（Speaker： LeeOn）</li>
                  <li>14:00-18:00 Workshop: Make server on Tiny-Computer</li>
                  <li>18:00-21:00	Night Party && Dinner && How to Play Soda Pong</li>
                </ol>
              </div>
            </div>
            <div className="col-md-4">
              <div className="well">
                <h2>Day 2</h2>
                <ol>
                   <li>08:00-08:30  報到</li>
                   <li>08:30-09:30  Breakfast</li>
                   <li>09:30-10:30  Run A Startup (Speaker：楊明翰)</li>
                   <li>10:30-12:00  Hackathon (What's hackathon && Get your *partners)</li>
                   <li>12:00-14:00	Lunch Time && Chatting</li>
                   <li>14:00-15:30	Hackathon Day 1</li>
                   <li>15:45-17:00  自學Get！（Lee On && Ｍax）</li>
                   <li>17:00-20:00  Cooking *Sharing && Party</li>
                </ol>
              </div>
            </div>
            <div className="col-md-4">
              <div className="well">
                <h2>Day 3</h2>
                <ol>
                   <li>07:30-08:00  報到</li>
                   <li>08:00-09:00	Breakfast</li>
                   <li>09:00-11:00	Hackathon Day 2</li>
                   <li>11:00-13:00	Lunch Time && Chatting</li>
                   <li>13:15-14:00  The incentive to change (Unconference, Speaker: Anonymous)</li>
                   <li>14:00-18:00	Hackathon Demo && What you learn here</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = _schedule;
