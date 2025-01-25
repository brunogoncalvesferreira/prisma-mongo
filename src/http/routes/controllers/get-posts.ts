import type { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../../../lib/prisma"

export async function getPosts(request: FastifyRequest, reply: FastifyReply) {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return posts
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(500).send(error.message)
    }
  }
}
