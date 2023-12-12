var s = "Zbcdefg"
var len = s.length
var list = []

for(var i=0;i<len;i++){
    list.push(s[i])
}


var res = list.sort((a,b)=> {
    if(a < b) {
        return 1
    }
    else if(b == a){
        return 0
    }
    else{
        return -1
    }

})
console.log(res.join(""))


