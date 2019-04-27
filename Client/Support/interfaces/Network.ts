enum NetWorksType {
    Http,
    WebSocket
}

export default interface NetWork {
    type: NetWorksType,
    baseUrl?:string;
    port?:string;
}