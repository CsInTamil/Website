import { Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/layout";
import CourseCard from "./course_card";

export default function CourseSection({ courses }) {
  return (
    <VStack py={10}>
      <Heading>Popular Courses</Heading>
      <Flex
        pt={10}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
      >
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          mt={16}
          mx={"auto"}
        >
          {courses.map((c, index) => (
            <CourseCard course={c} key={index} />
          ))}
        </SimpleGrid>
      </Flex>
    </VStack>
  );
}
