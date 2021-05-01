import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  Button,
  Badge,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function CourseCard({ course }) {
  return (
    <Center py={6}>
      <Box
        maxW="445px"
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        transition="all 0.3s ease-in-out"
        _hover={{
          transform: "translateY(-5px)",
        }}
      >
        <Box
          h="210px"
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={{ base: 10, md: 12 }}
          pos={"relative"}
        >
          <Image src={course.image} fit="fill" />
        </Box>
        <Stack>
          {course.price === "0" ? (
            <Badge
              fontSize="0.8em"
              alignSelf="flex-start"
              variant="subtle"
              colorScheme="green"
              borderRadius="5px"
              p={1}
            >
              Free
            </Badge>
          ) : (
            <Badge
              fontSize="0.8em"
              alignSelf="flex-start"
              variant="subtle"
              colorScheme="yellow"
              borderRadius="5px"
              p={1}
            >
              {course.price}
            </Badge>
          )}
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {course.title}
          </Heading>
          <Text color={"gray.500"}>{course.description}</Text>
        </Stack>
        <NextLink href={course.slug}>
          <Button w={"full"} colorScheme="purple" mt={5}>
            Start
          </Button>
        </NextLink>
      </Box>
    </Center>
  );
}
