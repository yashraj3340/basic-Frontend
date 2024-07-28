// 'use client';

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Checkbox from '@mui/material/Checkbox';
// import Divider from '@mui/material/Divider';
// import Stack from '@mui/material/Stack';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import dayjs from 'dayjs';

// import { useSelection } from '@/hooks/use-selection';

// function noop(): void {
//   // do nothing
// }

// export interface Customer {
//   id: string;
//   avatar: string;
//   name: string;
//   email: string;
//   category: string;
//   address: { city: string; state: string; country: string; street: string };
//   status: string;
//   phone: string;
//   createdAt: Date;
//   detail: string; //we can add read more
// }

// interface CustomersTableProps {
//   count?: number;
//   page?: number;
//   rows?: Customer[];
//   rowsPerPage?: number;
//   onPageChange?: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
// }

// export function CustomersTable({
//   count = 0,
//   rows = [],
//   page = 0,
//   rowsPerPage = 0,
// }: CustomersTableProps): React.JSX.Element {
//   const rowIds = React.useMemo(() => {
//     return rows.map((customer) => customer.id);
//   }, [rows]);

//   // const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

//   // const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
//   // const selectedAll = rows.length > 0 && selected?.size === rows.length;

//   return (
//     <Card>
//       <Box sx={{ overflowX: 'auto' }}>
//         <Table sx={{ minWidth: '800px' }}>
//           <TableHead>
//             <TableRow>
//               {/* <TableCell padding="checkbox">

//               </TableCell> */}
//               {/* <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Location</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Signed Up</TableCell> */}

//               <TableCell>ID</TableCell>
//               <TableCell>street Light</TableCell>
//               <TableCell>Daily usage</TableCell>
//               <TableCell>sector</TableCell>
//               <TableCell>installation</TableCell>
//               {/* <TableCell>Last Maintenance Date</TableCell>
//               <TableCell>Detail View</TableCell> */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow hover key={row.id}>
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>
//                   <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
//                     {/* THIS WAS PHOTO OF <Avatar src={row.avatar} /> */}
//                     <Typography variant="subtitle2">{row.name}</Typography>
//                   </Stack>
//                 </TableCell>
//                 <TableCell>{row.category}</TableCell>
//                 <TableCell>
//                   {row.address.city}, {row.address.state}, {row.address.country}
//                 </TableCell>
//                 <TableCell>{row.status}</TableCell>
//                 <TableCell>{dayjs(row.createdAt).format('MMM D, YYYY')}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Box>
//       <Divider />
//       <TablePagination
//         component="div"
//         count={count}
//         onPageChange={noop}
//         onRowsPerPageChange={noop}
//         page={page}
//         rowsPerPage={rowsPerPage}
//         rowsPerPageOptions={[5, 10, 25]}
//       />
//     </Card>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

function noop() {
  // do nothing
}

const rows = [
  {
    id: 1,
    streetLightType: 'LED',
    dailyUsage: 8,
    streetLightLocation: 'Sector 1',
    installationDate: '01-01-2020',
    reason: 'Fuse',
  },
  {
    id: 1,
    streetLightType: 'LED',
    dailyUsage: 8,
    streetLightLocation: 'Sector 1',
    installationDate: '02-01-2020',
    reason: 'Broken',
  },
  {
    id: 1,
    streetLightType: 'LED',
    dailyUsage: 8,
    streetLightLocation: 'Sector 1',
    installationDate: '03-01-2020',
    reason: 'Blinking',
  },
  {
    id: 1,
    streetLightType: 'LED',
    dailyUsage: 8,
    streetLightLocation: 'Sector 1',
    installationDate: '04-01-2020',
    reason: 'Fuse',
  },
  {
    id: 1,
    streetLightType: 'LED',
    dailyUsage: 8,
    streetLightLocation: 'Sector 1',
    installationDate: '05-01-2020',
    reason: 'Broken',
  },
  {
    id: 2,
    streetLightType: 'Halogen',
    dailyUsage: 10,
    streetLightLocation: 'Sector 2',
    installationDate: '01-02-2020',
    reason: 'Blinking',
  },
  {
    id: 2,
    streetLightType: 'Halogen',
    dailyUsage: 10,
    streetLightLocation: 'Sector 2',
    installationDate: '02-02-2020',
    reason: 'Broken',
  },
  {
    id: 2,
    streetLightType: 'Halogen',
    dailyUsage: 10,
    streetLightLocation: 'Sector 2',
    installationDate: '03-02-2020',
    reason: 'Fuse',
  },
  {
    id: 2,
    streetLightType: 'Halogen',
    dailyUsage: 10,
    streetLightLocation: 'Sector 2',
    installationDate: '04-02-2020',
    reason: 'Blinking',
  },
  {
    id: 2,
    streetLightType: 'Halogen',
    dailyUsage: 10,
    streetLightLocation: 'Sector 2',
    installationDate: '05-02-2020',
    reason: 'Broken',
  },
  {
    id: 3,
    streetLightType: 'LED',
    dailyUsage: 8,
    streetLightLocation: 'Sector 3',
    installationDate: '01-03-2020',
    reason: 'Fuse',
  },
  {
    id: 3,
    streetLightType: 'LED',
    dailyUsage: 8,
    streetLightLocation: 'Sector 3',
    installationDate: '02-03-2020',
    reason: 'Broken',
  },
  {
    id: 3,
    streetLightType: 'LED',
    dailyUsage: 8,
    streetLightLocation: 'Sector 3',
    installationDate: '03-03-2020',
    reason: 'Blinking',
  },
  {
    id: 3,
    streetLightType: 'LED',
    dailyUsage: 8,
    streetLightLocation: 'Sector 3',
    installationDate: '04-03-2020',
    reason: 'Fuse',
  },
  {
    id: 3,
    streetLightType: 'LED',
    dailyUsage: 8,
    streetLightLocation: 'Sector 3',
    installationDate: '05-03-2020',
    reason: 'Broken',
  },
  {
    id: 4,
    streetLightType: 'Halogen',
    dailyUsage: 10,
    streetLightLocation: 'Sector 4',
    installationDate: '01-04-2020',
    reason: 'Blinking',
  },
  {
    id: 4,
    streetLightType: 'Halogen',
    dailyUsage: 10,
    streetLightLocation: 'Sector 4',
    installationDate: '02-04-2020',
    reason: 'Broken',
  },
  {
    id: 4,
    streetLightType: 'Halogen',
    dailyUsage: 10,
    streetLightLocation: 'Sector 4',
    installationDate: '03-04-2020',
    reason: 'Fuse',
  },
  {
    id: 4,
    streetLightType: 'Halogen',
    dailyUsage: 10,
    streetLightLocation: 'Sector 4',
    installationDate: '04-04-2020',
    reason: 'Blinking',
  },
  {
    id: 4,
    streetLightType: 'Halogen',
    dailyUsage: 10,
    streetLightLocation: 'Sector 4',
    installationDate: '05-04-2020',
    reason: 'Broken',
  },
];

export function CustomersTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Street Light Type</TableCell>
              <TableCell>Daily Usage hours</TableCell>
              <TableCell>Street light location</TableCell>
              <TableCell>Installation Date</TableCell>
              <TableCell>Reason</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.streetLightType}</TableCell>
                <TableCell>{row.dailyUsage}</TableCell>
                <TableCell>{row.streetLightLocation}</TableCell>
                <TableCell>{row.installationDate}</TableCell>
                <TableCell>{row.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
