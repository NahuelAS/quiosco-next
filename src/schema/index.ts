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