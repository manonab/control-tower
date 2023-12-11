import { Button } from "~/common/button";
import { CustomDropDown } from "~/common/custom-dropdown";
import { useGetProjects } from "~/hooks/api/use-get-project";
import { statusOptions } from "~/model/project";
import { modelJson } from "~/utils/content";
import dayjs from "dayjs";
import { ArrowForward } from '@mui/icons-material';
import { useGetEvaluations } from "~/hooks/api/evaluations";

export const DetailsProject: React.FC = () => {
  const { data: project, isLoading, error } = useGetProjects(1);
  const { data: evaluations } = useGetEvaluations(1);

  const riskModels = modelJson || [];


  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur lors du chargement des données du projet</p>;
  }

  return (
    <div className="flex-col flex gap-6 min-w-[350px] bg-white border border-lightGray shadow-lg rounded-lg rounded p-5 max-h-[350px]">
      <p className="font-bold text-center">Informations</p>
      <div className="flex md:gap-12 gap-[90px] justify-center md:justify-start items-center">
        <p className="font-base">Manager</p>
        <p className="font-base bg-royalBlue rounded-[999px] w-8 h-8 p-1 text-center text-white">{project?.manager.name.split(' ')[0][0]}{project?.manager.last_name.split(' ')[0][0]}</p>
        <p className="font-medium">John Doe</p>
      </div>
      <div className="flex md:gap-[100px] gap-[160px] items-center justify-center md:justify-start">
        <p className="font-base">Statut</p>
        <CustomDropDown
          project={project}
          options={statusOptions}
          isClickable isTag />
      </div>
      <div className="flex md:gap-3 gap-[75px] items-center justify-center md:justify-start">
        <p className="font-base">Modèle de risque</p>
        <CustomDropDown
          project={project}
          isClickable={!project?.risk_model_id && evaluations && evaluations?.length === 0}
          options={riskModels.map((model) => ({ label: model.name, value: model.id.toString() }))} />
      </div>
      <div className="flex md:gap-20 gap-32 items-center justify-center md:justify-start">
        <p className="font-base">Date</p>
        <div className="flex justify-around w-[200px] items-center">
          <p className="font-light">{dayjs(project?.start_date).format('DD-MM-YYYY')}</p>
          <ArrowForward sx={{ width: "16px", height: "16px" }} />
          <p className="font-light">{dayjs(project?.end_date).format('DD-MM-YYYY')}</p>
        </div>
      </div>
      <Button
        title="Nouvelle évaluation"
        isClickable={!project?.risk_model_id && evaluations && evaluations.length === 0}
      />
    </div>
  )
}