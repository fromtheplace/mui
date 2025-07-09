import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  Slider,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  BottomNavigation,
  BottomNavigationAction,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Badge
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InboxIcon from '@mui/icons-material/Inbox';

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">MUI All-in-One Showcase</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {/* 1. Portfolio */}
        <Section title="1. Portfolio / Personal Site">
          <Card>
            <CardContent>
              <Typography variant="h5">John Doe</Typography>
              <Typography>Creative Developer & Designer</Typography>
              <Button variant="contained" sx={{ mt: 2 }}>Contact Me</Button>
            </CardContent>
          </Card>
        </Section>

        {/* 2. Dashboard */}
        <Section title="2. Dashboard Panel">
          <Tabs value={0}>
            <Tab label="Overview" />
            <Tab label="Users" />
            <Tab label="Settings" />
          </Tabs>
          <Typography sx={{ mt: 2 }}>Total Users: 1,240</Typography>
        </Section>

        {/* 3. E-commerce */}
        <Section title="3. E-commerce Product Card">
          <Card>
            <CardContent>
              <Typography variant="h6">SuperCool T-Shirt</Typography>
              <Typography>$29.99</Typography>
              <Button variant="outlined">Add to Cart</Button>
            </CardContent>
          </Card>
        </Section>

        {/* 4. Form App */}
        <Section title="4. Form Example">
          <TextField fullWidth label="Email" sx={{ mb: 2 }} />
          <FormControlLabel control={<Checkbox />} label="Subscribe to newsletter" />
          <RadioGroup row>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
          <Button variant="contained" sx={{ mt: 2 }}>Submit</Button>
        </Section>

        {/* 5. Messaging App */}
        <Section title="5. Messaging Preview">
          <List>
            <ListItem>
              <Avatar alt="Jane" src="" />
              <ListItemText primary="Jane Doe" secondary="Hey! Are we still on for tonight?" />
              <Badge color="primary" badgeContent={2} />
            </ListItem>
          </List>
        </Section>

        {/* 6. Media Player */}
        <Section title="6. Media Player UI">
          <Typography>Now Playing: Lo-Fi Beats</Typography>
          <Slider defaultValue={30} sx={{ width: 200 }} />
          <IconButton><PlayArrowIcon /></IconButton>
        </Section>

        {/* 7. Kanban Board */}
        <Section title="7. Kanban Task Card">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography>Todo</Typography>
                  <Chip label="Design" color="primary" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography>In Progress</Typography>
                  <Chip label="Dev" color="warning" />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Section>

        {/* 8. Blog / CMS */}
        <Section title="8. Blog Content Preview">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What is Material UI?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Material UI is a popular React UI framework for building modern web apps using Google's Material Design.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Section>
      </Container>

      <BottomNavigation showLabels>
        <BottomNavigationAction label="Inbox" icon={<InboxIcon />} />
        <BottomNavigationAction label="Send" icon={<SendIcon />} />
      </BottomNavigation>
    </>
  );
}

function Section({ title, children }) {
  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      {children}
    </Container>
  );
}
