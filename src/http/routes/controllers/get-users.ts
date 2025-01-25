import type { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../../../lib/prisma"

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    })

    return users
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(500).send(error.message)
    }
  }
}
