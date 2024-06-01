import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    getUsersList {
      id
      userName
      userEmail
    }
  }
`;

export const GET_USERS_EMAIL = gql`
  query {
    getUsersList {
      userEmail
    }
  }
`;
