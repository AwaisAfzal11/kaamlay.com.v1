import React from 'react';
import ProjectPageTemplate from './ProjectPageTemplate';
import { projectsData } from '../../Data/ProjectsData';

const MotorwaySouthCity = () => {
  const project = projectsData.find(p => p.slug === 'motorway-south-city');
  return <ProjectPageTemplate project={project} />;
};

export default MotorwaySouthCity;