import OsrtObject from './OsrtObject';

export default interface OsrtObjectStream extends OsrtObject{
    onStream:boolean;
    create(refer: OsrtObject):OsrtObjectStream;
    delete():OsrtObjectStream;
}