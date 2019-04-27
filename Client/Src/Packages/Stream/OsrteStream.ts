import OsrtObjectStreamInterface from "../../../Support/interfaces/OsrtObjectStream";
import OsrtObject from "../../../Support/interfaces/OsrtObject"
class OsrtObjectStream implements OsrtObjectStreamInterface {
    uuid: number;
    createdAt: Date;
    onStream:boolean = false;
    constructor () {
        this.uuid = 1;
        this.createdAt = new Date();
    }
    create (OsrtObject: OsrtObject): OsrtObjectStreamInterface{
        this.onStream = true;
        return this;
    }

    delete () : OsrtObjectStreamInterface{
        this.onStream = false;
        return this;
    }
}

export default OsrtObjectStream;