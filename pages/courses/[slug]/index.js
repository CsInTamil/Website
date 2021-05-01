import {
  AspectRatio,
  Flex,
  Text,
  Stack,
  Container,
  VStack,
  Heading,
} from "@chakra-ui/layout";
import WithSubnavigation from "../../../components/navbar";

export default function SingleCoursePage({ course }) {
  return (
    <>
      <WithSubnavigation />
      <Flex align="center" direction="column" mt={10} p={1}>
        <AspectRatio
          position={"relative"}
          width={{ base: "full", md: "70%" }}
          ratio={16 / 9}
        >
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/" + course.videos[0].video_id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <Heading
          mt={{ base: 5, sm: 8, lg: 10 }}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          {course.videos[0].title}
        </Heading>
      </Flex>
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
