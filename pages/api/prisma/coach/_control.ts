import { Coach } from "@types"
export const checkName = (coach: Coach): boolean => {
  return coach.name !== null && coach.name !== undefined
}

export const checkCountry = (coach: Coach): boolean => {
  return coach.country !== null && coach.country !== undefined
}

export const checkSurname = (coach: Coach): boolean => {
  return coach.surname !== null && coach.surname !== undefined
}

export const checkTeam = (coach: Coach): boolean => {
  return coach.team !== null && coach.team !== undefined
}
