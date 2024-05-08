import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
    const { isLoading, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
    });

    const email = user?.email || '';
    return { isLoading, user, isAuthenticated: user?.role === "authenticated", email };
}