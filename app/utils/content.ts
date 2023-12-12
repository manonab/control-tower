export const modelJson = [
    {
        id: 207,
        name: "Modèle de Risque 1",
        description: "Description du Modèle de Risque 1",
    },
    {
        id: 210,
        name: "Modèle de Risque 2",
        description: "Description du Modèle de Risque 2",
    },
    {
        id: 201,
        name: "Modèle de Risque 3",
        description: "Description du Modèle de Risque 3",
    },
];
export const translateStatus = (status: string): string => {
    const translations: Record<string, string> = {
        in_progress: "En cours",
        scoping: "En cadrage",
        completed: "Terminé",
    };

    return translations[status] || status;
};

export const translateRiskModelId = (riskModelId: number): Option => {
    const translations: Record<number, Option> = {
        207: { label: "Modèle de Risque 1", value: "207" },
        210: { label: "Modèle de Risque 2", value: "210" },
        201: { label: "Modèle de Risque 3", value: "201" },
    };

    return (
        translations[riskModelId] || {
            label: "Inconnu",
            value: String(riskModelId),
        }
    );
};
export interface Option {
    label: string;
    value: string;
}
