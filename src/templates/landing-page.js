import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import CardsIcon from "../components/cards/cardsWithIcon";
import CardsImg from "../components/cards/cardsWithImage";
import Form from "../components/form";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Map from "../components/map";

const Landing = ({ data }) => {
  const {
    title,
    subtitle,
    iconCards,
    paragraphSection,
    imgCards,
    contact,
    staticMap,
  } = data.markdownRemark.frontmatter.landingPage;
  console.log(staticMap);
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
      <div class="background-image-container black-text-container hero-bg">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>{title}</h1>
              <p class="">{subtitle}</p>
              <AnchorLink
                href="#contact-section-container"
                class="btn btn-primary btn-lg anchor-link"
                title=""
              >
                Get in touch
              </AnchorLink>
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
            <div class="section-label reveal vertical-title">
              <div
                data-sal="slide-left"
                data-sal-easing="ease"
                data-sal-duration="2000"
              >
                <p>{vertialTitle}</p>
              </div>
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
      <Map phone={phone} email={email} address={address} hours={hours} />
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
                    ...GatsbyImageSharpFluid_withWebp_noBase64
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
