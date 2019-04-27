import OsrtObjectElementInterface from "../../../Support/interfaces/OsrtElement";


class OsrtObjectElement implements OsrtObjectElementInterface {
    uuid: number;
    createdAt: Date;
    name: string;
    target:HTMLAnchorElement;
    attributes:Map<string, string>

    constructor () {
        this.uuid = 1;
        this.createdAt = new Date();
    }
    create (): OsrtObjectElementInterface{
        return this;
    }

    delete () : OsrtObjectElementInterface{
        return this;
    }

    clone () : OsrtObjectElementInterface{
        return this;
    }
}

export default OsrtObjectElement;