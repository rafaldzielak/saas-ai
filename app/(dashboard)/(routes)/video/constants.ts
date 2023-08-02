import * as z from "zod";

export const videoFormSchema = z.object({
  prompt: z.string().min(1, { message: "Prompt is required" }),
});

export type VideoFormSchema = z.infer<typeof videoFormSchema>;
