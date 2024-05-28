
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import CabinTableOperations from "../features/cabins/CabinTableOperations";
import DrinkTable from "../features/drinks/DrinkTable";
import ButtonAdmin from "../ui/ButtonAdmin";
import { useState } from "react";
import CreateDrinkForm from "../features/drinks/CreateDrinkForm";
import Modal from "../ui/Modal";
function Drinks() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Drinks</Heading>
        <p>Filter / Sort</p>
        
      </Row>

      <Row>
        <DrinkTable />
        

        <Modal>
        <Modal.Open opens="drink-form">
          <ButtonAdmin>Thêm Sản Phẩm</ButtonAdmin>
        </Modal.Open>
        <Modal.Window name="drink-form">
          <CreateDrinkForm />
        </Modal.Window>
      </Modal>
        {/* <ButtonAdmin onClick={() => setShowForm((show) => !show)}>
          Add new drink
        </ButtonAdmin> */}
        {showForm && <CreateDrinkForm />}
      </Row>
    </>
  );
}

export default Drinks;