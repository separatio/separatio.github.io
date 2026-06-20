import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const COMPILE_DREAM_HREF = '/writings/compile-dream.html'

function BlogPage() {
  return (
    <Container maxWidth="md">
      <Box py={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Writings
        </Typography>
        <Typography color="text.secondary" mb={4}>
          Occasional experiments and longer-form pieces.
        </Typography>

        <Card variant="outlined">
          <CardContent>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              mb={1.5}
              flexWrap="wrap"
              useFlexGap
            >
              <Chip
                icon={<AutoAwesomeIcon />}
                label="AI-made"
                size="small"
                color="warning"
                variant="outlined"
              />
              <Chip label="Interactive" size="small" variant="outlined" />
              <Chip label="2026-06-19" size="small" variant="outlined" />
            </Stack>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              COMPILE / DREAM
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Ten poems on programming in the age of AI — read as a page-turning
              terminal flip-book.
            </Typography>

            <Typography variant="body2" sx={{ mt: 2 }}>
              This piece was made with Claude. The premise was drawn from
              current online discussion about AI and the craft of programming,
              then produced as a multi-agent Claude workflow using an{' '}
              <strong>advisor pattern</strong>:{' '}
              <strong>Claude Haiku 4.5</strong> drafted each poem and{' '}
              <strong>Claude Opus 4.8</strong> acted as the advisor — judging
              the drafts hard and sending the weakest back for a revision on its
              own notes. Orchestrated live as a 44-agent run.
            </Typography>
          </CardContent>
          <CardActions sx={{ px: 2, pb: 2 }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<OpenInNewIcon />}
              href={COMPILE_DREAM_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the book
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  )
}

export default BlogPage
