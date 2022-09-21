import type { NextPage } from "next"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/router"

const Home: NextPage = () => {
    const { data: session } = useSession()
    const router = useRouter()
    if (session) {
        router.push(`/${session.user?.name}/dashboard`)
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export default Home
