import { Badge, Flex, Link, Text } from "@chakra-ui/layout";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from "next/link";

function SingleVideo({ slug, video, index }) {
  return (
    <Flex
      as="a"
      href={slug + "/" + video.id}
      boxShadow={"lg"}
      maxW={"640px"}
      width={"full"}
      p={10}
      justifyContent={"space-between"}
      transition="all 0.3s ease-in-out"
      _hover={{
        bg: "gray.200",
        transform: "scale(1.1)",
      }}
    >
      <Text>{index + 1}</Text>
      <Text>{video.title}</Text>
      <Badge variant="subtle" colorScheme="green" borderRadius="5px" p={1}>
        {video.duration}
      </Badge>
    </Flex>
  );
}

export default function VideoList({ slug, videos }) {
  return (
    <>
      {videos.map((video, index) => (
        <SingleVideo slug={slug} video={video} index={index} key={index} />
      ))}
    </>
  );
}
