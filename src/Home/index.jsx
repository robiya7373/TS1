import React from "react";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import System from "../Components/Systems/System";
import Team from "../Components/Team/Team";
import Design from "../Components/Design/Design";
import Optimization from "../Components/Optimization/Optimization";
import Consulting from "../Components/Consulting/Consulting";
import Clients from "../Components/Clients/Clients";
import Application from "../Components/Application/Application";
import Develer from "../Components/Develer/Develer";
import SmsUz from "../Components/SmsUz/Sms";
import Goodzone from "../Components/Goodzone/Goodzone";
import Iman from "../Components/Iman/Iman";
import Work from "../Components/Work/Work";
import Contact from "../Components/Contact/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Team />
      <Application />
      <System />
      <Design />
      <Optimization />
      <Consulting />
      <Clients />
      <Develer />
      <SmsUz />
      <Goodzone />
      <Iman />
      <Work />
      <Contact />
    </main>
  );
};

export default Home;
