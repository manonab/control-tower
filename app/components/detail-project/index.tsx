import { useGetProjects } from "~/hooks/api/use-get-project";
import { DetailsProject } from "./details-project"
import { DescriptionProjet } from "./description-project"
import { ListEvaluation } from "./list-evaluation"

export const DetailProject: React.FC = () => {
  const { data: project, isLoading, error } = useGetProjects(1);

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur lors du chargement des données du projet</p>;
  }
  return (
    <div className="container flex-col flex gap-6 md:pb-10 md:my-20 mx-auto">
      <p className="md:text-[50px] text-[30px] text-center md:text-left font-black uppercase">{project?.name}</p>
      <div className="hidden md:flex gap-12">
        <DetailsProject />
        <div className="flex-col flex gap-12 w-full">
          <DescriptionProjet />
          <ListEvaluation />
        </div>
      </div>
      <div className="md:hidden flex-col flex gap-12 w-full">
        <DetailsProject />
        <DescriptionProjet />
        <ListEvaluation />
      </div>
    </div>
  )
}