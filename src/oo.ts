class Pessoa{
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number){
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string{
        return `${this.nome} diz oi`;
    }
}


class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta;
    }

    static retornaNumeroBanco(){
        return 125;
    }

    private getSaldo(){
        return this.saldo;
    }

    depositar(valor: number){
        this.saldo += valor;
    }
}

class ContaBancariaPF extends ContaBancaria{
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPF(123456);
ContaBancaria.retornaNumeroBanco();

