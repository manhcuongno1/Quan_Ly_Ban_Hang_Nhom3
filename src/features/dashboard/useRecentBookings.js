import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
    const numDays = 7;
    const queryDate = subDays(new Date(), numDays).toISOString();

    const { isLoading, data: bookings, error } = useQuery({
        queryKey: ["bookings", `last-${numDays}`],
        queryFn: () => getBookingsAfterDate(queryDate),
    });
    console.log(bookings);
    if (error) {
        console.error("Error fetching bookings:", error);
    }

    return { isLoading, bookings };
}
