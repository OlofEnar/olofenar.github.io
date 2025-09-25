import { Helmet } from "react-helmet";
import Footer from "@/components/footer/Footer";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Olof Maleki Nordin</title>
        <meta
          name="description"
          content="Learn more about Olof Maleki Nordin – software developer, UX designer, and creative thinker based in Sweden."
        />
        <link rel="canonical" href="https://olofenar.github.io/about" />
      </Helmet>
      <Footer />
    </>
  );
}
