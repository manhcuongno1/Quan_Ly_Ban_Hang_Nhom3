import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats() {
  // 1.
//   const numBookings = bookings.length;

  // 2.
//   const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
//   const checkins = confirmedStays.length;

  // 4.
//   const occupation =
//     confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
//     (numDays * cabinCount);
  // num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <Stat
        title="ĐƠN HÀNG"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={15}
      />
      <Stat
        title="DOANH THU"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(925000)}
      />
      <Stat
        title="KHÁCH ĐẾN"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={12}
      />
      <Stat
        title="TỶ LỆ ĐƠN HÀNG"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(0.5 * 100) + "%"}
      /> 
    </>
  );
}

export default Stats;