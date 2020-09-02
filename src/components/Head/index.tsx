import React from 'react';
import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    <title>Jardel Gonçalves</title>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <meta name="title" content="Jardel Gonçalves" />
    <meta name="description" content="Welcome to my personal portfolio, my name is Jardel and I am a FullStack Developer" />
    <meta name="author" content="Jardel Gonçalves" />
    <meta name="theme-color" content="#5BCA5D" />
    <meta
      name="keywords"
      content="jardel, jardel gonçalves, desenvolvedor jardel, desenvoldedor, full stack, fullstack, fullstack developer, full stack developer, javascript developer, node.js developer"
    />
    <link rel="stylesheet" href="/static/css/normalize.css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
    <link rel="shortcut icon" href="/static/favicon.ico" />

  </NextHead>
);

export { Head };
