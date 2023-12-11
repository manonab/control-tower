import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

const API_BASE_URL = 'http://localhost:8080';

const putProjectStatus = async (projectId: number, data) => {
  const url = `${API_BASE_URL}/project_management/project/${projectId}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error updating project status. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

const useUpdateProjectProperty = (projectId: number) => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedRiskModelId, setSelectedRiskModelId] = useState('');

  const { mutate: mutateStatus } = useMutation((newStatus) => putProjectStatus(projectId, { status: newStatus }));
  const { mutate: mutateRiskModelId } = useMutation((newRiskModelId) => putProjectStatus(projectId, { risk_model_id: newRiskModelId }));

  const handlePropertyChange = (property: string, newValue: any) => {
    if (property === 'status') {
      setSelectedStatus(newValue);
      mutateStatus(newValue);
    } else if (property === 'risk_model_id') {
      setSelectedRiskModelId(newValue);
      mutateRiskModelId(newValue);
    }
  };

  useEffect(() => {
    console.log('Project status updated:', selectedStatus);
  }, [selectedStatus]);

  useEffect(() => {
    console.log('Project risk model ID updated:', selectedRiskModelId);
  }, [selectedRiskModelId]);

  return {
    selectedStatus,
    selectedRiskModelId,
    handlePropertyChange,
  };
};

export default useUpdateProjectProperty;
