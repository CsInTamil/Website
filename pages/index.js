import { useEffect } from "react";
import CallToActionWithVideo from "../components/call_to_action_with_video";
import CourseSection from "../components/course_section";
import WithSubnavigation from "../components/navbar";
import ThreeTierPricing from "../components/pricing";
import GridBlurredBackdrop from "../components/testimonial";

export default function Home({ courses }) {
  useEffect(() => {
    courses.forEach((course) => {
      console.log(course.title);
    });
  }, []);
  return (
    <>
      <WithSubnavigation />
      <CallToActionWithVideo />
      <CourseSection courses={courses} />
      <ThreeTierPricing />
      <GridBlurredBackdrop />
    </>
  );
}

export function getStaticProps() {
  const files = [
    "cpp-beginners.json",
    "python-beginners.json",
    "java-beginners.json",
    "ds-beginners.json",
  ];
  let courses = [];

  files.forEach((file) => {
    const course = require("../data/" + file);
    courses.push(course);
  });

  return {
    props: { courses },
  };
}
