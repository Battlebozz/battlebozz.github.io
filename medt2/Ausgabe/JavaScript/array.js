'use strict';

// fodog does a heckin trick

let test = ["fodog","does","a","heckin","trick"];

document.getElementById("execute").addEventListener("click", out, false);
document.getElementById("clear").addEventListener("click", clear, false);

let eingabe = document.getElementById("input");
let eingabeGet;
let ausgabe = document.getElementById("output");
let safe;

function arrayMaker() {
    eingabeGet = eingabe.value;
    if (eingabeGet.length !== 0) {
        safe = eingabeGet.split(" ");
    } else {
        safe = "Your input string is empty!";
    }
    ausgabe.innerText = safe;
}

function length() {
    ausgabe = safe.length;
    console.log("Length");
}

function sort() {
    ausgabe = safe.sort();
    console.log("Sort");
}

function out() {
    document.getElementById("output").innerText = ausgabe.toString();
    console.log("Output: " + ausgabe);
}

function clear() {
    document.getElementById("output").innerText = "";
    document.getElementById("input").innerText = "";
}

function shift() {
    ausgabe = "inputstring before: " + safe;
    let shifted = safe.shift();

    ausgabe += "\ninputstring after: " + safe +
        "\nRemoved elements: " + shifted;
    console.log("Shift");
}

function pop() {
    ausgabe = safe.pop();
    console.log("Pop");
}

function splice() {
    let index = document.getElementById("aSplice").value;
    let deleteCount = document.getElementById("cSplice").value;
    let add = document.getElementById("dSplice").value.split(" ");

    ausgabe = safe.splice(index, deleteCount, add);
    console.log("Splice");
}

function slice() {
    let end = document.getElementById("aSplice").value;
    let start = document.getElementById("cSplice").value;

    ausgabe = safe.slice(start, end);
    console.log("Slice");
}

function push() {
    let push = document.getElementById("aPush");

    let pushs = push.value.split(" ");

    ausgabe = safe.push(pushs.length);
    console.log("Push" + pushs);
}

function concat() {
    let con = document.getElementById("aConcat").value;
    con = con.split(" ");
    ausgabe = safe.concat(con);
    console.log("Concat");
}

function indexOf() {
    let io = document.getElementById("aIndexOf").value;
    ausgabe = safe.lastIndexOf(io);
    console.log("IndexOf");
}

function lastIndexOf() {
    let lio = document.getElementById("aLastIndexOf").value;
    ausgabe = safe.lastIndexOf(lio);
    console.log("LastIndexOf");
}

function includes() {
    let inc = document.getElementById("aIncludes").value;
    ausgabe = safe.includes(inc);
    console.log("Includes");
}

function map() {
    ausgabe = safe.map(w => w.length);
    console.log("Map");
}

function sortReverse() {
    ausgabe = safe.sort().reverse();
    console.log("SortReverse");
}

function reverse() {
    ausgabe = safe.reverse();
    console.log("Reverse");
}

document.getElementById("input").addEventListener("blur", arrayMaker, false);
document.getElementById("bLength").addEventListener("click", length, false);
document.getElementById("bSort").addEventListener("click", sort, false);
document.getElementById("bMap").addEventListener("click", map, false);
document.getElementById("bReverse").addEventListener("click", reverse, false);
document.getElementById("bIncludes").addEventListener("click", includes, false);
document.getElementById("bLastIndexOf").addEventListener("click", lastIndexOf, false);
document.getElementById("bIndexOf").addEventListener("click", indexOf, false);
document.getElementById("bShift").addEventListener("click", shift, false);
document.getElementById("bPop").addEventListener("click", pop, false);
document.getElementById("bConcat").addEventListener("click", concat, false);
document.getElementById("bSplice").addEventListener("click", splice, false);
document.getElementById("bSlice").addEventListener("click", slice, false);
document.getElementById("bPush").addEventListener("click", push, false);
document.getElementById("bSortReverse").addEventListener("click", sortReverse, false);