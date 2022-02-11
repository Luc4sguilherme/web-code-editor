import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { useError } from '../../contexts/errorContext';

type ErrorProps = {
  children: JSX.Element;
};

function Error({ children }: ErrorProps) {
  const { error, clearError } = useError();

  return (
    <>
      {!error || (
        <Alert severity="error" onClose={clearError}>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}

      {children}
    </>
  );
}

export default Error;
