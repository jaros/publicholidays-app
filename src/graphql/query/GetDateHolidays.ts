import { gql } from '@apollo/client';

export const GET_DATE_HOLIDAYS_QUERY = gql`
  query GetDateHolidays($year: Int!, $country: String!) {
    dateHolidays(year: $year, country: $country) {
      date
      name
      localName
      type
    }
  }
`;