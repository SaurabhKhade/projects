import React from 'react';

import Home from './components/home';
import Navigation from './components/navigation';
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import GitRepos from './components/gitRepos';
import Contact from './components/contact';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Portfolio />
      <GitRepos/>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}