import { prisma } from '@lib/prisma';
import { Box, Button, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react'
import { Coach, Team } from '@types';
// import { useSession } from 'next-auth/react'

type Props = {
    teams: Team[],
    coachs: Coach[],
}

const Welcome = ({ teams, coachs }: Props) => {
    const [selectedTeam, setSelectedTeam] = useState()

    const findCoachName =
        (coachId: number) => {
            const coach: Coach[] = coachs.filter((coach) => {
                return coach.id === coachId
            })
            return (`${coach[0]?.name + ' ' + coach[0]?.surname}`)
        }

    const coachNames: string[] = teams.map((team) => {
        return findCoachName(team.coachId)
    })

    const handleTeamSelect = useCallback(
        (e: any) => {
            setSelectedTeam(e.target.value)
        },
        [],
    )

    const handleContiune = async () => {
        fetch('')
    }

    return (
        <>
            <VStack spacing='2'>
                <Box>
                    <VStack>
                        <Heading size='xl'>Welcome</Heading>
                        <Heading size='lg'>Select your team:</Heading>
                        <TableContainer w='full'>
                            <Table variant='striped'>
                                <TableCaption placement='top' fontSize='2xl' >Teams</TableCaption>
                                <Thead>

                                    <Tr>
                                        <Th>Name</Th>
                                        <Th>Coach Name</Th>
                                        <Th>Country</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {teams.map((team, index) => (
                                        <Tr key={team.id}>
                                            <Td>{team.name}</Td>
                                            <Td>{coachNames[index]}</Td>
                                            <Td>{team.country}</Td>
                                            <Td>
                                                <Button colorScheme='blackAlpha' value={team.id} onClick={handleTeamSelect} >Select</Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Button onClick={handleContiune} >Continue</Button>
                    </VStack>

                </Box>
            </VStack>
        </>
    )
}

export async function getServerSideProps() {
    const teams = await prisma.team.findMany()
    const coachs = await prisma.coach.findMany()

    return {
        props: {
            teams,
            coachs,
        }
    }
}

export default Welcome;