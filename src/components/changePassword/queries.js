import { gql } from '@apollo/client'

export const Post_update = gql`
  mutation ChangePassword($input: UpdatePassword) {
    changePassword(input: $input)
  }
`
export const Get_pass = gql`
  query query($input: GetPassword) {
    password(input: $input)
  }
`
