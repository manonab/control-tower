import { useQuery } from 'react-query';
import type { Project } from '~/model/project';

export const useGetProjects = (project_pk: number) => {
  return useQuery(['projects', project_pk], () => fetchProjects(project_pk));
};

const fetchProjects = async (project_pk: number): Promise<Project> => {
  const response = await fetch(`https://ezw4k.wiremockapi.cloud/project_management/project/${project_pk}`);
  if (!response.ok) {
    throw new Error('Une erreur s\'est produite lors de la récupération des projets');
  }
  return response.json();
};

export const useUpdateProject = () => {
  const updateProject = async (project_pk: number, payload: { [key: string]: any }): Promise<void> => {
    const response = await fetch(`https://ezw4k.wiremockapi.cloud/project_management/project/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Une erreur s\'est produite lors de la mise à jour du projet');
    }
  };

  return { updateProject };
};
