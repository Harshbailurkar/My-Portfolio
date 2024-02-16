import Hero from "./section/Hero";
import ProjectList from "./section/ProjectList";
import GitStats from "./section/GitStats";
import { Fade, Slide } from "react-awesome-reveal";
export default function Project() {
  return (
    <div>
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
