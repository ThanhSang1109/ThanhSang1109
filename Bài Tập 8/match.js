//bài tập for
let n = parseInt(prompt("Mời nhập số n"))
/*for(i=0; i<= n; i++){
    if (i%2==0)
    document.write(i+'<br/>')
}*/
//Bài 2
/*for(i=0;i<=n;i++){
    if (i%2==1)
    console.log(i.length)
}
//bài 3
//let Sa=0;
/*for(i=0;i<=n;i++){
    Sa=Sa+i;
    document.write(Sa)
}*/
/*for(i=1;i<=n;i++){
    Sa=Sa*i;
    document.write(Sa+'<br/>')
}*/
//bài tập 4
/*for(i=1;i<=n;i++){
    if(n%i==0)
    document.write(i+'<br/>')
}*/
//bài tập 5
/*for(i=2;i<n;i++){
    if(n%i==0){
        document.write(n+'không là số nguyên tố<br/>');
        break;
    }

    else{
        document.write(n+'là số nguyên tố<br/>');
        break;
    }
}*/
//bài tập 6
//let a = parseInt(prompt('Nhập số a'));
//let b = parseInt(prompt('Nhập số b'));
/*let i = a*b
while(true){
    if(a%b==0){
        document.write(a +'là bội số chung nhỏ nhất của'+a+'và'+b);
    }
    else if(b%a==0){
        document.write(b +'là bội số chung nhỏ nhất của'+a+'và'+b);
    }
    else{
        document.write(i +'là bội số chung nhỏ nhất của'+a+'và'+b);
    }
    break;
}*/
/*unction UCLN(x,y){
    while(x!=y){
        if(x>y){
            x=x-y;
        }
        else{
            y=y-x;
        }
    }
    return x;
}
document.write("Uoc chung lon nhat: " + UCLN(a,b))*/
//bài 8
/*8.1
let Sa=0;
for(i=0;i<=n;i++){
    Sa=Sa + i**2;
    document.write('<br/>'+Sa)
}*/
/*8.2
let Sa=0;
for(i=1;i<=n;i++){
    Sa=Sa + 1/i;
    document.write('<br/>'+Sa)
}*/
//8.3
//let Sa=0;
//let P=0;
/*for(i=1;i<=n;i++){
    Sa=Sa+ i/(i+1)
    document.write('<br/>'+Sa)
}*/
/*8.4
for(i=1;i<=n;i++){
    P=P+i;
    Sa=Sa+P;
    document.write('<br/>'+Sa)
}*/
//Bài tập 9
/*let sum = 0
while(n>10){
    sum += n%10
    n=parseInt(n/10)
}
console.log(sum)*/
//Bài tập 10
/*let reverse=0
while(n>0){
    reverse= reverse*10 + n%10
    n=parseInt(n/10)
}
if (n==reverse){
    document.write(n+'là số đối xứng')
}
else{
    document.write(n+'là số không đối xứng')
}*/
//Bài 11
/*let count=0;
let m=2;
while(1){
    let mark=1;
    for(i=2;i<=Math.sqrt(m);i++){
        if(m%i==0){
            mark=0;
            break;
        }
    }
    if (mark==1) {
        count++;
        document.write(m+',');
    }
    if(count>=n){
        break;
    }
    m++;
}*/
//bài 12
/*let tong=0
for(i=0;i<n;i++){
    if(n%i==0){
        tong=tong+i;
    }
}
if(tong==n){
    document.write(n+'là số hoàn hảo')
}
else{
    document.write(n+'không là số hoàn hảo')
}*/
//Bài 13
let sum=0;
while(n>=10){
    sum+=n%10
    n=parseInt(n/10)
}
sum=sum**2+n**2
if(sum==25){
    document.write(n)
}
else{
    parseInt(prompt('mời nhập lại số'))
}