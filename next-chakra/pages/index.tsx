import type { NextPage } from 'next'
import {Box, Button, Divider, Flex, IconButton, Spacer, Text} from "@chakra-ui/react"
import SidebarWithHeader from "./components/SidebarWithHeader";

const Home: NextPage = () => {
  return (
    <>
      <SidebarWithHeader>
        <Box backgroundColor="white">
          <Box w='100%' p={4} color='gray.600' fontWeight='bold' fontSize='sm'>
            ホーム
          </Box>
          <Box w='100%' p={4} color='black'>
            ニュース
          </Box>
          <Divider />
        </Box>
      </SidebarWithHeader>
    </>
  )
}

export default Home
