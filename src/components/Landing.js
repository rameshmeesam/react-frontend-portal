// Example for a landing section
import React from 'react';

const Landing = () => {
  return (
    <section className="bg-blue-500 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
        <p className="text-lg mb-8">A simple and elegant landing page built with React.js and Tailwind CSS.</p>
        <a href="#contact" className="bg-white text-blue-500 font-bold py-2 px-4 rounded">Get Started</a>
      </div>
    </section>
  );
};

export default Landing;
