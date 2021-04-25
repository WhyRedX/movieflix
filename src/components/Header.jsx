import React from "react";

function Header() {
  return (
    <header id="header" className="centre">
      <div className="header-container">
          <h1>
            Unlimited movies, TV
            <br />
            shows and more.
          </h1>
          <p1>Watch anywhere. Cancel anytime.</p1>
          <div className="header-email-form">
            <p2>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p2>
            <div className="email-form">
              <input type="email" placeholder="Email address" required/>
                <button className="btn">Get Started</button>
              </div>
          </div>
      </div>
    </header>
  );
}

export default Header;
