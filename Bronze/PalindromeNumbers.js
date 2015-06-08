/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function pNumbers(n) {
    
    var s, rn = 0;
    var on = n;

    for(s = 0; s < 10000; s++)
    {
        rn = parseInt(n.toString().split("").reverse().join(""));
        
        if (n === rn)
        {
            document.write(on + " gets palindromic after " + s + " steps: " + n + "<br>");
            break;
        }
        else
            n += rn;
        
        s++;
    }

    if (s === 10000)
        document.write(on + " is a Lychrel Number <br>");
    else
        return n;
}

for(var l = 0; l < 1000; l++)
{
    pNumbers(l);
}