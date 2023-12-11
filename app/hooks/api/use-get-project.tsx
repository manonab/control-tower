import { useQuery } from 'react-query';
import type { Project } from '~/model/project';

export const useGetProjects = (project_pk: number) => {
  return useQuery(['projects', project_pk], () => fetchProjects(project_pk));
};

const fetchProjects = async (project_pk: number): Promise<Project> => {
  const response = await fetch(`http://localhost:8080/project_management/project/${project_pk}`);
  if (!response.ok) {
    throw new Error('Une erreur s\'est produite lors de la récupération des projets');
  }
  return response.json();
};