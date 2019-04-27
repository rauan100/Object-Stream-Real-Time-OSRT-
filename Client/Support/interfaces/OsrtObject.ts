export default interface OsrtObject {
    readonly uuid:number;
    readonly createdAt:Date;
    create():OsrtObject;
    delete():OsrtObject;
}