/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200

    /** User profile retrieved successfully */
    resBody: {
      id: string
      email: string
      name: string
      posts: Types.Post[]
    }
  }
}
