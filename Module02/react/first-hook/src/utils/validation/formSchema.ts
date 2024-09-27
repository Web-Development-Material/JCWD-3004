import { z } from "zod";

// definisikan schema validasinya
export const formSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  plan: z.enum(["basic", "premium"]).refine((val) => val, {
    message: "Pilih opsi yang valid (basic atau premium)",
  }),
});

// definisikan typescript interface dari formSchema
export type FormData = z.infer<typeof formSchema>;