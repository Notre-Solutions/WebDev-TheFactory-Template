import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import CardsIcon from "../components/cards/cardsWithIcon";
import CardsImg from "../components/cards/cardsWithImage";
import Form from "../components/form";

const Landing = ({ data }) => {
  const {
    title,
    subtitle,
    iconCards,
    paragraphSection,
    imgCards,
    contact,
  } = data.markdownRemark.frontmatter.landingPage;
  const { phone, address, hours, email } = contact;
  const { imgCardTitle, cards } = imgCards;
  const {
    vertialTitle,
    paragraph,
    subTitle,
    paragraphTitle,
  } = paragraphSection;
  const { cardTitle, cardsIcon } = iconCards;

  return (
    <Layout current="landing">
      <div class="background-image-container white-text-container hero-bg">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>{title}</h1>
              <p class="">{subtitle}</p>
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
              <h2 class="text-center">{cardTitle}</h2>
            </div>
          </div>
          <div class="row">
            {cardsIcon.map((card) => {
              return (
                <CardsIcon heading={card.title} icon={card.icon}>
                  {card.paragraph}
                </CardsIcon>
              );
            })}{" "}
          </div>
        </div>
      </div>
      <div class="section-container section-half-background-image-container">
        <div class="image-column landing-mid-bg"></div>
        <div class="container">
          <div class="row">
            <div class="section-label reveal">
              <p>{vertialTitle}</p>
            </div>
            <div class="col-md-6 col-md-offset-6 text-column">
              <h2>{paragraphTitle}</h2>
              <h3>{subTitle}</h3>
              {paragraph}{" "}
            </div>
          </div>
        </div>
      </div>
      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-12 section-container-spacer">
              <h2 class="text-center">{imgCardTitle}</h2>
            </div>
          </div>
          <div class="row">
            {cards.map((card) => {
              return (
                <CardsImg heading={card.title} img={card.img}>
                  {card.paragraph}
                </CardsImg>
              );
            })}{" "}
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
                  <p>{phone}</p>

                  <h3>E-mail</h3>
                  <p>{email}</p>
                </div>

                <div class="col-xs-12 col-sm-6">
                  <h3>Address</h3>
                  <p>{address}</p>

                  <h3>Open hours</h3>
                  <p>{hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </Layout>
  );
};

export default Landing;

export const pageQuery = graphql`
  query landingQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          title
          subtitle
          iconCards {
            cardTitle
            cardsIcon {
              icon
              title
              paragraph
            }
          }
          paragraphSection {
            vertialTitle
            paragraphTitle
            subTitle
            paragraph
          }
          imgCards {
            imgCardTitle
            cards {
              img {
                childImageSharp {
                  fluid(maxWidth: 10000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              paragraph
            }
          }
          contact {
            phone
            address
            hours
            email
          }
        }
      }
    }
  }
`;
