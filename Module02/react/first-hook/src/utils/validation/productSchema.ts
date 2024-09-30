import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1, "Kolom title harus diisi"),
  description: z
    .string()
    .min(10, "Kolom description harus diisi minimal 10 karakter"),
  price: z.string().min(1, "Kolom price harus diisi"),
});

export type ProductData = z.infer<typeof productSchema>;
