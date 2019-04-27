import OsrtObject from './OsrtObject';

export default interface OsrtObjectElement extends OsrtObject{
    readonly name:string;
    clone():OsrtObject;
    attributes:Map<String, String>
    target:HTMLAnchorElement;
}