function firstNonRepeatedChar(sr) {
// your code here
    let m=new Map();
    let n=str.length;
    for(let i=0; i<n; i++)
    {
        let k=0;
        if(m.get(str[i])){
            k=m.get(str[i]);
        }
        m.set(str[i],k+1);
    }
    let ans=null;
    for(let i=0; i<n; i++)
    {
        if(m.get(str[i]==1)){
            ans=str[i];
            break;
        }
    }
    return ans;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
