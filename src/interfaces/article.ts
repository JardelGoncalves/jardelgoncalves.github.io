import { Tag } from './tag'

export interface Article {
  id: string
  textLink: string
  title: string
  description: string
  readToTime: string
  image: {
    url: string
    alt: string
  }
  tags: Tag[]
}
