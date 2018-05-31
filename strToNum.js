function strToNum(str) {
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        num += str.charCodeAt(i);
    }
    return num;
}