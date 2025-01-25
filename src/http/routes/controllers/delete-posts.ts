import type { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../../../lib/prisma"
import type { PostsParams } from "../../../@types"

export async function deletePosts(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = request.params as PostsParams

    await prisma.post.delete({
      where: {
        id,
      },
    })

    return reply.status(204).send()
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(500).send(error.message)
    }
  }
}
