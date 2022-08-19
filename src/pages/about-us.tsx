import React from "react";
import HorizontalCard from "../components/horizontal-card";
import ParagraphsCard from "../components/paragraphs-card";

const AboutUsPage = () => {
  return (
    <div className="px-4 py-10">
      <h1 className="font-normal text-5xl lg:text-7xl my-12 text-center">
        About us
      </h1>
      <HorizontalCard
        title="Newspaper from scratch"
        tagline="Our company creates with a hobby"
        subHeading="Employed people"
        paragraph="We focus on and take care of the development of our articles, taking care of the highest level. Meet our creators and their biographies."
        imageUrl="https://images.unsplash.com/photo-1625267646990-53700ff2b49b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        borderBottom={true}
      />
      <HorizontalCard
        title="Our mission"
        tagline="We always look to the future"
        paragraph="We focus on and care for the development of our employees, taking care of the highest level of production. We provide constant and scientific work, focusing on benefit."
        imageUrl="https://images.unsplash.com/photo-1571799508219-988c35b4d06a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
        flip={true}
      />
      <ParagraphsCard
        heading="Evolution System"
        para1="We have a modern STUDIO platform, where we can edit content and adjust our content for optimal display on any desktop and mobile device. The page loading speed is also optimized. Get to know our office and where to visit us. This is just an example of information about our activities."
        para2="We are a company that has been operating on the market for over 20 years. We have created many startup projects during this time. Our office is a process that we create all the time"
      />
    </div>
  );
};

export default AboutUsPage;
