function showPage(name){


    const pages = [

        "customer",
        "schedule",
        "cashflow",
        "chart"

    ];


    pages.forEach((page)=>{

        document
        .getElementById(
            page + "-page"
        )
        .style.display = "none";

    });


    document
    .getElementById(
        name + "-page"
    )
    .style.display = "block";


}



window.onload = function(){

    loadCustomer();

}
