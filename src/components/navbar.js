import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

class navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <>
        <header>
          <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  onClick={this.toggleClass}
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div
                className={classnames("navbar-collapse", {
                  active: this.state.active,
                })}
              >
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  onClick={this.toggleClass}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/" class="btn btn-default navbar-btn">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#contact-section-container"
                      title=""
                      class="anchor-link"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <Link to="/components" class="btn btn-default navbar-btn">
                      Components
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default navbar;
