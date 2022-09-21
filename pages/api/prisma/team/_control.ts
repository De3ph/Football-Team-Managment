import { Team } from "@types"
import { prisma } from "@lib/prisma"
export const isNameNotNull = (team: Team): boolean => {
  return team.name !== null && team.name !== undefined
}
export const isCountryNotNullAndExist = (team: Team): boolean => {
  return (
    team.country !== null &&
    team.country !== undefined &&
    prisma.country.findFirst({
      where: {
        name: team.name
      }
    }) !== undefined
  )
}

export const isCoachExist = (coachName: string): boolean => {
  return (
    coachName !== null &&
    coachName !== undefined &&
    prisma.coach
      .findFirst({
        where: {
          name: coachName
        }
      })
      .then((res) => {
        return res
      }) !== null
  )
}
