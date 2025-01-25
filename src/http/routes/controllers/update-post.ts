import type { FastifyReply, FastifyRequest } from "fastify"
import type { PostUserRequest } from "../../../@types"
import { prisma } from "../../../lib/prisma"

interface PostUserParams {
  id: string
}

export async function updatePosts(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { title, content, published, viewCount } =
      request.body as PostUserRequest

    const { id } = request.params as PostUserParams

    await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        published,
        viewCount,
        updateAt: new Date(),
      },
    })

    return reply.status(201).send({
      message: "Post updated successfully",
    })
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(500).send(error.message)
    }
  }
}
