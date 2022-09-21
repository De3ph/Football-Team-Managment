import { prisma } from "@lib/prisma"
import { Country } from "@types"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    // return all countries
    res.status(200).json({
      message: await prisma.country.findMany()
    })
  }
  if (req.method == "POST") {
    // insert new country
    try {
      const country: Country = req?.body
      await prisma.country.create({
        data: {
          name: country.name,
          continent: country.continent
        }
      })
      res.status(200).json({ message: "Country created successfully." })
    } catch (error: unknown) {
      res.status(400).json({
        message: error
      })
    }
  }
}
