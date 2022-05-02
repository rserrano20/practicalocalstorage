//inicializar variables
let arregloSeries =[]; //arreglo vacio
//actualizo 
mostrarSeries();

function agregarSerie(){
     let cargar = document.getElementById('serie').value;
     arregloSeries.push(cargar);
     console.log(arregloSeries);//agregar
     // guardar datos en localstorage
     localStorage.setItem("seriesKey", JSON.stringify(arregloSeries));
     document.getElementById("serie").value = "";
     mostrarSeries();//llamo a la funcion

}
//mostrar series
function mostrarSeries(){
     if(localStorage.length >0){
          //aqui el localstorage tiene series almacenadas
          let seriesLocalStorage = JSON.parse(localStorage.getItem("seriesKey"));
         // console.log("arreglo parseado"+ seriesLocalStorage);
        //  console.log("arreglo en JSON"+ localStorage.getItem("seriesKey"));
        //traer ul padre
        let padreUl = document.getElementById('listaSeries');
        borrarLista();
        //for(let i=0;i<seriesLocalStorage.length; i++){}
        //otra manera
        for(let indice in seriesLocalStorage){
             //opcion 1
             let li = document.createElement('li');//<li></li>
             li.innerText = seriesLocalStorage[indice];

             li.className = "list-group-item";
             li.id = indice;
             //agrego el evento a cada li
             li.addEventListener("click",function (){
                  serieSeleccionada(li.id)
             });

             padreUl.appendChild(li);//por cada elemento que tenga el arreglo
        }
        if(arregloSeries.length == 0){
             arregloSeries = seriesLocalStorage;
        }

     }else{
          //el localstorage esta vacio
     }
}
function borrarLista(){
     //borrar todos los items hijos de ul
     let padreUl = document.getElementById('listaSeries');
     if(padreUl.children.length > 0){
          //eliminar nodos hijos
          while(padreUl.firstChild){
               padreUl.removeChild(padreUl.firstChild)

          }
     }
}
function arregloSeries(event){
     console.log(event);
     if(event.keyCode == 13){
          agregarSerie();
     }
}
function borrarTodo(){
     //borrar todo el localstorage
     localStorage.clear();
     borrarLista();
     arregloSeries = [];//limpio arreglo de series
}
function serieSeleccionada(id){
     console.log("seleccione una serie"+id);
     arregloSeries.splice(id,1);//borrar desde arreglo
     localStorage.setItem("seriesKey",JSON.stringify(arregloSeries));
     mostrarSeries();

}