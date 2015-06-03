/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function htraeCheck(str)
{
    document.write("Htrae: " + str.split('').reverse().join('') + "<br>");
}

function omicronCheck(str)
{
    var strv = "";
    for (var i = 0; i < str.length; ++i) {
        strv += String.fromCharCode(str.charCodeAt(i)^16); // since the bit to be flipped is the 5th bit (2^4)
    }
    document.write("Omicron: " + strv + "<br>");
}

function hothCheck(str)
{
    var strv = "";
    for (var i = 0; i < str.length; ++i) {
        strv += String.fromCharCode(str.charCodeAt(i)-10);
    }
    document.write("Hoth: " + strv + "<br>");
}

function ryzaCheck(str)
{
    var strv = "";
    for (var i = 0; i < str.length; ++i) {
        strv += String.fromCharCode(str.charCodeAt(i)+1);
    }
    document.write("Ryza: " + strv + "<br>");
}

function validationCheck()
{
    
}

function spaceDecoder(str)
{
    htraeCheck(str);
    omicronCheck(str);
    hothCheck(str);
    ryzaCheck(str);
    document.write("<br>");
}

spaceDecoder("ecaeP ni emoc eW");

spaceDecoder("asx~o|*s}*mywsxq");

spaceDecoder("Vdg`udsdmqnnlrkdesenqodnokdsnrs`xhm");

spaceDecoder("Tqy|i0`bwbq}}ub0yc0c`iy~w0~0ec");

spaceDecoder("Nksv\203*z|yq|kwwo|*s}*}z\203sxq*yx*}");

spaceDecoder("C`hkxoqnfq`lldqhrroxhmfnmtr");

spaceDecoder("su no gniyps si remmargorp yliaD");

spaceDecoder("ao*pyxn*k*|olov*lk}o");

spaceDecoder("Vybu0dxu0}ycc|uc");

spaceDecoder("knird a sah noiryT ,652 nosaes senorhT fo emaG txen eht nO");