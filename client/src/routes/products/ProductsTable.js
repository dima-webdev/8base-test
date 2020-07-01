import React from 'react';
import { Table } from '@8base/boost';
import { compose } from 'recompose';
import * as R from 'ramda';
import { graphql } from 'react-apollo';

import * as sharedGraphQL from 'shared/graphql';

import ProductImage from './ProductImage';
import {TableBodyRow} from "@8base/boost/es/components/Table/TableBodyRow";

let ProductsTable = ({ Products }) => (
    <Table>
        <Table.Header columns="repeat(5, 1fr) 60px">
            <Table.HeaderCell>Picture</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell />
        </Table.Header>

        <Table.Body data={R.pathOr([], ['productsList', 'items'], Products)}>
            {
                (product) => (
                    <TableBodyRow columns="repeat(5, 1fr) 60px" key={ product.id }>
                        <Table.BodyCell>
                            <ProductImage
                                imageUrl={R.pathOr('Picture', ['picture', 'downloadUrl'], product)}
                                fileName={R.pathOr('PictureFileName', ['filename'], product)}
                            />
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Product name', ['name'], product) }
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Product description', ['description'], product) }
                        </Table.BodyCell>
                        <Table.BodyCell>
                            { R.pathOr('Price', ['price'], product) }
                        </Table.BodyCell>
                    </TableBodyRow>
                )
            }
        </Table.Body>
    </Table>
);

ProductsTable = compose(
    graphql(sharedGraphQL.PRODUCTS_LIST_QUERY, { name: 'Products' })
)(ProductsTable);

export { ProductsTable }