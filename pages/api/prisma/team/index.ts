import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@lib/prisma"
import { Team } from "@types"
import {
  isNameNotNull,
  isCountryNotNullAndExist,
  isCoachExist
} from "./_control"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let requestedTeamName: string | string[] | undefined = req.query.name

  if (req.method === "GET" && !requestedTeamName) {
    // get all teams
    res.status(200).json({
      data: await prisma.team.findMany()
    })
  } else if (req.method === "GET" && requestedTeamName) {
    try {
      res.status(200).json({
        data: await prisma.team.findFirst({
          where: {
            name: requestedTeamName.toString()
          }
        })
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  } else if (req.method === "POST") {
    try {
      const team: Team = req?.body
      if (isNameNotNull(team) && isCountryNotNullAndExist(team)) {
        await prisma.team.create({
          data: {
            name: team.name,
            country: team.country,
            coachId: team.coachId
          }
        })
      }
      res.status(200).json({ message: "Team created successfully." })
    } catch (error: unknown) {
      res.status(400).json({
        message: error
      })
    }
  }
}
