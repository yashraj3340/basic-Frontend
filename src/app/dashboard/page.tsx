// import * as React from 'react';
// import type { Metadata } from 'next';
// import Grid from '@mui/material/Unstable_Grid2';
// import dayjs from 'dayjs';

// import { config } from '@/config';
// // import { Budget } from '@/components/dashboard/overview/budget';
// // import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
// // import { LatestProducts } from '@/components/dashboard/overview/latest-products';
// // import { Sales } from '@/components/dashboard/overview/sales';
// // import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
// // import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
// // import { TotalProfit } from '@/components/dashboard/overview/total-profit';
// // import { Traffic } from '@/components/dashboard/overview/traffic';

// export const metadata = { title: `Overview | Dashboard | ` } satisfies Metadata;

// export default function Page(): React.JSX.Element {
//   return (
//     <iframe
//       height="1200"
//       scrolling="no"
//       src="https://v3.polymersearch.com/b/66a53ad0e989fa00082d354d?m=embed"
//       style={{
//         overflow: 'hidden',
//         height: '100%',
//         width: '80%',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//       }}
//       width="100%"
//     ></iframe>
//   );
// }


import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
// import { Budget } from '@/components/dashboard/overview/budget';
// import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
// import { LatestProducts } from '@/components/dashboard/overview/latest-products';
// import { Sales } from '@/components/dashboard/overview/sales';
// import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
// import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
// import { TotalProfit } from '@/components/dashboard/overview/total-profit';
// import { Traffic } from '@/components/dashboard/overview/traffic';

export const metadata = { title: `Overview | Dashboard | ` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <iframe
      height="1300"
      scrolling="no"
      src="https://v3.polymersearch.com/b/66a53ad0e989fa00082d354d?m=embed"
      style={{
        overflow: 'hidden',
        height: '100%',
        width: '80%',
        position: 'absolute',
        top: 0,
        left: 'auto',
        right: 0,
        bottom: 0,
      }}
      width="100%"
    ></iframe>
  );
}