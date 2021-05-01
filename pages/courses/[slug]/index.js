import WithSubnavigation from "../../../components/navbar";

export default function SingleCoursePage({ course }) {
  return (
    <>
      <WithSubnavigation />
      {course.title}
    </>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const filename = slug + ".json";
  const course = require("../../../data/" + filename);

  return {
    props: {
      course,
    },
  };
}

export function getStaticPaths() {
  const arr = [
    "cpp-beginners",
    "java-beginners",
    "ds-beginners",
    "python-beginners",
  ];
  const paths = arr.map((slug) => {
    return {
      params: { slug },
    };
  });
  return { paths, fallback: false };
}
