import OsrtObject from './OsrtObject';

export default interface OsrtObjectStream extends OsrtObject{
    createStream():OsrtObjectStream;
    destroyStream():OsrtObjectStream;
}