import type { FastifyReply, FastifyRequest } from "fastify"
import type { CreateUserRequest, PostUserRequest } from "../../../@types"
import { prisma } from "../../../lib/prisma"

interface UsersParams {
  id: string
}

export async function updateUsers(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { name, email } = request.body as CreateUserRequest

    const { id } = request.params as UsersParams

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    })

    return reply.status(201).send({
      message: "User updated successfully",
    })
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(500).send(error.message)
    }
  }
}
