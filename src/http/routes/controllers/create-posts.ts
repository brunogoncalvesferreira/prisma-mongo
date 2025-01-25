import type { FastifyReply, FastifyRequest } from "fastify"
import type { PostUserRequest } from "../../../@types"
import { prisma } from "../../../lib/prisma"

export async function createPosts(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { title, content, authorId } = request.body as PostUserRequest

    const post = await prisma.post.create({
      data: { title, content, authorId },
    })

    return reply.status(201).send({
      message: "Post created successfully",
      post,
    })
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(500).send(error.message)
    }
  }
}
