"use strict";

let red = document.getElementById('r');
let green = document.getElementById('g');
let blue = document.getElementById('b');
let result = document.getElementById('result');
let r=0, g=0, b=0;
red.addEventListener('wheel', (event)=>{
  if (event.deltaY>0) r+=1;
  else if (event.deltaY<0) r-=1;
  if(r>=255) r=255;
  if (r<=0) r = 0;
  red.style.backgroundColor = `rgb(${r},0 ,0)`;
  result.style.backgroundColor = `rgb(${r},${g},${b})`;
  red.innerHTML=r;})

green.addEventListener('wheel', (event)=>{
  if (event.deltaY>0) g+=1;
  else if (event.deltaY<0) g-=1;
  if(g>=255) g=255;
  if (g<=0) g = 0;
  green.style.backgroundColor = `rgb(0,${g} ,0)`;
  result.style.backgroundColor = `rgb(${r},${g} ,${b})`;
  green.innerHTML=g;})

blue.addEventListener('wheel', (event)=>{
  if (event.deltaY>0) b+=1;
  else if (event.deltaY<0) b-=1;
  if(b>=255) b=255;
  if (b<=0) b = 0;
  blue.style.backgroundColor = `rgb(0,0,${b})`;
  result.style.backgroundColor = `rgb(${r},${g} ,${b})`;
  blue.innerHTML=b})