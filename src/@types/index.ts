export interface CreateUserRequest {
  name: string
  email: string
  posts?: PostUserRequest[]
}

export interface PostUserRequest {
  title: string
  content?: string
  published?: boolean
  viewCount?: number
  authorId: string
}

export interface UsersParams {
  id: string
}

export interface PostsParams {
  id: string
}
