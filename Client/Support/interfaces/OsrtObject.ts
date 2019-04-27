export default interface OsrtObject {
    readonly uuid:number;
    readonly createdAt:Date;
    create(refer: string | OsrtObject):OsrtObject;
    delete():OsrtObject;
}