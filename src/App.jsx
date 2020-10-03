import React, { useState } from 'react';
import Resume from './components/Resume';
import withResumeData from './hoc/context';
import './App.css';

function App() {
  return <Resume />;
}

export default withResumeData(App);
