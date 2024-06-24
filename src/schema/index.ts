import { z } from "zod";

export const OrderSchema  = z.object({
    name: z.string().min(1, 'Ingrese un Nombre, por favor'),
    total: z.number().min(1, 'Su orden no es Correcta'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
});

export const OrderIdSchema = z.object({
    orderId: z.string().transform((value) => parseInt(value)).refine(value => value > 0, {message: "¡Error!"})
});

export const SearchSchema = z.object({
    search: z.string().trim().min(1, {message: "La busqueda no puede ir vacia"})
});
