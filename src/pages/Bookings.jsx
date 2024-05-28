import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
function Bookings() {
  return (
     <>
      <Row type="horizontal">
        <Heading as="h1">Tất cả đơn hàng</Heading>
       
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
