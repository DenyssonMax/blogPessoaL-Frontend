import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem{
    public id: number;
    public titulo: String;
    public texto: String;
    public date: Date;
    public usuario: User;
    public tema: Tema;

}