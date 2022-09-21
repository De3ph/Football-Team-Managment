import { Session } from "next-auth"
import { unstable_getServerSession } from "next-auth/next"
import { signOut } from "next-auth/react"
import { authOptions } from "pages/api/auth/[...nextauth]"

import React from "react"

type Props = {
  session: Session
}

const Dashboard = ({ session }: Props) => {
  return (
    <>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div>{session.user?.name}'s Dashboard</div>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  // if user not logged in , redirect to login screen
  if (!session) {
    return {
      redirect: {
        destination: "/ogin",
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

export default Dashboard
