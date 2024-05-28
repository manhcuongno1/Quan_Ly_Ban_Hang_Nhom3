import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteDrink as deleteDrinkApi } from "../../services/apiDrinks";

export function useDeleteDrink() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteDrink } = useMutation({
        mutationFn: deleteDrinkApi,
        onSuccess: () => {
            toast.success("Drink successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["drinks"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeleting, deleteDrink };
}