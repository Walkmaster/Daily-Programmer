function pNumbers(n) {
    
    var s, rn = 0;
    var on = n;

    for(s = 0; s < 10000; s++)
    {
        rn = parseInt(n.toString().split("").reverse().join(""));
        
        if (n === rn)
            break;
        else
            n += rn;
        
        s++;
    }

    if (s === 10000)
        return "Lychrel";
    else
        return n;
}

var sweetHash = {};

for(var l = 0; l < 1000; l++)
{
    var result = pNumbers(l);
    
    if(sweetHash[result])
        sweetHash[result] += (l + ", ");
    else
        sweetHash[result] = (l + ", ");
}

for (var key in sweetHash) {
     document.write(key + " : " + sweetHash[key] + "<br>");
}