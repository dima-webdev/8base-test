import React from 'react';
import { Card, Heading } from '@8base/boost';

import { ClientCreateDialog } from './ClientCreateDialog';
import { ClientDeleteDialog } from './ClientDeleteDialog';
import { ClientsTable } from './ClientsTable';

const Clients = () => (
  <Card padding="md" stretch>
    <Card.Header>
      <Heading type="h4" text="Clients" />
    </Card.Header>

    <ClientCreateDialog />
    <ClientDeleteDialog />

    <Card.Body padding="none" stretch scrollable>
      <ClientsTable />
    </Card.Body>
  </Card>
);

export { Clients };
