const API_URL =
"https://script.google.com/macros/s/XXXXXXXXXXXX/exec";


async function getCustomer(page = 1){

    const response = await fetch(

        API_URL +
        "?action=view&page=" +
        page

    );

    return await response.json();

}



async function addCustomer(data){

    const params = new URLSearchParams(data);

    const response = await fetch(

        API_URL +
        "?action=add&" +
        params.toString()

    );

    return await response.json();

}



async function editCustomerAPI(data){

    const params = new URLSearchParams(data);

    const response = await fetch(

        API_URL +
        "?action=edit&" +
        params.toString()

    );

    return await response.json();

}
