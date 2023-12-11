const API_URL = process.env.API_URL;

export const api = {
    getProject: (project_pk: number) =>
        `${API_URL}/project_management/project/${project_pk}`,
    putProject: (project_pk: number) =>
        `${API_URL}/project_management/project/${project_pk}`,
    getProjectEvaluation: (project_pk: number) =>
        `${API_URL}/project_management/project/${project_pk}/evaluations`,
    postProjectEvaluation: (project_pk: number) =>
        `${API_URL}/project_management/project/${project_pk}/evaluations`,
};
