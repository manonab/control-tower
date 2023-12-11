import { useMutation, useQuery, useQueryClient } from 'react-query';
import dayjs from 'dayjs';

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Une erreur s'est produite lors de la récupération des données`);
  }
  return response.json();
};

const postEvaluation = async (project_pk: number, evaluationData: any): Promise<void> => {
  const response = await fetch(`http://localhost:8080/project_management/project/1/evaluation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(evaluationData),
    mode: 'no-cors',
  });

  if (response.status === 201) {
    console.log("well done marcel")
  }
};

export const useGetEvaluations = (project_pk: number) => {
  return useQuery(['evaluations', project_pk], () => fetchData(`http://localhost:8080/project_management/project/${project_pk}/evaluations`));
};

export const usePostEvaluationMutation = (project_pk: number) => {
  const queryClient = useQueryClient();

  return useMutation((evaluationData: any) => postEvaluation(project_pk, evaluationData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['evaluations', project_pk]);
    },
  });
};

export const useCreateEvaluation = (project_pk: number) => {
  const createEvaluationMutation = usePostEvaluationMutation(project_pk);

  const handleCreateEvaluation = async () => {
    const randomId = Math.floor(Math.random() * 1000000) + 1;
    const formattedDate = dayjs().format('YYYY-MM-DD');

    try {
      await createEvaluationMutation.mutate({
        id: randomId,
        name: 'new test evaluation',
        creation_date: formattedDate,
        validation_date: formattedDate,
        status: 'validated',
      });
    } catch (error) {
      console.error('POST error:', error);
    }
  };

  return { createEvaluationMutation, handleCreateEvaluation };
};
