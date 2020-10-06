function tugas15(){
 var ab = 8;
 var bc = 6;
 console.log("Nilai AB : ",ab);
 console.log("Nilai BC : ",bc);
 hasil = phytagoras(ab,bc);
 console.log("panjang sisi AC pada segitiga siku-siku tersebut adalah : ",hasil);
}

function phytagoras(x,y){
  hasil = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
  return hasil;
}

tugas15();
