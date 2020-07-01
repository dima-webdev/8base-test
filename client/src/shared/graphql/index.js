import gql from 'graphql-tag';

// Clients

export const CLIENTS_LIST_QUERY = gql`
    query ClientsList {
        clientsList {
            items {
                id,
                firstName,
                lastName,
                email,
                phone,
                birthday
            }
        }
    }
`;

export const CLIENT_CREATE_MUTATION = gql`
  mutation ClientCreate($data: ClientCreateInput!) {
    clientCreate(data: $data) {
      id
    }
  }
`;

export const CLIENT_DELETE_MUTATION = gql`
  mutation ClientDelete($id: ID!) {
    clientDelete(data: { id: $id }) {
      success
    }
  }
`;

// Products

export const PRODUCTS_LIST_QUERY =  gql`
    query ProductsList {
        productsList {
            items {
                name,
                description,
                price,
                picture {
                    downloadUrl,
                    filename
                }
            }
        }
    }
`;

// Orders

export const ORDERS_LIST_QUERY = gql`
    query OrdersList {
        ordersList {
            items {
                client {
                  lastName  
                }
                address,
                deliveryDt,
                comment,
                status
            }
        }
    }
`;