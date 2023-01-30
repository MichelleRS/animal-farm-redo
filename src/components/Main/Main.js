import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data.js';

export default function Main() {
  return (
    <main>
      {/* use .map to render Animal. for each animal in data.js */}
      {animals.map((animal) => (
        <Animal key={animal.type} name={animal.name} />
      ))}
    </main>
  );
}
