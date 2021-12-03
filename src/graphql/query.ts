import { gql } from '@apollo/client';

gql`
    query getOffChan {
        offchain {
            covid {
                facts {
                    confirmed
                    recovered
                    deaths
                }
            }
        }
    }
`;
