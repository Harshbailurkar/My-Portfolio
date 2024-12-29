import Hero from "./section/Hero";
import ProjectList from "./section/ProjectList";
import GitStats from "./section/GitStats";
import { Fade, Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
export default function Project() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Harsh Bailurkar's Projects</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Fade
        cascade
        damping={0.1}
        triggerOnce={true}
        style={{ opacity: 0.9, transition: "opacity 1s ease-in-out" }}
      >
        <Hero />
        <Slide triggerOnce direction={"right"}>
          <ProjectList />
        </Slide>
        <GitStats />
      </Fade>
    </div>
  );
}
