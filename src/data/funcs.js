import supabase from "./supabase"

export async function addSubscrition(email, name) {
    const { data, error } = await supabase
    .from('Subscribes')
    .insert([
        { nombre: name, email: email },
    ])

    console.log(error);

}

export async function addPerson(firstname, lastname, email, phone) {
    
    const { data, error } = await supabase
    .from('Persons')
    .insert([
        {
            nombre: firstname,
            apellido: lastname,
            correo: email,
            telefono: phone
        },
    ])

    console.log(error);
}

export async function addPersonSubscribeToCourses(firstname, lastname, email, phone, age) {
    
    const { data, error } = await supabase
    .from('Form')
    .insert([
        {
            nombre: firstname,
            apellido: lastname,
            telefono: phone,
            edad: age,
            email: email,
        },
    ])

    console.log(error);
}