import { Helmet } from "react-helmet";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Olof Maleki Nordin | Designer | Developer</title>
        <meta
          name="description"
          content="Olof is a software engineer and designer creating elegant digital experiences."
        />
        <link rel="canonical" href="https://olofenar.github.io/" />
      </Helmet>
      <Hero />
      <Projects />
    </>
  );
}
