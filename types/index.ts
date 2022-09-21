import { FOOT, CONTINENT } from "../enums/index"

export interface Country {
  name: string
  continent:
    | CONTINENT.AFRICA
    | CONTINENT.ASIA
    | CONTINENT.AUSTRALIA
    | CONTINENT.EUROPE
    | CONTINENT.NORTH_AMERICA
    | CONTINENT.SOUTH_AMERICA
  teams: Team[] | null
  players: Player[] | null
  coaches: Coach[] | null
}

export interface Team {
  id: number
  name: string
  players: Player[]
  country: string
  coachId: number
}
export interface Coach {
  id: number
  name: string
  surname: string
  country: string
  teamId: number | null
}

export interface Player {
  id: number
  name: string
  surname: string
  age: number
  team: string | null
  dominantFoot: FOOT.LEFT | FOOT.RIGHT
  height: number
  weight: number
  country: string
}
