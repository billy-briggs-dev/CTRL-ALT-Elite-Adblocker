function create_master_list(f1, f2, f3, f4){
    var master_array = f1.concat(f2.concat(f3.concat(f4)));
    var masterset = new Set(master_array); //gets rid of duplicates
    master_array = [...masterset];
    return master_array;
}
//alert(String(create_master_list(f1, f2, f3, f4)));