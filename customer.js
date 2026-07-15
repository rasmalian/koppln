let currentPage = 1;



async function loadCustomer(){


    const result =
    await getCustomer(currentPage);


    const list =
    document.getElementById(
        "customer-list"
    );


    result.data.forEach((item)=>{


        list.innerHTML += `

        <div class="customer-card">

            <h3>${item.nama}</h3>

            <p>
            ${item.handphone}
            </p>

            <p>
            Last Service :
            ${item.last_service}
            </p>

            <p>
            Last BC :
            ${item.last_bc}
            </p>

            <p>
            No BC :
            ${item.no_bc}
            </p>


            <button
            onclick="viewCustomer('${item.handphone}')">

            View

            </button>


            <button
            onclick="editCustomer('${item.handphone}')">

            Edit

            </button>

        </div>

        `;

    });

}



function viewCustomer(handphone){

    alert(
        "Customer : " +
        handphone
    );

}



function editCustomer(handphone){

    alert(
        "Edit Customer : " +
        handphone
    );

}

function openEdit(item){

    document.getElementById(
        "editNama"
    ).value = item.nama;


    document.getElementById(
        "editAlamat"
    ).value = item.alamat;


    document.getElementById(
        "editHandphone"
    ).value = item.handphone;


    document.getElementById(
        "editLastService"
    ).value = item.last_service;


    document.getElementById(
        "editLastBC"
    ).value = item.last_bc;


    document.getElementById(
        "editNoBC"
    ).value = item.no_bc;


    document.getElementById(
        "editSheet"
    ).classList.add(
        "active"
    );

}

function closeEdit(){

    document.getElementById(
        "editSheet"
    ).classList.remove(
        "active"
    );

}

async function saveCustomer(){

    const data = {

        handphone:
        document.getElementById("editHandphone").value,

        nama:
        document.getElementById("editNama").value,

        alamat:
        document.getElementById("editAlamat").value,

        last_service:
        document.getElementById("editLastService").value,

        last_bc:
        document.getElementById("editLastBC").value,

        no_bc:
        document.getElementById("editNoBC").value

    };


    const result =
    await editCustomerAPI(data);


    if(result.status){

        alert("Berhasil diupdate");

        location.reload();

    }else{

        alert(result.message);

    }

}



document
.getElementById("load-more")
.addEventListener("click",()=>{

    currentPage++;

    loadCustomer();

});
