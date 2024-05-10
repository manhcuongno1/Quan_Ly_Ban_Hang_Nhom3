import supabase from "./supabase";

export async function getDrinks() {

    let { data, error } = await supabase
        .from('Drinks')
        .select('*')

    return data;
}