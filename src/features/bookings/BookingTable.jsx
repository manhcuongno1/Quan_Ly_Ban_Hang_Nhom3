import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  // const { bookings, isLoading, count } = useBookings();

  // if (isLoading) return <Spinner />;

  // if (!bookings.length) return <Empty resourceName="bookings" />;
  const bookings = [
    {
    id: 12,
    created_at: "2024-05-23 06:46:53.968698+00",
    startDate: '2024-05-15 13:43:58',
    endDate: "2024-05-31 13:44:04",
    status: 'unconfirmed',
    totalPrice: 15000,
    Drinks: {
        name: 'tra sua',
    },
    guests: {
        fullName: 'nguyen van a',
        email: 'cuongsdbha@gmail.com',
      }
    },
    {
    id: 13,
    created_at: "2023-05-23 06:46:53.968698+00",
    startDate: '2023-05-15 13:43:58',
    endDate: "2023-05-31 13:44:04",
    status: 'checked-in',
    totalPrice: 175000,
    Drinks: {
        name: 'tra sua',
    },
    guests: {
        fullName: 'nguyen van b',
        email: 'cuongsdbha@gmail.com',
    }}
  ];
  
  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Drink</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          {/* <Pagination count={count} /> */}
          <Pagination count={15} />

        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;