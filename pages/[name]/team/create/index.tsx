import React from "react"
import { Box, Center, Heading, Input, VStack } from "@chakra-ui/react"

type Props = {}
const Create = (props: Props) => {
  return (
    <>
      <Box p="4">
        <Heading>Create New Team</Heading>
        <VStack p="2" spacing="3">
          <Center>
            <Input type="text" placeholder="Real Madrid FC" />
          </Center>
        </VStack>
      </Box>
    </>
  )
}

export default Create
