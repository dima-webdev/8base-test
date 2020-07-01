import React from 'react';
import { Table } from '@8base/boost';
import { compose } from 'recompose';
import * as R from 'ramda';
import { graphql } from 'react-apollo';

import * as sharedGraphQL from 'shared/graphql';

let OrdersTable = ({ Orders }) => (
    <Table>
        <Table.Header columns="repeat(5, 1fr) 60px">
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Delivery</Table.HeaderCell>
            <Table.HeaderCell>Comment</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell />
        </Table.Header>

        <Table.Body
            data={ R.pathOr([], ['ordersList', 'items'], Orders) }
            loading={Orders.length}
            action="Create order"
            onActionClick={() => alert('Create order')}
        >
            {
                (Order) => (
                    <Table.BodyRow columns="repeat(5, 1fr) 60px" key={ Order.id }>
                        <Table.BodyCell>
                            { R.pathOr('Customer lastname', ['client', 'lastName'], Order) }
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Customer address', ['address'], Order) }
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Delivery', ['deliveryDt'], Order) }
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Comment', ['comment'], Order) }
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Status', ['status'], Order) }
                        </Table.BodyCell>
                    </Table.BodyRow>
                )
            }
        </Table.Body>
    </Table>
);

OrdersTable = compose(
    graphql(sharedGraphQL.ORDERS_LIST_QUERY, { name: 'Orders' })
)(OrdersTable);

export { OrdersTable }