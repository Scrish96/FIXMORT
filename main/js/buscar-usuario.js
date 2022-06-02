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