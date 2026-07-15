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



document
.getElementById("load-more")
.addEventListener("click",()=>{

    currentPage++;

    loadCustomer();

});
