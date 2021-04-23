export interface Pedidosadmin {
    id:any,
    name: string,
    email: string,
    cedula:string,
    telefono: string,
    direccion: string,
    numero_casa: string,
    estado: string,
    cliente_id : bigint,
    producto_id: bigint,
    asociado_id: bigint,
}