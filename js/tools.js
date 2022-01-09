function exposeMethod(name, method){
    window[name] = method;
}

export{
    exposeMethod
}