/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function htraeCheck(str)
{
    var strA = str.split(' ');
    var strv = "";
    
    for (var i = 0; i < strA.length; ++i) {
        strv += String.fromCharCode(parseInt(strA[i]));
    }
    
    document.write("Htrae: " + strv.split('').reverse().join('') + "<br>");
}

function omicronCheck(str)
{
    var strA = str.split(' ');
    var strv = "";
    
    for (var i = 0; i < strA.length; ++i) {
        strv += String.fromCharCode(parseInt(strA[i])^16); // since the bit to be flipped is the 5th bit (2^4 / 16) we can just take the char code and 
    }
    document.write("Omicron: " + strv + "<br>");
}

function hothCheck(str)
{
    var strA = str.split(' ');
    var strv = "";
    for (var i = 0; i < str.length; ++i) {
        strv += String.fromCharCode(parseInt(strA[i])-10);
    }
    document.write("Hoth: " + strv + "<br>");
}

function ryzaCheck(str)
{
    var strA = str.split(' ');
    var strv = "";
    for (var i = 0; i < str.length; ++i) {
        strv += String.fromCharCode(parseInt(strA[i])+1);
    }
    document.write("Ryza: " + strv + "<br>");
}

function spaceDecoder(str)
{
    htraeCheck(str);
    omicronCheck(str);
    hothCheck(str);
    ryzaCheck(str);
    document.write("<br>");
}

spaceDecoder(" 71 117  48 115 127 125 117  48 121 126  48  96 117 113 115 117 ");

spaceDecoder(" 97 111  42 109 121 119 111  42 115 120  42 122 111 107 109 111 ");

spaceDecoder(" 86 100  31  98 110 108 100  31 104 109  31 111 100  96  98 100 ");

spaceDecoder(" 101 99  97 101 112  32 110 105  32 101 109 111  99  32 101  87 ");

spaceDecoder(" 84 113 121 124 105 48 64 98 127 119 98 113 125 125 117 98 48 121 99 48 99 96 105 121 126 119 48 127 126 48 101 99 ");

spaceDecoder(" 78 107 115 118 -125  42  90 124 121 113 124 107 119 119 111 124  42 115 125  42 125 122 -125 115 120 113  42 121 120  42 127 125 ");

spaceDecoder(" 67  96 104 107 120  31  79 113 110 102 113  96 108 108 100 113  31 104 114  31 114 111 120 104 109 102  31 110 109  31 116 114 ");

spaceDecoder(" 115 117  32 110 111  32 103 110 105 121 112 115  32 115 105  32 114 101 109 109  97 114 103 111 114  80  32 121 108 105  97  68 ");

spaceDecoder(" 86 121  98 117  48 100 120 117  48  93 121  99  99 124 117  99 ");

spaceDecoder(" 80 115 124 111  42 126 114 111  42  87 115 125 125 118 111 125 ");

spaceDecoder(" 69 104 113 100  31 115 103 100  31  76 104 114 114 107 100 114 ");

spaceDecoder(" 115 101 108 115 115 105  77  32 101 104 116  32 101 114 105  70 ");