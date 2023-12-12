import { useMutation, useQuery, useQueryClient } from 'react-query';
import dayjs from 'dayjs';

const fetchEvaluations = async () => {
  const response = await fetch(`https://ezw4k.wiremockapi.cloud/project_management/project/1/evaluation`);
  if (!response.ok) {
    throw new Error(`Une erreur s'est produite lors de la récupération des données`);
  }
  return response.json();
};

const postEvaluation = async (evaluationData: any): Promise<void> => {
  const response = await fetch(`https://ezw4k.wiremockapi.cloud/project_management/project/1/evaluation`, {
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

export const useGetEvaluations = () => {
  return useQuery(['evaluations'], fetchEvaluations);
};

export const usePostEvaluationMutation = () => {
  const queryClient = useQueryClient();

  const mutate = (evaluationData: any): Promise<void> => {
    return postEvaluation(evaluationData);
  };

  const invalidateQueries = (): void => {
    queryClient.invalidateQueries(['evaluations']);
  };

  return useMutation(mutate, {
    onSuccess: () => {
      invalidateQueries();
    },
  });
};

export const useCreateEvaluation = () => {
  const createEvaluationMutation = usePostEvaluationMutation();

  const handleCreateEvaluation = async () => {
    const randomId = Math.floor(Math.random() * 1000000) + 1;
    const formattedDate = dayjs().format('YYYY-MM-DD');

    try {
      const evaluationData = {
        id: randomId,
        name: 'new test evaluation',
        creation_date: formattedDate,
        validation_date: formattedDate,
        status: 'validated',
      };
      await createEvaluationMutation.mutate(evaluationData);
    } catch (error) {
      console.error('POST error:', error);
    }
  };

  return { createEvaluationMutation, handleCreateEvaluation };
};