import { AspectRatio, Flex, Heading, Text } from "@chakra-ui/layout";
import WithSubnavigation from "../../../components/navbar";
import VideoList from "../../../components/video_list";
import { courses_list } from "../../../lib/courses_list";

export default function CourseIdPage({ course, id }) {
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
            src={
              "https://www.youtube.com/embed/" + course.videos[id - 1].video_id
            }
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
          {course.videos[id - 1].title}
        </Heading>
        <VideoList slug={course.slug} videos={course.videos} />
      </Flex>
    </>
  );
}

export function getStaticProps(context) {
  const { slug, id } = context.params;
  const filename = slug + ".json";
  const course = require("../../../data/" + filename);

  return {
    props: {
      course,
      id,
    },
  };
}

export function getStaticPaths() {
  let paths = [];
  for (let i = 0; i < courses_list.length; i++) {
    const course = require("../../../data/" + courses_list[i]);
    for (let j = 1; j <= course.videos.length; j++) {
      paths.push({
        params: {
          slug: courses_list[i],
          id: "" + j,
        },
      });
    }
  }

  return { paths, fallback: false };
}
