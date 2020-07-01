import React from 'react';
import { Table } from '@8base/boost';
import { compose } from 'recompose';
import * as R from 'ramda';
import { graphql } from 'react-apollo';

import * as sharedGraphQL from 'shared/graphql';

let ClientsTable = ({ Clients }) => (
    <Table>
        <Table.Header columns="repeat(5, 1fr) 60px">
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Birthday</Table.HeaderCell>
            <Table.HeaderCell />
        </Table.Header>

        <Table.Body data={ R.pathOr([], ['clientsList', 'items'], Clients) } loading={Clients.length}>
            {
                (Client) => (
                    <Table.BodyRow columns="repeat(5, 1fr) 60px" key={ Client.id }>
                        <Table.BodyCell>
                            { R.pathOr('Unititled', ['firstName'], Client) }
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Unititled', ['lastName'], Client) }
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Unititled', ['email'], Client) }
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Unititled', ['phone'], Client) }
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Unititled', ['birthday'], Client) }
                        </Table.BodyCell>
                    </Table.BodyRow>
                )
            }
        </Table.Body>
    </Table>
);

ClientsTable = compose(
    graphql(sharedGraphQL.CLIENTS_LIST_QUERY, { name: 'Clients' })
)(ClientsTable);

export { ClientsTable }
