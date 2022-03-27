import { gql } from '@apollo/client';

export const GET_PUBLIC_HOLIDAYS_QUERY = gql`
  query GetPublicHolidays($year: Int!, $country: String!) {
    publicHolidays(year: $year, country: $country) {
      date
      name
      localName
      types
    }
  }
`;