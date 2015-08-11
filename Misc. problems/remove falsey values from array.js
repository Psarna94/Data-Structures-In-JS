function pair(str) {
    str = str.split('');
    var bar =[];
    str.forEach(function(foo){
       if(foo=="G"){
           var forG = ["G"];
           forG.push("C");
           bar.push(forG);
       }else if(foo=="C"){
           var forC = ["C"]
           forC.push("G");
           bar.push(forC);
       }else if(foo=="A"){
           var forA =["A"];
           forA.push("T");
           bar.push(forA);
       }else if(foo=="T"){
           var forT = ["T"];
           forT.push("A");
           bar.push(forT);
       }
    })
    return bar;
}

console.log(pair("ATCGA"));
