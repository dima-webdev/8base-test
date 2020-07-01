import React from 'react';
import { ClientCreateDialog } from './ClientCreateDialog';
import { ClientDeleteDialog } from './ClientDeleteDialog';
import { compose } from 'recompose';
import * as R from 'ramda';
import { Table, Dropdown, Icon, Menu, withModal } from '@8base/boost';
import { graphql } from 'react-apollo';

import * as sharedGraphQL from 'shared/graphql';

let ClientsTable = ({ Clients, openModal }) => (
  <Table>
      <Table.Header columns="repeat(5, 1fr) 60px">
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Birthday</Table.HeaderCell>
          <Table.HeaderCell />
      </Table.Header>

    <Table.Body
        loading={ Clients.loading }
        data={ R.pathOr([], ['clientsList', 'items'], Clients) }
        action="Create Client"
        onActionClick={() => openModal(ClientCreateDialog.id)}
    >
      {
        (client) => (
          <Table.BodyRow columns="repeat(5, 1fr) 60px" key={ client.id }>
              <Table.BodyCell>
                  { R.pathOr('Firstname', ['firstName'], client) }
              </Table.BodyCell>
              <Table.BodyCell>
                  { R.pathOr('Lastname', ['lastName'], client) }
              </Table.BodyCell>
              <Table.BodyCell>
                  { R.pathOr('Email', ['email'], client) }
              </Table.BodyCell>
              <Table.BodyCell>
                  { R.pathOr('Phone', ['phone'], client) }
              </Table.BodyCell>
              <Table.BodyCell>
                  { R.pathOr('Birthday', ['birthday'], client) }
              </Table.BodyCell>
            <Table.BodyCell>
              <Dropdown defaultOpen={ false }>
                <Dropdown.Head>
                  <Icon name="More" color="BLUE_30" />
                </Dropdown.Head>
                <Dropdown.Body pin="right">
                  {
                    ({ closeDropdown }) => (
                      <Menu>
                        <Menu.Item icon="Delete" onClick={ () => { openModal(ClientDeleteDialog.id, { id: client.id }); closeDropdown(); } }>Delete</Menu.Item>
                      </Menu>
                    )
                  }
                </Dropdown.Body>
              </Dropdown>
            </Table.BodyCell>
          </Table.BodyRow>
        )
      }
    </Table.Body>
  </Table>
);

ClientsTable = compose(
  withModal,
  graphql(sharedGraphQL.CLIENTS_LIST_QUERY, { name: 'Clients' }),
)(ClientsTable);

export { ClientsTable };
