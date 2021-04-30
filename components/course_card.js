import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Flex, Heading, Text, VStack } from "@chakra-ui/layout";

export const CourseCard = ({ course }) => {
  return (
    <Flex
      w={["sm", "sm", "md", "md"]}
      direction="column"
      alignItems="center"
      p={2}
      borderWidth="1px"
      borderRadius="md"
      shadow="md"
      _hover={{ bg: "#ebedf0", transform: "translateY(-2px)" }}
    >
      <Image src={course.image} />
      <Heading fontSize="md" mt={3}>
        {course.title}
      </Heading>
      <Text mt={5}>{course.description}</Text>
      <Button
        w="100%"
        mt={5}
        mb={5}
        bg="green.400"
        color="white"
        _hover={{ bg: "green.500", transform: "translateY(-2px)" }}
      >
        Start
      </Button>
      {course.price ? (
        <Badge alignSelf="flex-end" fontSize="md" colorScheme="yellow">
          {course.price}
        </Badge>
      ) : (
        <Badge alignSelf="flex-end" fontSize="md" colorScheme="green">
          Free
        </Badge>
      )}
    </Flex>
  );
};
