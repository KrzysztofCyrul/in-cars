import React from 'react';
import ServiceCard from '../components/Services/ServiceCard';

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <ServiceCard title="Oil Change" description="Keep your engine running smoothly with regular oil changes." />
      <ServiceCard title="Brake Service" description="Ensure your safety with our comprehensive brake inspections." />
      <ServiceCard title="Tire Rotation" description="Prolong the life of your tires with regular rotations." />
    </div>
  );
}

export default Services;