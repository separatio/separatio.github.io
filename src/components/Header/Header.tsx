import { useState } from 'react';
import { Anchor, Box, Container, Group } from '@mantine/core';
import classes from './Header.module.css';

const mainLinks = [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Projects' },
  { label: 'Blog' },
  { label: 'Contact' },
];

export function Header() {
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'div'>
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner} size='xl'>
        <Box className={classes.links}>
          <Group gap={0} className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
      </Container>
    </header>
  );
}
