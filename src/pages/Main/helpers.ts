import { gql } from '@apollo/client';

export const getCountries = (code:string) => {
    const GET_COUNTRIES = gql`
    query {
      countries(filter: { code: { eq: "${code}" } }) {
        code
        name
        native
        phone
        capital
        currency
        languages {
          name
          native
          rtl
        }
        continent {
          name
        }
        emoji
        states {
          name
        }
      }
    }
  `;
  return GET_COUNTRIES;
}