import OsrtObjectInterface from "../../../Support/interfaces/OsrtObject";

class OsrtObject implements OsrtObjectInterface {
    uuid: number;
    createdAt: Date;
    
    constructor () {
        this.uuid = 1;
        this.createdAt = new Date();
    }
    create (): OsrtObjectInterface{
        return this;
    }

    delete () : OsrtObjectInterface{
        return this;
    }
}

export default OsrtObject;