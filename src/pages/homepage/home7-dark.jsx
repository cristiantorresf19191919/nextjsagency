import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
import Services5 from "../../components/Services5/services5";
import WorksStyle4 from "../../components/Works-style4/works-style4";
import AboutUs5 from "../../components/About-us5/about-us5";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import SContactForm from "../../components/s-contact-form/s-contact-form";
import axios from "axios";
import If from "../../components/Common/If";

const Homepage = (props) => {
  // console.log("🚀 ~ file: home7-dark.jsx ~ line 15 ~ Homepage ~ props", props)
  const { header_picture } = props.data;
  const api = props.api;
  const headerData = { ...props.data };
  const image = api + header_picture?.data?.attributes?.url;
  const caracteristicas = props.caracteristicas;
  const portafolio = props.portafolio;
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  console.log(process.env.API);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <If Condition={headerData}>
        <FreelancreIntro headerData={headerData} image={image} />
      </If>
      <If Condition={caracteristicas}>
        <Services5 caracteristicas={caracteristicas} />
      </If>
      <If Condition={portafolio}>
        <WorksStyle4 portafolio={portafolio} api={api} />
      </If>
      <AboutUs5 />
      <FullTestimonials showHead />
      <Blogs2 />
      <SContactForm noLine />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage;

export async function getServerSideProps() {
  const url = process.env.API;
  //http://localhost:1337/api/karens
  const { data: { data } } = await axios.get(`${url}/api/karens?populate=*`);
  const portfolio = await axios.get(`${url}/api/karen-portafolios?populate=*`);
  const itemListIds = data[0]?.attributes?.karen_portafolios?.data.map(o => o.id);
  const itemList = portfolio.data.data.filter(o => itemListIds.includes(o.id));


  return {
    props: {
      data: data[0]?.attributes,
      api: process.env.API,
      caracteristicas: data[0]?.attributes?.caracteristicas,
      portafolio: {
        content: data[0]?.attributes?.portafolio,
        itemList
      }
    }
  }
}

