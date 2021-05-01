import CourseSection from "../../components/course_section";
import WithSubnavigation from "../../components/navbar";

export default function CoursesPage({ courses }) {
  return (
    <>
      <WithSubnavigation />
      <CourseSection courses={courses} />
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
    const course = require("../../data/" + file);
    courses.push(course);
  });

  return {
    props: { courses },
  };
}
