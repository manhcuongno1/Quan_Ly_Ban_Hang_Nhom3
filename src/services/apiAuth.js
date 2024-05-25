import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullName,
                avatar: "",
            },
        },
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function getUser() {
    try {
        const { data: user, error } = await supabase.auth.getUser();
        if (error) {
            throw error;
        }
        console.log(user);
        return user; // Trả về thông tin về người dùng hiện tại
    } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error.message);
        throw error;
    }
}



export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);
    return data?.user;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}



