import styled from "styled-components";

import Stats from "./Stats";

import TodayActivity from "../check-in-out/TodayActivity";
import DurationChart from "./DurationChart";
import SalesChart from "./SalesChart";

import { useRecentStays } from "./useRecentStays";


const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const confirmedStays = [
    { num: 1 },
    { num: 2 },
    {num:3},

    {num:4},
      
    
  ];

  return (
    <StyledDashboardLayout>
        <Stats/>
         <TodayActivity />
        <DurationChart confirmedStays={confirmedStays}/>
        <SalesChart  numDays={10} />    
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;