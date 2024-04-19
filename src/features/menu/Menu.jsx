import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import { useEffect } from 'react';
import { getDrinks } from "../../services/apiDrinks";

function Menu() {
  useEffect(function () {
    getDrinks().then((data) => console.log(data));
  }, []);
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((coffee) => (
        <MenuItem coffee={coffee} key={coffee.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;