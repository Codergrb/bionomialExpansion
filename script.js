function fact(n){return 0==n||1==n?1:n*fact(n-1)}function nCr(n,t){return fact(n)/(fact(n-t)*fact(t))}function bio(n,t,u){for(r=0,rtn="";r<=u;r++)c=nCr(u,r),ap=u-r,xp=r,1==r&&(xp=""),u-r==1&&(ap=""),1!=c&&(rtn+=c),r!=u&&(rtn+=`${n}<sup>${ap}</sup>`),0!=r&&(rtn+=`${t}<sup>${xp}</sup>`),r!=u&&(rtn+=" + ");return rtn}function bionomialExapnsion(n,t,u){return bio(n,t,u)}
