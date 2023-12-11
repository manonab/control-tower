import React from "react";
import type { GroupBase } from "react-select";
import Select from "react-select";
import type { Project } from "~/model/project";

interface Dropdown {
  isTag?: boolean;
  options: Option[] | string[];
  isClickable?: boolean;
  project: Project;
  onChange: () => void
}

interface Option {
  label: string;
  value: string;
}

const translateStatus = (status: string): string => {
  const translations: Record<string, string> = {
    in_progress: "En cours",
    scoping: "En cadrage",
    completed: "Terminé",
  };

  return translations[status] || status;
};

export const CustomDropDown: React.FC<Dropdown> = ({ project, isClickable, options, isTag }: Dropdown) => {
  if (isTag) {
    const tagOptions = (options as string[]).map((option: string) => ({
      label: translateStatus(option),
      value: option,
    }));
    const defaultValue = { label: translateStatus("in_progress"), value: "in_progress" };
    const formattedOptions: GroupBase<Option>[] = [{ options: tagOptions }];

    return (
      <Select
        isDisabled={!isClickable}
        defaultValue={project?.status ? { label: translateStatus(project.status), value: project.status } : defaultValue}
        className={`rounded-sm w-[150px] ${!isClickable ? "text-disabled cursor-not-allowed" : "cursor-pointer"} text-xs`}
        options={formattedOptions}
      />
    );
  }
  return (
    <Select
      isDisabled={!isClickable}
      defaultValue={project?.status ? { value: project.risk_model_id } : null}
      className={`rounded-sm ${!isClickable ? "text-disabled cursor-not-allowed" : "cursor-pointer"} text-xs my-custom-select w-[150px]`}
      options={options as Option[]}
    />
  );
};
