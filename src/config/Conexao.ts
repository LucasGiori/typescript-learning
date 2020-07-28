import { Client } from  'ts-postgres'

export class Conexao {
    
    private conexao!: Client ;

    get getConexao():Client {
        return this.conexao;
    }
    set setConexao(conexao:Client) {
        this.conexao = conexao;
    }

    private connection():Client{
        const client = new Client({"host":"localhost"
                                    ,"port":5432
                                    ,"database":"faculdade"
                                    ,"user":"postgres"
                                    ,"password":"lucas770"
                                });        
        client.connect();
    }


}