export class Veiculo {

    private _id: number;   
    private _tipo: string;    
    private _marca: string;    
    private _modelo: string;    
    private _cor: string;    
    private _ano: number;
    
    constructor (id?: number, tipo?: string, marca?: string, modelo?: string, cor?: string, ano?: number) {
        this._id = id;
        this._tipo = tipo;
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
        this._ano = ano;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get tipo(): string {
        return this._tipo;
    }

    public set tipo(value: string) {
        this._tipo = value;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(value: string) {
        this._modelo = value;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(value: string) {
        this._cor = value;
    }

    public get ano(): number {
        return this._ano;
    }

    public set ano(value: number) {
        this._ano = value;
    }
}