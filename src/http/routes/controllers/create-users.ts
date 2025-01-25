import type { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../../../lib/prisma"
import type { CreateUserRequest } from "../../../@types"

export async function createUsers(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { name, email } = request.body as CreateUserRequest

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userExists) {
      return reply.status(409).send({
        message: "User already exists",
      })
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    })

    return reply.status(201).send({
      message: "User created successfully",
      user,
    })
  } catch (error) {
    return reply.status(500).send(error)
  }
}
