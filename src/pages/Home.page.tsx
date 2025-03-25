import { Container, Typography, Button, Box, Stack, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { EmailRounded } from '@mui/icons-material';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" py={10}>

        {/* Profile Picture */}
        <Avatar
          src="/headshot.jpg"
          alt="Alex Radulescu"
          sx={{ width: 150, height: 150, mb: 2 }}
        />

        {/* Title and Subtitle */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Alex Radulescu
        </Typography>
        <Typography component='p' variant="h5" color="text.secondary" gutterBottom>
          Quality Engineer
        </Typography>

        {/* Call to Actions */}
        <Stack direction="row" spacing={2} mt={2}>
          <Button variant="contained" color="primary" size="large" onClick={() => setCurrentPage('Projects')}>
            View Projects
          </Button>
          <Button variant="outlined" color="primary" size="large" href="/path/to/cv.pdf" target="_blank">
            Download CV
          </Button>
        </Stack>

        {/* Social Links */}
        <Stack direction="row" spacing={2} mt={4}>
          <Button href="https://github.com/separatio" target="_blank">
            <GitHubIcon fontSize="large" />
          </Button>
          <Button href="https://www.linkedin.com/in/separatio" target="_blank">
            <LinkedInIcon fontSize="large" />
          </Button>
          <Button href="mailto:alex.radulescu@pm.me" target="_blank">
            <EmailRounded fontSize="large" />
          </Button>
        </Stack>

        <Typography variant='h3' color='red' fontWeight='bold'>
          SITE IN CONSTRUCTION!
          <br />
          <br />
          THERE BE DRAGONS!
          <br />
          <br />
          YOU HAVE BEEN WARNED. :)
        </Typography>
      </Box>
    </Container>
  );
}
