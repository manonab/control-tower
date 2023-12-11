import { useGetProjects } from '~/hooks/api/use-get-project';

export const DescriptionProjet = () => {
  const { data: project, isLoading, error } = useGetProjects(1);

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur lors du chargement des données du projet</p>;
  }

  return (
    <div className="w-full flex-col flex gap-3 md:m-0 mt-5 bg-white shadow-sm rounded-md border-lightGray border min-h-[200px] max-w-[550px] p-5">
      <p className='font-bold  text-[20px]'>Description du projet</p>
      <p className='text-base'>{project?.description}</p>
    </div>
  );
};