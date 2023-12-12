import type { Evaluation } from "~/model/project";
import { UnfoldMore, Check } from '@mui/icons-material';
import { useGetEvaluations } from "~/hooks/api/use-evaluations";

export const ListEvaluation: React.FC = () => {
  const { data: evaluations, isLoading, error } = useGetEvaluations();

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur lors du chargement des évaluations</p>;
  }

  return (
    <>
        <div className="flex-col gap-4 flex">
          <p className="text-base font-medium text-validated items-center">Evaluations validées <Check /></p>
          <table className="table table-striped shadow-lg bg-lightGray">
            <thead className="h-[40px] font-light text-sm bg-lightGreen rounded rounded-md">
              <tr>
                <th>
                  Noms d'évaluations
                  <UnfoldMore sx={{ width: "12px", height: "12px" }} className="cursor-pointer" />
                </th>
                <th>
                  Date de création
                  <UnfoldMore sx={{ width: "12px", height: "12px" }} className="cursor-pointer" />
                </th>
                <th>
                  Date de validation
                  <UnfoldMore sx={{ width: "12px", height: "12px" }} className="cursor-pointer" />
                </th>
              </tr>
            </thead>
            <tbody>
            {evaluations.evaluations.map((evaluation: Evaluation, index: number) => (
                <tr key={index} className="border-b text-sm w-full">
                  <td className="p-2 w-1/3 text-center">{evaluation.name}</td>
                  <td className="p-2 w-1/3 text-center">{evaluation.creation_date}</td>
                  <td className="p-2 w-1/3 text-center">{evaluation.validation_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </>
  );
};
