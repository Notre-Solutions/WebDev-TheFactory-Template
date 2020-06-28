import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Landing = ({ data }) => {
  const {
    img01,
    img02,
    img03,
    img04,
    img05,
  } = data.markdownRemark.frontmatter.landingPage;

  return (
    <Layout current="landing">
      <div class="background-image-container white-text-container hero-bg">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>The Factory</h1>
              <p class="">THE BEST PLACE FOR WORK TOGETHER</p>
              <a
                href="#contact-section-container"
                class="btn btn-primary btn-lg anchor-link"
                title=""
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-12 section-container-spacer">
              <h2 class="text-center">Vivamus laoreet</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-4">
              <div class="fa-container">
                <i class="fa fa-comment-o fa-3x" aria-hidden="true"></i>
              </div>
              <h3 class="text-center">Consectetur</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>

            <div class="col-xs-12 col-md-4">
              <div class="fa-container">
                <i class="fa fa-heart-o fa-3x" aria-hidden="true"></i>
              </div>
              <h3 class="text-center">Malesuada</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="col-xs-12 col-md-4">
              <div class="fa-container">
                <i class="fa fa-bell-o fa-3x" aria-hidden="true"></i>
              </div>
              <h3 class="text-center">Phasellus</h3>
              <p>
                {" "}
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container section-half-background-image-container">
        <div class="image-column landing-mid-bg"></div>
        <div class="container">
          <div class="row">
            <div class="section-label reveal">
              <p>Coworking</p>
            </div>
            <div class="col-md-6 col-md-offset-6 text-column">
              <h2>Dui augue orci</h2>
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sit amet consectetur dolor. Phasellus ut lacus tellus. In
                pretium lobortis blandit. Nam eu laoreet velit. Vivamus laoreet,
                sem nec scelerisque elementum, dui augue aliquet urna, ut
                bibendum purus erat ut massa. Mauris diam orci, feugiat a turpis
                et, congue accumsan risus. Nulla malesuada leo sodales, auctor
                augue quis, condimentum lacus. Phasellus sed sollicitudin quam,
                a bibendum urna.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sit amet consectetur dolor. Phasellus « ut lacus » tellus. In
                pretium lobortis blandit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sit amet consectetur dolor. Phasellus ut lacus tellus. In
                pretium lobortis blandit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-12 section-container-spacer">
              <h2 class="text-center">Consectetur adipiscing</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-4">
              <Img
                className="img-responsive"
                alt=""
                fluid={img02.childImageSharp.fluid}
              />
              <h3 class="text-center">Consectetur</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sit amet consectetur dolor. Phasellus ut lacus tellus. In
                pretium lobortis blandit.
              </p>
            </div>

            <div class="col-xs-12 col-md-4">
              <Img
                className="img-responsive"
                alt=""
                fluid={img03.childImageSharp.fluid}
              />

              <h3 class="text-center">Malesuada</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sit amet consectetur dolor. Phasellus ut lacus tellus. In
                pretium lobortis blandit.
              </p>
            </div>
            <div class="col-xs-12 col-md-4">
              <Img
                className="img-responsive"
                alt=""
                fluid={img04.childImageSharp.fluid}
              />
              <h3 class="text-center">Phasellus</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sit amet consectetur dolor. Phasellus ut lacus tellus. In
                pretium lobortis blandit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="container-fluid">
          <div class="row map-container">
            <div id="map"></div>
            <div class="col-xs-10 col-md-4 contact-block-container reveal">
              <div class="row">
                <div class="col-xs-12 col-sm-6">
                  <h3>Phone</h3>
                  <p>+ 123 45 67 890</p>

                  <h3>E-mail</h3>
                  <p>hello@email.com</p>
                </div>

                <div class="col-xs-12 col-sm-6">
                  <h3>Address</h3>
                  <p>42 rue rouelle 75015, Paris</p>

                  <h3>Open hours</h3>
                  <p>Mon - Fri : 9AM - 5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </Layout>
  );
};

export default Landing;

export const pageQuery = graphql`
  query landingQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          img01 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img02 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img03 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img04 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img05 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
