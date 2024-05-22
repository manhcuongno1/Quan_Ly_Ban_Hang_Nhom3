import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditDrink } from "../../services/apiDrinks";
import { toast } from "react-hot-toast";

export function useEditDrink() {
    const queryClient = useQueryClient();

    const { mutate: editDrink, isLoading: isEditing } = useMutation({
        mutationFn: ({ newDrinkData, id }) => createEditDrink(newDrinkData, id),
        onSuccess: () => {
            toast.success("Drink successfully edited");
            queryClient.invalidateQueries({ queryKey: ["drinks"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isEditing, editDrink };
}