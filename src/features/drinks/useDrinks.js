import { useQuery } from "@tanstack/react-query";
import { getDrinks } from "../../services/apiDrinks";

export function useDrinks() {
    const {
        isLoading,
        data: drinks,
        error,
    } = useQuery({
        queryKey: ["drinks"],
        queryFn: getDrinks,
    });

    return { isLoading, error, drinks };
}