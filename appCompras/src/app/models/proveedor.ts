/**
 * Interfaz que determina los atributos de los proveedores con los que vamos
 * a trabajar
 * @author José Palomino Ochoa
 */
export interface Proveedor {

    /**ID del proveedor*/
    id:number;

    /**Nombre del proveedor*/
    nombre:string;

    /**CIF del proveedor*/
    cif:string;

    /**Dirección del proveedor*/
    direccion:string;

    /**Código postal del proveedor*/
    cp:string;

    /**Localidad del proveedor*/
    localidad:string;

    /**Provincia del proveedor*/
    provincia:string;

    /**Teléfono del proveedor*/
    telefono:number;

    /**Correo electrónico del proveedor*/
    email:string;

    /**Contacto del proveedor*/
    contacto:string;

}
