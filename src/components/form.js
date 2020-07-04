import React from "react";

const Form = () => {
  return (
    <>
      <div class="section-container" id="contact-section-container">
        <div class="container contact-form-container">
          <div class="row">
            <div class="col-xs-12 col-md-offset-2 col-md-8">
              <div class="section-container-spacer">
                <h2 class="text-center">Get in touch</h2>
              </div>
              <form action="">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div class="form-group">
                  <label class="checkbox-inline">
                    <input
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    Email me a copy
                  </label>
                  <label class="checkbox-inline">
                    <input
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    I am a human
                  </label>
                </div>

                <button type="submit" class="btn btn-primary">
                  Send message
                </button>
                <a href="" class="btn btn-default">
                  Reset
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
