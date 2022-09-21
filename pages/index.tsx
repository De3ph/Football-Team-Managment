import type { NextPage } from "next"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/router"

const Home: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const redirectToLogin = () => {
    router.push(`/login`)
  }
  return (
    <>
      Not signed in <br />
      <button onClick={redirectToLogin}>Sign in</button>
    </>
  )
}

export default Home
