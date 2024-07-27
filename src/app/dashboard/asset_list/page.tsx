'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { CustomersFilters } from '@/components/dashboard/asset_list/customers-filters';
import { CustomersTable } from '@/components/dashboard/asset_list/customers-table';
import type { Customer } from '@/components/dashboard/asset_list/customers-table';

// Import metadata from the new file
// Assuming the metadata.ts file is in the same directory as the current file
import { metadata } from './metadata';

const customers = [
  // Add customer data here
] satisfies Customer[];

export default function Page(): React.JSX.Element {
  const [page, setPage] = React.useState<number>(0);
  const rowsPerPage = 5;

  const paginatedCustomers = React.useMemo(() => applyPagination(customers, page, rowsPerPage), [page, rowsPerPage]);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Asset list</Typography>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
        onPageChange={(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage)}
      />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
