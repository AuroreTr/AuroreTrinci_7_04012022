function exposeMethod(name, method){
    // console.log("exposeMethod",name)
    window[name] = method;
}

export{
    exposeMethod
}