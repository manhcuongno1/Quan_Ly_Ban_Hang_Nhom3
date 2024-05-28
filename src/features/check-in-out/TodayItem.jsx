import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import ButtonAdmin from "../../ui/ButtonAdmin";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({name,status}) {

  return (
    <StyledTodayItem>
       {status === "unconfirmed" && <Tag type="green">Khách Đến </Tag>}
        {status === "checked-in" && <Tag type="blue">Khách Đi</Tag>}
     

      <Flag/>
      <Guest>{name}</Guest>
       {status === "unconfirmed" && (
        <ButtonAdmin
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${13}`}
        >
          Check in
        </ButtonAdmin>
      )}
      {status === "checked-in" && <CheckoutButton />}
      
      
    </StyledTodayItem>
  );
}

export default TodayItem;