import { Button, Heading, VStack } from "@chakra-ui/react"
import type { GetServerSidePropsContext } from "next"
import { GoogleProfile } from "next-auth/providers/google"
import { useSession, signIn, getProviders } from "next-auth/react"
import { useRouter } from "next/router"
interface Props {
  provider: GoogleProfile
}

const Home = ({ provider }: Props) => {
  const { data: session } = useSession()
  const router = useRouter()
  if (session) {
    router.push(`/${session?.user?.name}/dashboard`)
  }
  const redirectToLogin = async () => {
    signIn(provider.id)
  }

  return (
    <>
      <VStack h='100vh' spacing='3' p='5'>
        <Heading size='2xl'>You are not logged in!</Heading>
        <Button onClick={redirectToLogin}>Sign in</Button>
      </VStack>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const providers = await getProviders()
  return {
    props: {
      provider: providers?.google
    }
  }
}

export default Home
