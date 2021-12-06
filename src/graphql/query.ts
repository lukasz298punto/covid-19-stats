import { gql } from '@apollo/client';

gql`
    query GetFacts($from: ISO8601DateTime, $till: ISO8601DateTime) {
        offchain {
            covid {
                facts(date: { since: $from, till: $till }) {
                    confirmed
                    recovered
                    deaths
                }
            }
        }
    }

    query GetFactsPerDates($from: ISO8601DateTime, $till: ISO8601DateTime) {
        offchain {
            covid {
                facts(date: { since: $from, till: $till }, options: { asc: "date.date" }) {
                    date {
                        date
                    }
                    confirmed
                    recovered
                    deaths
                }
            }
        }
    }
`;
