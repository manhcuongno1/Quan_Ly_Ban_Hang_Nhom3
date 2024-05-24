import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteDrink } from "./useDeleteDrink";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useState } from "react";
import { useCreateDrink } from "./useCreateDrink";
import CreateDrinkForm from "./CreateDrinkForm";



const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;
const Id = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Drink = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Soldout = styled.div`
  font-family: "Sono";
  font-weight: 600;
  color: var(--color-red-700);
`;

const Notsoldout = styled.div`
  font-family: "Sono";
  font-weight: 600;
  color: var(--color-green-700);
`;
function DrinkRow({ drink }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteDrink } = useDeleteDrink();
  const { isCreating, createdrink} = useCreateDrink();

  const {
    id: drinkId,
    name,
    unitPrice,
    soldOut,
    image,    
  } = drink;

  // function handleDuplicate() {
  //   createDrink({
  //     name: `Copy of ${name}`,
  //     unitPrice,
  //     soldOut,
  //     imageUrl,     
  //   });
  // }



  return (
    <>
    <TableRow role="row">
      <Img src={image} />
      <Id>{drinkId }</Id>
      <Drink>{name}</Drink>
      <Price>{formatCurrency(unitPrice)}</Price>  
      {soldOut ? (
          <Soldout>Đã bán hết</Soldout>
        ) : (
         <Notsoldout>Vẫn còn hàng</Notsoldout>

      )}
      <div>
        <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>
        <button onClick={() => deleteDrink(drinkId)} disabled={isDeleting}>
            <HiTrash />
          </button>
      </div>
      </TableRow>
      {showForm && <CreateDrinkForm drinkToEdit={drink} />}
      </>
  );
}

export default DrinkRow;