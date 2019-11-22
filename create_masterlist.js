var f1 = [1, 2, 3, 4, 5];
var f2 = [20, 30, 40, 5];
var f3 = [21, 30, 3, 31];
var f4 = [2, 4, 40, 30, 22, 23, 24];
function create_master_list(f1, f2, f3, f4){
    var master_array = f1.concat(f2.concat(f3.concat(f4)));
    var masterset = new Set(master_array); //gets rid of duplicates
    master_array = [...masterset];
    return master_array;
}
alert(String(create_master_list(f1, f2, f3, f4)));
