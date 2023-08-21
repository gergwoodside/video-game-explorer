import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width={{ sm: "500px", md: "400px", lg: "300px", xl: "200px" }}>
      <Skeleton
        height={{ sm: "350px", md: "275px", lg: "200px", xl: "125px" }}
        borderRadius={10}
      />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
