import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import ButtonAdmin from "../../ui/ButtonAdmin";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { createEditDrink } from "../../services/apiDrinks";
import { useCreateDrink } from "./useCreateDrink";
import { useEditDrink } from "./useEditDrink";

function CreateDrinkForm({ drinkToEdit = {},onCloseModal}) {
  
  
  const { isCreating, createdrink } = useCreateDrink();
  const { isEditing, editDrink } = useEditDrink();

  const { id: editId, ...editValues } = drinkToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  // const queryClient = useQueryClient();

  // const { mutate, isLoading: isCreating } = useMutation({
  //   mutationFn: createEditDrink,
  //   onSuccess: () => {
  //     toast.success("New drink successfully created");
  //     queryClient.invalidateQueries({ queryKey: ["drinks"] });
  //     reset();
  //   },
  //   onError: (err) => toast.error(err.message),
  // });

  function onSubmit(data) {
    // mutate({ ...data, image: data.image[0] });
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editDrink(
        { newDrinkData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
            
          },
        }
      );
    else
      createdrink(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();

          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Tên Sản Phẩm" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      

      <FormRow label="Giá" error={errors?.unitPrice?.message}>
          <Input
            type="number"
            id="unitPrice"
            disabled={isCreating}
            {...register("unitPrice", {
              required: "This field is required",
              min: {
                value: 1000,
                message: "Price should be at least 1000",
              },
            })}
            step="1000" // Đặt bước tăng giá trị là 1000
          />
</FormRow>


        <FormRow label="Hết Hàng" error={errors?.soldOut?.message}>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="soldOut"
              disabled={isCreating}
              {...register("soldOut")}
            />
            <label htmlFor="soldOut"></label>
          </div>
</FormRow>

    

      <FormRow label="Thêm Ảnh">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <ButtonAdmin variation="secondary" type="reset">
          Hủy
        </ButtonAdmin>
        <ButtonAdmin disabled={isCreating}>
          {isEditSession ? "Edit drink" : "Thêm Sản Phẩm Mới"}
        </ButtonAdmin>
      </FormRow>
    </Form>
  );
}

export default CreateDrinkForm;