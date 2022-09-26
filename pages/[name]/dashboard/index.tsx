import { Button, Heading, HStack, VStack } from "@chakra-ui/react"
import { Session } from "next-auth"
import { OAuthProviderType } from "next-auth/providers"
import { getProviders, signOut, useSession } from "next-auth/react"

import React from "react"

type Props = {
  session: Session,
  provider: OAuthProviderType
}

const Dashboard = ({ provider }: Props) => {

  const { data: session } = useSession()

  const redirectLogout = () => {
    signOut({
      callbackUrl: '/'
    })
  }

  return (
    <>
      <VStack w='100vw' p='4' spacing='3'>
        <HStack w='100%' justify='space-between' p='2'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Heading size='md'>{session?.user?.name}'s Dashboard</Heading>
          <Button onClick={redirectLogout}>Sign Out</Button>
        </HStack>

      </VStack>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders()

  return {
    props: {
      provider: providers?.google
    }
  }
}

export default Dashboard
