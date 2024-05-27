import supabase, { supabaseUrl } from "./supabase";

export async function getDrinks() {

    let { data, error } = await supabase
        .from('Drinks')
        .select('*')

    return data;
}

export async function getRole() {

    let { data, error } = await supabase
        .from('Accounts')
        .select('Role')

    return data;
}

export async function deleteDrink(id) {
    const { data, error } = await supabase.from("Drinks").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Drink could not be deleted");
    }

    return data;
}

export async function createEditDrink(newDrink, id) {
    const hasImagePath = newDrink.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newDrink.image.name}`.replaceAll(
        "/",
        ""
    );
    const imagePath = hasImagePath
        ? newDrink.image
        : `${supabaseUrl}/storage/v1/object/public/Drink-image/${imageName}`;

    // 1. Create/edit cabin
    let query = supabase.from("Drinks");

    // A) CREATE
    if (!id) query = query.insert([{ ...newDrink, image: imagePath }]).select();

    // B) EDIT
    if (id) query = query.update({ ...newDrink, image: imagePath }).eq("id", id).select();

    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Drink could not be create");
    }

    // 2. Upload image
    if (hasImagePath) return data;

    const { error: storageError } = await supabase.storage
        .from("Drink-image")
        .upload(imageName, newDrink.image);

    // 3. Delete the cabin IF there was an error uplaoding image
    if (storageError) {
        await supabase.from("Drinks").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error(
            "Drink image could not be uploaded and the cabin was not created"
        );
    }
    return data;
}

export async function createDrink(newDrink) {
    const hasImagePath = newDrink.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newDrink.image.name}`.replaceAll(
        "/",
        ""
    );
    const imagePath = hasImagePath
        ? newDrink.image
        : `${supabaseUrl}/storage/v1/object/public/Drink-image/${imageName}`;
    const { data, error } = await supabase
        .from('Drinks')
        .insert([{ ...newDrink, image: imagePath }])
        .select()

    if (error) {
        console.error(error);
        throw new Error("Drink could not be create");
    }

    // 2. Upload image
    if (hasImagePath) return data;

    const { error: storageError } = await supabase.storage
        .from("Drink-image")
        .upload(imageName, newDrink.image);

    // 3. Delete the cabin IF there was an error uplaoding image
    if (storageError) {
        await supabase.from("Drinks").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error(
            "Drink image could not be uploaded and the cabin was not created"
        );
    }
    return data;
}

