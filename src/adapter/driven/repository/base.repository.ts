
export abstract class BaseRepository {

    abstract obter();

    abstract obter(value: any);

    abstract criar(value: any);

    abstract alterar(value: any);

    abstract excluir(value: any);

}