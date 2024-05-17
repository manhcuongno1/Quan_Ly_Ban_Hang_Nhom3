import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createDrink } from "../../services/apiDrinks";

export function useCreateDrink() {
    const queryClient = useQueryClient();

    const { mutate: createdrink, isLoading: isCreating } = useMutation({
        mutationFn: createDrink,
        onSuccess: () => {
            toast.success("New drink successfully created");
            queryClient.invalidateQueries({ queryKey: ["drinks"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isCreating, createdrink };
}