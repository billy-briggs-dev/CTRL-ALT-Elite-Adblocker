

//called in create_master_list.js
//currently takes an array of strings
//returns another array of strings
function filter(filterlist){
    var whatever = filterlist.split("\n");
    var reg3 = /^\|\|[a-zA-Z0-9./]+?\^\$third-party*$/ //third party pattern
    var reg1 = /^\|\|[a-zA-Z0-9./]+?\.(net|com)\^*$/ //simple domain
    var pre = "*://*."
    var domains = [];

    whatever.forEach(line => {
        y = line.search(reg3); //third party pattern
        if (y != -1){
            domain = line.slice(y+2);
            temp = domain.search(/[a-zA-Z0-9./]+?\^/);
            if(temp != -1){
                domain = domain.slice(temp, domain.indexOf("^"));
                domain = pre + domain + "/*";
                domains.push(domain);
            }
        }else{ //simple domain 
            x = line.search(reg1);
            if (x != -1){
                domain = line.slice(x+2);
                if(domain[domain.length - 1] == '^'){
                    domain = domain.slice(0,-1);
                }
                domain = pre + domain + "/*";
                domains.push(domain);
            }
        }
    });
    return domains;       
}