import { GetServerSidePropsContext } from "next"
import { OAuthProviderType } from "next-auth/providers"
import { getProviders, signIn } from "next-auth/react"

interface Props {
    provider: OAuthProviderType
}

export default function SignIn({ provider }: Props) {
    signIn(provider.id)
    return (
        <>
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