import Jumbotron from "@/components/jumbotron/page";
import Purpose from "@/components/body/purpose/page";
import Content from "@/components/body/content/page";
import About from "@/components/body/about/page";

const Home = () => {
  return(
    <>
      <Jumbotron/>
      <Purpose/>
      <Content/>
      <About/>
    </>
  );
};
export default Home;
