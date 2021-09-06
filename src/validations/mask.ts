export function onlyLetters(v: any) {
    v = v.replace(/[^a-zA-Z.ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ ]/g, "")                
    return v;
}

export function onlyNumbers(v: any) {
    v = v.replace(/\D/g, "")               
    return v;
}