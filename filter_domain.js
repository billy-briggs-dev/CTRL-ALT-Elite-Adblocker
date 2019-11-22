//filterlist will be an array??

//called in background.js
//currently takes an array of strings
//returns another array of strings
function filter(filterlist){
    var whatever = filterlist.split("\n");
    alert("whatever: " +whatever[0]);
    var reg3 = "^\|\|[a-zA-Z0-9./]+?\^\$third-party$" //third party pattern
    var reg1 = "^\|\|[a-zA-Z0-9./]+?\.(net|com)\^$" //simple domain
    var pre = "*://*."
    var domains = [];

    for(line in whatever){
        y = line.search(reg3); //third party pattern
        if (y != -1){
            domain = y.group().slice(2);
            alert("domain: " +domain);
            temp = domain.search("[a-zA-Z0-9./]+?\^");
            if(temp){
                domain = temp.group().slice(0,-1);//????
                //domain = temp.group()[:-1];
                domain = pre + domain + "/*";
                domains.append(domain);
            }
        }else{ //simple domain 
            x = line.search(reg1);
            if (x){
                domain = x.group().slice(2);
                //domain = x.group()[2:];
                while(domain[len(domain) - 1] == '^'){
                    domain = domain.slice(0,-1);
                    //domain = domain[:-1];
                    if(len(domain) < 2){
                        break;
                    }
                }
                domain = pre + domain + "/*";
                domains.append(domain);
            }
        }
    }
    //currently returning 
    return domains;
}