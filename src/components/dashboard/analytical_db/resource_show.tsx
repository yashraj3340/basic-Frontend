'use client';

import React from 'react';
import Stack from '@mui/material/Stack';

const ResourceShow: React.FC = () => {
  const iframeSrc = 'https://v3.polymersearch.com/b/66a4f444e989fa00082d164d?m=embed';

  return (
    <Stack spacing={3}>
      <iframe
        src={iframeSrc}
        width="100%"
        height="1300"
        scrolling="no"
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
      ></iframe>
    </Stack>
  );
};

export default ResourceShow;
