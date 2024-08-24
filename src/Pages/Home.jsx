import Hero from "./../Components/Hero/Hero";
import Services from "./../Components/Services/Services";
import HomeContact from "./../Components/HomeContact/HomeContact";
import Clients from "./../Components/Clients/Clients";
import Works from "./../Components/Work/Work";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <Works />
      <HomeContact />
    </>
  );
}

export default Home;
