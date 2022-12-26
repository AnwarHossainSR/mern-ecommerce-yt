import { Button, Stack, TextField } from '@mui/material';
import WHiteSpace from '../../components/App/whitespac/WHiteSpace';

const Login = () => {
  return (
    <Stack>
      <Stack
        sx={{
          width: '40%',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          borderRadius: '5px',
          my: 4,
          boxShadow: 2,
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: '60%',
            textAlign: 'center',
          }}
          pt={5}
        >
          <h2>Login</h2>
          <TextField label="Email" variant="outlined" />
          <TextField label="Password" variant="outlined" />
          <WHiteSpace height={20} />
          <Button variant="contained">Login</Button>
          <WHiteSpace height={50} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
