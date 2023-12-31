import React, { useState, useEffect } from "react";
import type { GroupBase } from "react-select";
import Select from "react-select";
import type { Project } from "~/model/project";
import type { Option } from "~/utils/content";
import { translateRiskModelId, translateStatus } from "~/utils/content";

interface Dropdown {
  isTag?: boolean;
  options: Option[] | string[];
  isClickable?: boolean;
  project: Project;
  onChange: (selectedOption: Option | null) => void;
}

export const CustomDropDown: React.FC<Dropdown> = ({ project, isClickable, options, isTag, onChange }: Dropdown) => {
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

  useEffect(() => {
    if (isTag && project?.status) {
      setSelectedValue({ label: translateStatus(project.status), value: project.status });
    } else if (project?.risk_model_id) {
      setSelectedValue({ value: translateRiskModelId(project.risk_model_id) });
    } else {
      setSelectedValue(null);
    }
  }, [project, isTag]);

  const handleDropdownChange = (selectedOption: Option | null) => {
    setSelectedValue(selectedOption);
    onChange(selectedOption);
  };

  if (isTag) {
    const tagOptions = (options as string[]).map((option: string) => ({
      label: translateStatus(option),
      value: option,
    }));
    const formattedOptions: GroupBase<Option>[] = [{ options: tagOptions }];

    return (
      <Select
        isDisabled={!isClickable}
        value={selectedValue}
        className={`rounded-sm w-[150px] ${!isClickable ? "text-disabled cursor-not-allowed" : "cursor-pointer"} text-xs`}
        options={formattedOptions}
        onChange={(selectedOption) => handleDropdownChange(selectedOption)}
      />
    );
  }

  return (
    <Select
      isDisabled={isClickable}
      value={selectedValue}
      className={`rounded-sm cursor-pointer text-xs my-custom-select w-[150px]`}
      options={options as Option[]}
      onChange={(selectedOption) => handleDropdownChange(selectedOption)}
    />
  );
};
