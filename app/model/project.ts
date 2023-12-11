import { z } from "zod";

const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    last_name: z.string(),
});

const ProjectSchema = z.object({
    id: z.number(),
    name: z.string(),
    reference: z.string(),
    manager: UserSchema,
    status: z.enum(["in_progress", "scoping", "completed"]),
    risk_model_id: z.number(),
    start_date: z.string(),
    end_date: z.string().nullable(),
    description: z.string(),
    domainId: z.number(),
    programId: z.number().nullable(),
});
const getStatusOptions = () => {
    return ProjectSchema.shape.status._def.values;
};
export const statusOptions = getStatusOptions();
export type Project = z.infer<typeof ProjectSchema>;

const EvaluationSchema = z.object({
    status: z.enum(["pending", "validated", "reference"]),
    creation_date: z.string(),
    validation_date: z.string().nullable(),
    name: z.string(),
});


export type Evaluation = z.infer<typeof EvaluationSchema>;
