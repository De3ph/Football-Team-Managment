import { prisma } from "@lib/prisma"
import { Coach } from "@types"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    // return all coachs
    res.status(200).json({
      message: await prisma.coach.findMany()
    })
  }
  if (req.method == "POST") {
    // insert new coach
    try {
      const coach: Coach = req?.body
      const isValidCountry = await prisma.country.findFirst({
        where: {
          name: coach.country
        }
      })
      if (isValidCountry) {
        await prisma.coach.create({
          data: {
            name: coach.name,
            surname: coach.surname,
            country: coach.country
          }
        })
        res.status(200).json({ message: "Coach created successfully." })
      } else {
        res.status(400).json({
          message: "Invalid country, this country is not exist in database."
        })
      }
    } catch (error: unknown) {
      res.status(400).json({
        message: error
      })
    }
  }
}
