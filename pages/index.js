import CallToActionWithVideo from "../components/call_to_action_with_video";
import WithSubnavigation from "../components/navbar";
import ThreeTierPricing from "../components/pricing";
import GridBlurredBackdrop from "../components/testimonial";

export default function Home({ courses }) {
  return (
    <>
      <WithSubnavigation />
      <CallToActionWithVideo />
      <ThreeTierPricing />
      <GridBlurredBackdrop />
    </>
  );
}

export function getStaticProps() {
  const files = ["cpp-beginners.json", "java-beginners.json"];
  let courses = [];

  files.forEach((file) => {
    const course = require("../data/" + file);
    courses.push(course);
  });

  return {
    props: { courses },
  };
}
