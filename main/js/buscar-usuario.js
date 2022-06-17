
//*Código para toggle de comboBox de Buscar por:
    console.log("Todos los recursos terminaron de cargar!");
    function oppearInput(){
        let input_busq = document.getElementById('tip_busq').value;
        let input_dni = document.getElementsByClassName('dni');
        let nombre = document.getElementsByClassName('nombre');
        let apeMate = document.getElementsByClassName('apeMate');
        let apePate = document.getElementsByClassName('apePate');
    
        switch (input_busq) {
            case "dni":
                input_dni[0].style.display = "block";
                nombre[0].style.display = "none";
                apeMate[0].style.display = "none";
                apePate[0].style.display = "none";           
                console.log(input_busq);
                break;
            case "nom_y_ape":
                input_dni[0].style.display = "none";
                nombre[0].style.display = "block";
                apeMate[0].style.display = "block";
                apePate[0].style.display = "block";    
                console.log(input_busq);
                break;
            case "":
                input_dni[0].style.display = "block";
                nombre[0].style.display = "none";
                apeMate[0].style.display = "none";
                apePate[0].style.display = "none";     
                console.log(input_busq);
                break;
        }
    }

//Código para Datables
class DataTable{
    element;
    headers;
    items;
    copyItems;
    selected;
    pagination;
    numberOfEntries;
    headerButtons; 
    
    constructor(selector, headerButtons){
        this.element = document.querySelector(selector);
        this.headers = [];
        this.items = [];
        this.pagination = {
            total: 0, 
            noItemsPerPage: 0,
            noPages: 0,
            actual: 0,
            pointer:0,
            diff:0,
            lastPageBeforeDots:0,
            noButtonsBeforeDots:4
        };
        this.selected=[];
        this.numberOfEntries = 5;
        this.headerButtons = headerButtons;
    }

    parse(){
      // const headers =[...this.element.];
      // const trs =[];
    }
}
//$('#example').DataTable(); //Para inicializar datatables de la manera más simple

// $(document).ready(function() {    
//     $('#example').DataTable({
//     //para cambiar el lenguaje a español
//         "language": {
//                 "lengthMenu": "Mostrar _MENU_ registros",
//                 "zeroRecords": "No se encontraron resultados",
//                 "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
//                 "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
//                 "infoFiltered": "(filtrado de un total de _MAX_ registros)",
//                 "sSearch": "Buscar:",
//                 "oPaginate": {
//                     "sFirst": "Primero",
//                     "sLast":"Último",
//                     "sNext":"Siguiente",
//                     "sPrevious": "Anterior"
// 			     },
// 			     "sProcessing":"Procesando...",
//             }
//     });     
// });