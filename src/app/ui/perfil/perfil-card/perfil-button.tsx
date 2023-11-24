import React from 'react';

import { Person } from '@mui/icons-material';

export const PerfilButton = () => {
  return (
    <button className="btn w-1/2 bg-base-100 rounded-none rounded-b-2xl rounded-r-none border-t-2 border-neutral">
      <Person sx={{ fontSize: 20 }} />
      Ver Perfil
    </button>
  );
};
