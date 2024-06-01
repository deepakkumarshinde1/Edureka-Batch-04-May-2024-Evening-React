import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($userName: String!, $userEmail: String!) {
    addUser(userName: $userName, userEmail: $userEmail) {
      id
    }
  }
`;
