import React from 'react';
import ProjectPageTemplate from './ProjectPageTemplate';
import { projectsData } from '../../Data/ProjectsData';

const GoldmarkVentures = () => {
  const project = projectsData.find(p => p.slug === 'goldmark-avenue');
  return <ProjectPageTemplate project={project} />;
};

export default GoldmarkVentures;