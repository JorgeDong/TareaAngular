import { Component, OnInit } from '@angular/core';
import { Product } from './Producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  busqueda = '';
  productos: Product[];
  banderaBusqueda = false;
  productosBusqueda: Product[] = [];
  existencia = false;
  soloexistencia = false;
  ordenar = false;

  constructor() {
    this.productos = [
      new Product(12,"Smartphone","LG","Quadcore 3GHZ", 12018.5,5), 
      new Product(123,"Smartwatch", "Sony", "3GB Ram", 4999.9,0 ), 
      new Product(34,"SmartTV", "Sony", "52 pulgadas, Conexión wifi", 8999.9,3 )
    ];
    this.productosBusqueda = [
      new Product(12,"Smartphone","LG","Quadcore 3GHZ", 12018.5,5), 
      new Product(123,"Smartwatch", "Sony", "3GB Ram", 4999.9,0 ), 
      new Product(34,"SmartTV", "Sony", "52 pulgadas, Conexión wifi", 8999.9,3 )
    ];
   }

  ngOnInit(): void {
  }

  buscar(){
    console.log('Buscando..' + this.busqueda);
    let bus = String(this.busqueda);
    bus = bus.toLocaleUpperCase();

    // this.productos.forEach((element) => {
    //   this.productosBusqueda.push(element);
    // }, this);

    // console.log("ProductosBusqueda");
    // console.log(productosBusqueda1);
  
    // for (let i=0; i <= this.productos.length; i++){
    //   let bnombre = String(this.productos[i].nombre);
    //   bnombre = bnombre.toLocaleUpperCase();
    //   let bdescripcion = String(this.productos[i].descripcion);
    //   bdescripcion = bdescripcion.toLocaleUpperCase();

    //   if( bnombre.includes(bus) || bdescripcion.includes(bus) ){
    //     console.log(this.productos[i]);
    //     this.productosBusqueda.push(this.productos[i]);
    //   }


    // }

    // }.bind(this);

    this.productosBusqueda = [];

    console.log(this.soloexistencia);
    if(this.soloexistencia){
      console.log("entor");
      this.productos.forEach((element) => {
        let bnombre = String(element.nombre);
        bnombre = bnombre.toLocaleUpperCase();
        let bdescripcion = String(element.descripcion);
        bdescripcion = bdescripcion.toLocaleUpperCase();
  
        if( bnombre.includes(bus) || bdescripcion.includes(bus) ){
          console.log(element);
          if(element.existencia != 0){
            this.productosBusqueda.push(element);
          }
        }
      }, this);
    }else{
      this.productos.forEach((element) => {
        let bnombre = String(element.nombre);
        bnombre = bnombre.toLocaleUpperCase();
        let bdescripcion = String(element.descripcion);
        bdescripcion = bdescripcion.toLocaleUpperCase();
  
        if( bnombre.includes(bus) || bdescripcion.includes(bus) ){
          console.log(element);
          this.productosBusqueda.push(element);
        }
      }, this);
    }



    if(this.productosBusqueda.length == 0){
      this.banderaBusqueda = true;
    }else{
      this.banderaBusqueda = false;
    }

    if(this.ordenar){
      console.log("Ordenar");
      this.productosBusqueda.sort(function(a, b){
        return a.precio-b.precio;
      });

    console.log(this.productosBusqueda);
    }

  }

  cambiarExistencia(){
    this.existencia = !this.existencia;
  }

  cambiarSoloExistencia(){
    this.soloexistencia = !this.soloexistencia;
    this.buscar();
  }

  ordenarPorPrecio(){
    this.ordenar = !this.ordenar;
    this.buscar();
  }

}
