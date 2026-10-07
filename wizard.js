function elder(n, start, duels) {
    let owner = start;
    let owners = 1;
   
 //   }
 for(let i = 0; i < n; i++) {
    if (duels[i][1] === owner) {
        owner = duels[i][0];
        owners++;
    }
   
 }
 return [owner, owners];
}
elder(3, "A", ["B","A","C","B","E","F"])






