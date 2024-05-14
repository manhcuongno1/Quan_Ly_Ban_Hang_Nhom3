import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );

const fakeCart = [
    {
        coffeId: 12,
        name: 'Cà phê đen',
        quantity: 2,
        unitPrice: 16,
        totalPrice: 5,
      },
      {
        coffeId: 6,
        name: 'Trà đào',
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
      },
      {
        coffeId: 11,
        name: 'Cà phê sữa',
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
      },
];

function CreateOrder() {
    // const [withPriority, setWithPriority] = useState(false);
    const cart = fakeCart;

    return (
        <div className="px-4 py-6">
            <h2 className="mb-8 text-xl font-semibold">Xác nhận đặt hàng</h2>

            <Form method="POST">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Họ Và Tên</label>
                    <input className="input grow" type="text" name="customer" required />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Số điện thoại</label>
                    <div className="grow">
                        <input className="input w-full" type="tel" name="phone" required />
                    </div>
                </div>

                <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Địa chỉ nhận hàng</label>
                    <div className="grow">
                        <input className="input w-full" type="text" name="address" required />
                    </div>
                </div>

                <div className="mb-12 flex items-center gap-5">
                <input     
                        className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                        type="checkbox"
                        name="priority"
                        id="priority"
                        // value={withPriority}
                        // onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority" className="font-medium">
                        Tôi xác nhận, và thanh toán đơn hàng
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <Button type="primary">Đặt ngay</Button>
                </div>
            </Form>
        </div>
    );
}

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === "on",
    };
    const newOrder = await createOrder(order);
    return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;