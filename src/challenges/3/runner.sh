#!/bin/bash

t1=5
t2=0

clear
echo -e "Creando job de pruebas"
while [ $t1 -ge 0 ]; do
  echo -ne "."
  let "t1=t1-1"
  sleep 0.4
done

clear && echo "[SUCCESS] Job de pruebas creado"
echo -e "\nCompilando archivo ..."

while [ $t2 -ge 0 ]; do
  let "t2=t2-1"
  sleep 1
done
echo -e "\n"

yarn run compile ./src/challenges/3/challenge-3.ts

clear && echo "[SUCCESS] Archivo compilado a JS"
echo -e "\nIniciando pruebas ..."

while [ $t2 -ge 0 ]; do
  let "t2=t2-1"
  sleep 1
done

clear

node ./challenge-3.js
echo -e "\n\n\n"