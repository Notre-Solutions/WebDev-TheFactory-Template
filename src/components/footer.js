import React from "react";

export default function footer() {
  return (
    <footer class="footer-container white-text-container">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4>About us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet consectetur dolor
            </p>
          </div>

          <div class="col-md-4">
            <h4>Do you like ? Share this !</h4>
            <div>
              <p>
                <a href="https://www.twitter.com" class="fa-icon" title="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://www.facebook.com" class="fa-icon" title="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com" class="fa-icon" title="">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </p>
            </div>
            <div>
              <p>
                <small>
                  © Untitled | Website created with{" "}
                  <a
                    href="http://www.notre-studio.co.uk"
                    title="Visit Notre Studio to get online"
                  >
                    Notre Studio Template
                  </a>
                  /
                  <a
                    href="https://www.unsplash.com/"
                    title="Beautiful Free Images"
                  >
                    Thanks to Unsplash for the beautiful images
                  </a>
                </small>
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <h4>Subscribe to newsletter</h4>

            <div class="form-group">
              <div class="input-group">
                <input type="text" class="form-control footer-input-text" />
                <div class="input-group-btn">
                  <button type="button" class="btn btn-default btn-newsletter ">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
