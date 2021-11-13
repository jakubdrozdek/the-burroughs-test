import { Container, Typography } from '@mui/material';

interface Props {
  children: React.ReactNode;
  title: string;
}

export function Page({ children, title }: Props) {
  return (
    <Container component="article" sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      {children}
    </Container>
  );
}
