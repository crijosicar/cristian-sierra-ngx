export interface Post {
  createdAt: string
  updatedAt: string
  meta: Meta
  slugLock: boolean
  _status: string
  content: Content
  populatedAuthors: PopulatedAuthor[]
  publishedAt: string
  slug: string
  title: string
  authors: Author[]
  heroImage: unknown
  id: string
}

export interface Meta {
  title: string
}

export interface Content {
  root: Root2
  content: unknown
}

export interface Root2 {
  children: Children[]
  direction: string
  format: string
  indent: number
  type: string
  version: number
}

export interface Children {
  children: Children2[]
  direction: string
  format: string
  indent: number
  type: string
  version: number
  tag?: string
  textFormat?: number
  textStyle?: string
}

export interface Children2 {
  detail: number
  format: number
  mode: string
  style: string
  text: string
  type: string
  version: number
}

export interface PopulatedAuthor {
  id: string
  name: string
}

export interface Author {
  createdAt: string
  updatedAt: string
  name: string
  email: string
  sessions: Session[]
  id: string
  loginAttempts: number
}

export interface Session {
  id: string
  createdAt: string
  expiresAt: string
}
