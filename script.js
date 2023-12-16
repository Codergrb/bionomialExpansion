/* Binomial Expansion -> Using Java Script 

This Script Is Written By #Codergrb 
github : github.com/@codergrb

You can You this Script For Calculate Bionomial exapansion of (a + x)^n . The function named 
bionomialExpansion() can used to get the string of that expansion. 

This Function Takes (a + x)^n this form ==> bionomialExapnsion(a , x , n ) as an argument and returns a string. 

*/

// function to calculate Factorial
function fact(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return (n * fact(n - 1));
  }
}

//Function ->To calculate Combination
function nCr(n, r) {
  return (fact(n) / (fact((n - r)) * fact(r)));
}

//document.write("The factoral of 6 is"+ fact(6))
//console.log("The Combination Of C(5,3) is "+ c(5,3))

// Bionomial Theoram : (a+x)^n = C(n,r) a^(n-r) x^r 
function bio(a, x, n) {
  rtn = "";
  for (r = 0; r <= n; r++) {
    c = nCr(n, r);
    ap = n - r;
    xp = r;

    if (r == 1) {
      xp = "";
    }
    if (n - r == 1) {
      ap = "";
    }
    if (c != 1) {
      rtn += c;
    }
    if (r != n) {
      rtn += `${a}<sup>${ap}</sup>`;
    }
    if (r != 0) {
      rtn += `${x}<sup>${xp}</sup>`;
    }
    if (r != n) {
      rtn += " + ";
    }
  }
  return rtn;
}


function bionomialExapnsion(a,x,n){
  let string = bio(a,x,n);
  return string;
}
