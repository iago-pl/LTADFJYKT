var contadorVin = 0;

function avanzar(){
    if(contadorVin < 0){
        contadorVin = 0;
    }
    if(contadorVin > 60){
        contadorVin = 60;
    }
    switch(contadorVin){
        case 0:
            var cabecera = document.getElementById("cabecera");
            cabecera.style.display = "none";
            
            var vin_1 = document.getElementById("vin_1");
            vin_1.style.display = "block";
            contadorVin++;
            break;
        case 1:
            var vin_1 = document.getElementById("vin_1");
            vin_1.style.display = "none";
            
            var vin_2 = document.getElementById("vin_2");
            vin_2.style.display = "block";
            contadorVin++;
            break;
        case 2:
            var vin_2_bocata_1 = document.getElementById("vin_2_bocata_1");
            vin_2_bocata_1.style.display = "block";
            contadorVin++;
            break;
        case 3:
            var vin_2_bocata_2 = document.getElementById("vin_2_bocata_2");
            vin_2_bocata_2.style.display = "block";
            contadorVin++;
            break;
        case 4:
            var vin_2 = document.getElementById("vin_2");
            vin_2.style.display = "none";
            var vin_2_bocata_1 = document.getElementById("vin_2_bocata_1");
            vin_2_bocata_1.style.display = "none";
            var vin_2_bocata_2 = document.getElementById("vin_2_bocata_2");
            vin_2_bocata_2.style.display = "none";
            
            var vin_3 = document.getElementById("vin_3");
            vin_3.style.display = "block";
            contadorVin++;
            break;   
        case 5:
            var vin_3_bocata_1 = document.getElementById("vin_3_bocata_1");
            vin_3_bocata_1.style.display = "block";
            contadorVin++;
            break;
        case 6:
            var vin_3 = document.getElementById("vin_3");
            vin_3.style.display = "none";
            var vin_3_bocata_1 = document.getElementById("vin_3_bocata_1");
            vin_3_bocata_1.style.display = "none";
            
            var vin_4 = document.getElementById("vin_4");
            vin_4.style.display = "block";
            contadorVin++;
            break; 
        case 7:
            var vin_4_bocata_1 = document.getElementById("vin_4_bocata_1");
            vin_4_bocata_1.style.display = "block";
            contadorVin++;
            break;
        case 8:
            var vin_4_bocata_2 = document.getElementById("vin_4_bocata_2");
            vin_4_bocata_2.style.display = "block";
            contadorVin++;
            break;
        case 9:
            var vin_4 = document.getElementById("vin_4");
            vin_4.style.display = "none";
            var vin_4_bocata_1 = document.getElementById("vin_4_bocata_1");
            vin_4_bocata_1.style.display = "none";
            
            var vin_5 = document.getElementById("vin_5");
            vin_5.style.display = "block";
            contadorVin++;
            break; 
        case 10:
            var vin_5_bocata_1 = document.getElementById("vin_5_bocata_1");
            vin_5_bocata_1.style.display = "block";
            contadorVin++;
            break;
        case 11:
            var vin_5 = document.getElementById("vin_5");
            vin_5.style.display = "none";
            var vin_5_bocata_1 = document.getElementById("vin_5_bocata_1");
            vin_5_bocata_1.style.display = "none";
            
            var vin_6 = document.getElementById("vin_6");
            vin_6.style.display = "block";
            contadorVin++;
            break; 
        case 12:
            var vin_6_bocata_1 = document.getElementById("vin_6_bocata_1");
            vin_6_bocata_1.style.display = "block";
            contadorVin++;
            break;
        case 13:
            var vin_6 = document.getElementById("vin_6");
            vin_6.style.display = "none";
            var vin_6_bocata_1 = document.getElementById("vin_6_bocata_1");
            vin_6_bocata_1.style.display = "none";
            
            var vin_7 = document.getElementById("vin_7");
            vin_7.style.display = "block";
            contadorVin++;
            break;
        case 14:
            var vin_7 = document.getElementById("vin_7");
            vin_7.style.display = "none";
            
            var vin_8 = document.getElementById("vin_8");
            vin_8.style.display = "block";
            contadorVin++;
            break;
        case 15:
            var vin_8_bocata_1 = document.getElementById("vin_8_bocata_1");
            vin_8_bocata_1.style.display = "block";
            contadorVin++;
            break;
        case 16:
            var vin_8_bocata_2 = document.getElementById("vin_8_bocata_2");
            vin_8_bocata_2.style.display = "block";
            contadorVin++;
            break;
        case 17:
            var vin_8 = document.getElementById("vin_8");
            vin_8.style.display = "none";
            var vin_8_bocata_1 = document.getElementById("vin_8_bocata_1");
            vin_8_bocata_1.style.display = "none";
            var vin_8_bocata_2 = document.getElementById("vin_8_bocata_2");
            vin_8_bocata_2.style.display = "none";
            
            var vin_9 = document.getElementById("vin_9");
            vin_9.style.display = "block";
            contadorVin++;
            break;
        case 18:
            var vin_9_bocata_1 = document.getElementById("vin_9_bocata_1");
            vin_9_bocata_1.style.display = "block";
            contadorVin++;
            break;
        case 19:
            var vin_9_bocata_2 = document.getElementById("vin_9_bocata_2");
            vin_9_bocata_2.style.display = "block";
            contadorVin++;
            break;
        case 20:
            var vin_9 = document.getElementById("vin_9");
            vin_9.style.display = "none";
            var vin_9_bocata_1 = document.getElementById("vin_9_bocata_1");
            vin_9_bocata_1.style.display = "none";
            var vin_9_bocata_2 = document.getElementById("vin_9_bocata_2");
            vin_9_bocata_2.style.display = "none";
            
            var vin_10 = document.getElementById("vin_10");
            vin_10.style.display = "block";
            contadorVin++;
            break;
        case 21:
            var vin_10_bocata_1 = document.getElementById("vin_10_bocata_1");
            vin_10_bocata_1.style.display = "block";
            contadorVin++;
            break;
        case 22:
            var vin_10 = document.getElementById("vin_10");
            vin_10.style.display = "none";
            var vin_10_bocata_1 = document.getElementById("vin_10_bocata_1");
            vin_10_bocata_1.style.display = "none";
            
            var vin_11 = document.getElementById("vin_11");
            vin_11.style.display = "block";
            contadorVin++;
            break;
        case 23:
            var vin_11 = document.getElementById("vin_11");
            vin_11.style.display = "none";
            
            var vin_12 = document.getElementById("vin_12");
            vin_12.style.display = "block";
            contadorVin++;
            break;
        case 24:
            var vin_12 = document.getElementById("vin_12");
            vin_12.style.display = "none";
            
            var vin_13 = document.getElementById("vin_13");
            vin_13.style.display = "block";
            contadorVin++;
            break;
        case 25:
            var vin_13 = document.getElementById("vin_13");
            vin_13.style.display = "none";
            
            var vin_14 = document.getElementById("vin_14");
            vin_14.style.display = "block";
            contadorVin++;
            break;
        case 26:
            var vin_14 = document.getElementById("vin_14");
            vin_14.style.display = "none";
            
            var vin_15 = document.getElementById("vin_15");
            vin_15.style.display = "block";
            contadorVin++;
            break;
        case 27:
            var vin_15 = document.getElementById("vin_15");
            vin_15.style.display = "none";
            
            var vin_16 = document.getElementById("vin_16");
            vin_16.style.display = "block";
            contadorVin++;
            break;
        case 28:
            var vin_16 = document.getElementById("vin_16");
            vin_16.style.display = "none";
            
            var vin_17 = document.getElementById("vin_17");
            vin_17.style.display = "block";
            contadorVin++;
            break;
        case 29:
            var vin_17_bocata_1 = document.getElementById("vin_17_bocata_1");
            vin_17_bocata_1.style.display = "block";
            contadorVin++;
            break
        case 30:
            var vin_17_bocata_2 = document.getElementById("vin_17_bocata_2");
            vin_17_bocata_2.style.display = "block";
            contadorVin++;
            break
        case 31:
            var vin_17_bocata_3 = document.getElementById("vin_17_bocata_3");
            vin_17_bocata_3.style.display = "block";
            contadorVin++;
            break
        case 32:
            var vin_17 = document.getElementById("vin_17");
            vin_17.style.display = "none";
            var vin_17_bocata_1 = document.getElementById("vin_17_bocata_1");
            vin_17_bocata_1.style.display = "none";
            var vin_17_bocata_2 = document.getElementById("vin_17_bocata_2");
            vin_17_bocata_2.style.display = "none";
            var vin_17_bocata_3 = document.getElementById("vin_17_bocata_3");
            vin_17_bocata_3.style.display = "none";
            
            var vin_18 = document.getElementById("vin_18");
            vin_18.style.display = "block";
            contadorVin++;
            break;
        case 33:
            var vin_18_bocata_1 = document.getElementById("vin_18_bocata_1");
            vin_18_bocata_1.style.display = "block";
            contadorVin++;
            break
        case 34:
            var vin_18_bocata_2 = document.getElementById("vin_18_bocata_2");
            vin_18_bocata_2.style.display = "block";
            contadorVin++;
            break
        case 35:
            var vin_18 = document.getElementById("vin_18");
            vin_18.style.display = "none";
            var vin_18_bocata_1 = document.getElementById("vin_18_bocata_1");
            vin_18_bocata_1.style.display = "none";
            var vin_18_bocata_2 = document.getElementById("vin_18_bocata_2");
            vin_18_bocata_2.style.display = "none";
            
            var vin_19 = document.getElementById("vin_19");
            vin_19.style.display = "block";
            contadorVin++;
            break;
        case 36:
            var vin_19_bocata_1 = document.getElementById("vin_19_bocata_1");
            vin_19_bocata_1.style.display = "block";
            contadorVin++;
            break
        case 37:
            var vin_19 = document.getElementById("vin_19");
            vin_19.style.display = "none";
            var vin_19_bocata_1 = document.getElementById("vin_19_bocata_1");
            vin_19_bocata_1.style.display = "none";
            
            var vin_20 = document.getElementById("vin_20");
            vin_20.style.display = "block";
            contadorVin++;
            break;
        case 38:
            var vin_20_bocata_1 = document.getElementById("vin_20_bocata_1");
            vin_20_bocata_1.style.display = "block";
            contadorVin++;
            break
        case 39:
            var vin_20_bocata_2 = document.getElementById("vin_20_bocata_2");
            vin_20_bocata_2.style.display = "block";
            contadorVin++;
            break
        case 40:
            var vin_20 = document.getElementById("vin_20");
            vin_20.style.display = "none";
            var vin_20_bocata_1 = document.getElementById("vin_20_bocata_1");
            vin_20_bocata_1.style.display = "none";
            var vin_20_bocata_2 = document.getElementById("vin_20_bocata_2");
            vin_20_bocata_2.style.display = "none";
            
            var vin_21 = document.getElementById("vin_21");
            vin_21.style.display = "block";
            contadorVin++;
            break;
        case 41:
            var vin_21_bocata_1 = document.getElementById("vin_21_bocata_1");
            vin_21_bocata_1.style.display = "block";
            contadorVin++;
            break
        case 42:
            var vin_21_bocata_2 = document.getElementById("vin_21_bocata_2");
            vin_21_bocata_2.style.display = "block";
            contadorVin++;
            break
        case 43:
            var vin_21_bocata_3 = document.getElementById("vin_21_bocata_3");
            vin_21_bocata_3.style.display = "block";
            contadorVin++;
            break
        case 44:
            var vin_21 = document.getElementById("vin_21");
            vin_21.style.display = "none";
            var vin_21_bocata_1 = document.getElementById("vin_21_bocata_1");
            vin_21_bocata_1.style.display = "none";
            var vin_21_bocata_2 = document.getElementById("vin_21_bocata_2");
            vin_21_bocata_2.style.display = "none";
            var vin_21_bocata_3 = document.getElementById("vin_21_bocata_3");
            vin_21_bocata_3.style.display = "none";
            
            var vin_22 = document.getElementById("vin_22");
            vin_22.style.display = "block";
            contadorVin++;
            break;
        case 45:
            var vin_22_bocata_1 = document.getElementById("vin_22_bocata_1");
            vin_22_bocata_1.style.display = "block";
            contadorVin++;
            break
        case 46:
            var vin_22_bocata_2 = document.getElementById("vin_22_bocata_2");
            vin_22_bocata_2.style.display = "block";
            contadorVin++;
            break
        case 47:
            var vin_22 = document.getElementById("vin_22");
            vin_22.style.display = "none";
            var vin_22_bocata_1 = document.getElementById("vin_22_bocata_1");
            vin_22_bocata_1.style.display = "none";
            var vin_21_bocata_2 = document.getElementById("vin_21_bocata_2");
            vin_21_bocata_2.style.display = "none";
            
            var vin_23 = document.getElementById("vin_23");
            vin_23.style.display = "block";
            contadorVin++;
            break
        case 48:
            var vin_23_bocata_1 = document.getElementById("vin_23_bocata_1");
            vin_23_bocata_1.style.display = "block";
            contadorVin++;
            break
        case 49:
            var vin_23_bocata_2 = document.getElementById("vin_23_bocata_2");
            vin_23_bocata_2.style.display = "block";
            contadorVin++;
            break
        case 50:
            var vin_23 = document.getElementById("vin_23");
            vin_23.style.display = "none";
            var vin_23_bocata_1 = document.getElementById("vin_23_bocata_1");
            vin_23_bocata_1.style.display = "none";
            var vin_23_bocata_2 = document.getElementById("vin_23_bocata_2");
            vin_23_bocata_2.style.display = "none";
            
            var vin_24 = document.getElementById("vin_24");
            vin_24.style.display = "block";
            contadorVin++;
            break
        case 51:
            var vin_24_bocata_1 = document.getElementById("vin_24_bocata_1");
            vin_24_bocata_1.style.display = "block";
            contadorVin++;
            break
        case 52:
            var vin_24 = document.getElementById("vin_24");
            vin_24.style.display = "none";
            var vin_24_bocata_1 = document.getElementById("vin_24_bocata_1");
            vin_24_bocata_1.style.display = "none";
            
            var vin_25 = document.getElementById("vin_25");
            vin_25.style.display = "block";
            contadorVin++;
            break
        case 53:
            var vin_25_bocata_1 = document.getElementById("vin_25_bocata_1");
            vin_25_bocata_1.style.display = "block";
            contadorVin++;
            break
        case 54:
            var vin_25 = document.getElementById("vin_25");
            vin_25.style.display = "none";
            var vin_25_bocata_1 = document.getElementById("vin_25_bocata_1");
            vin_25_bocata_1.style.display = "none";
            
            var vin_26 = document.getElementById("vin_26");
            vin_26.style.display = "block";
            contadorVin++;
            break
        case 55:
            var vin_26 = document.getElementById("vin_26");
            vin_26.style.display = "none";
            
            var vin_27 = document.getElementById("vin_27");
            vin_27.style.display = "block";
            contadorVin++;
            break
        case 56:
            var vin_27 = document.getElementById("vin_27");
            vin_27.style.display = "none";
            
            var vin_28 = document.getElementById("vin_28");
            vin_28.style.display = "block";
            contadorVin++;
            break
        case 57:
            var vin_28 = document.getElementById("vin_28");
            vin_28.style.display = "none";
            
            var vin_29 = document.getElementById("vin_29");
            vin_29.style.display = "block";
            contadorVin++;
            break
        case 58:
            var vin_29 = document.getElementById("vin_29");
            vin_29.style.display = "none";
            
            var vin_30 = document.getElementById("vin_30");
            vin_30.style.display = "block";
            contadorVin++;
            break
        case 59:
            var vin_30 = document.getElementById("vin_30");
            vin_30.style.display = "none";
            
            var vin_31 = document.getElementById("vin_31");
            vin_31.style.display = "block";
            contadorVin++;
            break
    }
}

function retroceder(){
    if(contadorVin < 0){
        contadorVin = 0;
    }
    switch(contadorVin){
        case 1:
            var cabecera = document.getElementById("cabecera");
            cabecera.style.display = "block";
            
            var vin_1 = document.getElementById("vin_1");
            vin_1.style.display = "none";
            contadorVin--;
            break;
        case 2:
            var vin_1 = document.getElementById("vin_1");
            vin_1.style.display = "block";
            
            var vin_2 = document.getElementById("vin_2");
            vin_2.style.display = "none";
            contadorVin--;
            break;
        case 3:
            var vin_2_bocata_1 = document.getElementById("vin_2_bocata_1");
            vin_2_bocata_1.style.display = "none";
            contadorVin--;
            break;
        case 4:
            var vin_2_bocata_2 = document.getElementById("vin_2_bocata_2");
            vin_2_bocata_2.style.display = "none";
            contadorVin--;
            break;
        case 5:
            var vin_2 = document.getElementById("vin_2");
            vin_2.style.display = "block";
            var vin_2_bocata_1 = document.getElementById("vin_2_bocata_1");
            vin_2_bocata_1.style.display = "block";
            var vin_2_bocata_2 = document.getElementById("vin_2_bocata_2");
            vin_2_bocata_2.style.display = "block";
            
            var vin_3 = document.getElementById("vin_3");
            vin_3.style.display = "none";
            contadorVin--;
            break;   
        case 6:
            var vin_3_bocata_1 = document.getElementById("vin_3_bocata_1");
            vin_3_bocata_1.style.display = "none";
            contadorVin--;
            break;
        case 7:
            var vin_3 = document.getElementById("vin_3");
            vin_3.style.display = "block";
            var vin_3_bocata_1 = document.getElementById("vin_3_bocata_1");
            vin_3_bocata_1.style.display = "block";
            
            var vin_4 = document.getElementById("vin_4");
            vin_4.style.display = "none";
            contadorVin--;
            break; 
        case 8:
            var vin_4_bocata_1 = document.getElementById("vin_4_bocata_1");
            vin_4_bocata_1.style.display = "none";
            contadorVin--;
            break;
        case 9:
            var vin_4_bocata_2 = document.getElementById("vin_4_bocata_2");
            vin_4_bocata_2.style.display = "none";
            contadorVin--;
            break;
        case 10:
            var vin_4 = document.getElementById("vin_4");
            vin_4.style.display = "block";
            var vin_4_bocata_1 = document.getElementById("vin_4_bocata_1");
            vin_4_bocata_1.style.display = "block";
            
            var vin_5 = document.getElementById("vin_5");
            vin_5.style.display = "none";
            contadorVin--;
            break; 
        case 11:
            var vin_5_bocata_1 = document.getElementById("vin_5_bocata_1");
            vin_5_bocata_1.style.display = "none";
            contadorVin--;
            break;
        case 12:
            var vin_5 = document.getElementById("vin_5");
            vin_5.style.display = "block";
            var vin_5_bocata_1 = document.getElementById("vin_5_bocata_1");
            vin_5_bocata_1.style.display = "block";
            
            var vin_6 = document.getElementById("vin_6");
            vin_6.style.display = "none";
            contadorVin--;
            break; 
        case 13:
            var vin_6_bocata_1 = document.getElementById("vin_6_bocata_1");
            vin_6_bocata_1.style.display = "none";
            contadorVin--;
            break;
        case 14:
            var vin_6 = document.getElementById("vin_6");
            vin_6.style.display = "block";
            var vin_6_bocata_1 = document.getElementById("vin_6_bocata_1");
            vin_6_bocata_1.style.display = "block";
            
            var vin_7 = document.getElementById("vin_7");
            vin_7.style.display = "none";
            contadorVin--;
            break;
        case 15:
            var vin_7 = document.getElementById("vin_7");
            vin_7.style.display = "block";
            
            var vin_8 = document.getElementById("vin_8");
            vin_8.style.display = "none";
            contadorVin--;
            break;
        case 16:
            var vin_8_bocata_1 = document.getElementById("vin_8_bocata_1");
            vin_8_bocata_1.style.display = "none";
            contadorVin--;
            break;
        case 17:
            var vin_8_bocata_2 = document.getElementById("vin_8_bocata_2");
            vin_8_bocata_2.style.display = "none";
            contadorVin--;
            break;
        case 18:
            var vin_8 = document.getElementById("vin_8");
            vin_8.style.display = "block";
            var vin_8_bocata_1 = document.getElementById("vin_8_bocata_1");
            vin_8_bocata_1.style.display = "block";
            var vin_8_bocata_2 = document.getElementById("vin_8_bocata_2");
            vin_8_bocata_2.style.display = "block";
            
            var vin_9 = document.getElementById("vin_9");
            vin_9.style.display = "none";
            contadorVin--;
            break;
        case 19:
            var vin_9_bocata_1 = document.getElementById("vin_9_bocata_1");
            vin_9_bocata_1.style.display = "none";
            contadorVin--;
            break;
        case 20:
            var vin_9_bocata_2 = document.getElementById("vin_9_bocata_2");
            vin_9_bocata_2.style.display = "none";
            contadorVin--;
            break;
        case 21:
            var vin_9 = document.getElementById("vin_9");
            vin_9.style.display = "block";
            var vin_9_bocata_1 = document.getElementById("vin_9_bocata_1");
            vin_9_bocata_1.style.display = "block";
            var vin_9_bocata_2 = document.getElementById("vin_9_bocata_2");
            vin_9_bocata_2.style.display = "block";
            
            var vin_10 = document.getElementById("vin_10");
            vin_10.style.display = "none";
            contadorVin--;
            break;
        case 22:
            var vin_10_bocata_1 = document.getElementById("vin_10_bocata_1");
            vin_10_bocata_1.style.display = "none";
            contadorVin--;
            break;
        case 23:
            var vin_10 = document.getElementById("vin_10");
            vin_10.style.display = "block";
            var vin_10_bocata_1 = document.getElementById("vin_10_bocata_1");
            vin_10_bocata_1.style.display = "block";
            
            var vin_11 = document.getElementById("vin_11");
            vin_11.style.display = "none";
            contadorVin--;
            break;
        case 24:
            var vin_11 = document.getElementById("vin_11");
            vin_11.style.display = "block";
            
            var vin_12 = document.getElementById("vin_12");
            vin_12.style.display = "none";
            contadorVin--;
            break;
        case 25:
            var vin_12 = document.getElementById("vin_12");
            vin_12.style.display = "block";
            
            var vin_13 = document.getElementById("vin_13");
            vin_13.style.display = "none";
            contadorVin--;
            break;
        case 26:
            var vin_13 = document.getElementById("vin_13");
            vin_13.style.display = "block";
            
            var vin_14 = document.getElementById("vin_14");
            vin_14.style.display = "none";
            contadorVin--;
            break;
        case 27:
            var vin_14 = document.getElementById("vin_14");
            vin_14.style.display = "block";
            
            var vin_15 = document.getElementById("vin_15");
            vin_15.style.display = "none";
            contadorVin--;
            break;
        case 28:
            var vin_15 = document.getElementById("vin_15");
            vin_15.style.display = "block";
            
            var vin_16 = document.getElementById("vin_16");
            vin_16.style.display = "none";
            contadorVin--;
            break;
        case 29:
            var vin_16 = document.getElementById("vin_16");
            vin_16.style.display = "block";
            
            var vin_17 = document.getElementById("vin_17");
            vin_17.style.display = "none";
            contadorVin--;
            break;
        case 30:
            var vin_17_bocata_1 = document.getElementById("vin_17_bocata_1");
            vin_17_bocata_1.style.display = "none";
            contadorVin--;
            break
        case 31:
            var vin_17_bocata_2 = document.getElementById("vin_17_bocata_2");
            vin_17_bocata_2.style.display = "none";
            contadorVin--;
            break
        case 32:
            var vin_17_bocata_3 = document.getElementById("vin_17_bocata_3");
            vin_17_bocata_3.style.display = "none";
            contadorVin--;
            break
        case 33:
            var vin_17 = document.getElementById("vin_17");
            vin_17.style.display = "block";
            var vin_17_bocata_1 = document.getElementById("vin_17_bocata_1");
            vin_17_bocata_1.style.display = "block";
            var vin_17_bocata_2 = document.getElementById("vin_17_bocata_2");
            vin_17_bocata_2.style.display = "block";
            var vin_17_bocata_3 = document.getElementById("vin_17_bocata_3");
            vin_17_bocata_3.style.display = "block";
            
            var vin_18 = document.getElementById("vin_18");
            vin_18.style.display = "none";
            contadorVin--;
            break;
        case 34:
            var vin_18_bocata_1 = document.getElementById("vin_18_bocata_1");
            vin_18_bocata_1.style.display = "none";
            contadorVin--;
            break
        case 35:
            var vin_18_bocata_2 = document.getElementById("vin_18_bocata_2");
            vin_18_bocata_2.style.display = "none";
            contadorVin--;
            break
        case 36:
            var vin_18 = document.getElementById("vin_18");
            vin_18.style.display = "block";
            var vin_18_bocata_1 = document.getElementById("vin_18_bocata_1");
            vin_18_bocata_1.style.display = "block";
            var vin_18_bocata_2 = document.getElementById("vin_18_bocata_2");
            vin_18_bocata_2.style.display = "block";
            
            var vin_19 = document.getElementById("vin_19");
            vin_19.style.display = "none";
            contadorVin--;
            break;
        case 37:
            var vin_19_bocata_1 = document.getElementById("vin_19_bocata_1");
            vin_19_bocata_1.style.display = "none";
            contadorVin--;
            break
        case 38:
            var vin_19 = document.getElementById("vin_19");
            vin_19.style.display = "block";
            var vin_19_bocata_1 = document.getElementById("vin_19_bocata_1");
            vin_19_bocata_1.style.display = "block";
            
            var vin_20 = document.getElementById("vin_20");
            vin_20.style.display = "none";
            contadorVin--;
            break;
        case 39:
            var vin_20_bocata_1 = document.getElementById("vin_20_bocata_1");
            vin_20_bocata_1.style.display = "none";
            contadorVin--;
            break
        case 40:
            var vin_20_bocata_2 = document.getElementById("vin_20_bocata_2");
            vin_20_bocata_2.style.display = "none";
            contadorVin--;
            break
        case 41:
            var vin_20 = document.getElementById("vin_20");
            vin_20.style.display = "block";
            var vin_20_bocata_1 = document.getElementById("vin_20_bocata_1");
            vin_20_bocata_1.style.display = "block";
            var vin_20_bocata_2 = document.getElementById("vin_20_bocata_2");
            vin_20_bocata_2.style.display = "block";
            
            var vin_21 = document.getElementById("vin_21");
            vin_21.style.display = "none";
            contadorVin--;
            break;
        case 42:
            var vin_21_bocata_1 = document.getElementById("vin_21_bocata_1");
            vin_21_bocata_1.style.display = "none";
            contadorVin--;
            break
        case 43:
            var vin_21_bocata_2 = document.getElementById("vin_21_bocata_2");
            vin_21_bocata_2.style.display = "none";
            contadorVin--;
            break
        case 44:
            var vin_21_bocata_3 = document.getElementById("vin_21_bocata_3");
            vin_21_bocata_3.style.display = "none";
            contadorVin--;
            break
        case 45:
            var vin_21 = document.getElementById("vin_21");
            vin_21.style.display = "block";
            var vin_21_bocata_1 = document.getElementById("vin_21_bocata_1");
            vin_21_bocata_1.style.display = "block";
            var vin_21_bocata_2 = document.getElementById("vin_21_bocata_2");
            vin_21_bocata_2.style.display = "block";
            var vin_21_bocata_3 = document.getElementById("vin_21_bocata_3");
            vin_21_bocata_3.style.display = "block";
            
            var vin_22 = document.getElementById("vin_22");
            vin_22.style.display = "none";
            contadorVin--;
            break;
        case 46:
            var vin_22_bocata_1 = document.getElementById("vin_22_bocata_1");
            vin_22_bocata_1.style.display = "none";
            contadorVin--;
            break
        case 47:
            var vin_22_bocata_2 = document.getElementById("vin_22_bocata_2");
            vin_22_bocata_2.style.display = "none";
            contadorVin--;
            break
        case 48:
            var vin_22 = document.getElementById("vin_22");
            vin_22.style.display = "block";
            var vin_22_bocata_1 = document.getElementById("vin_22_bocata_1");
            vin_22_bocata_1.style.display = "block";
            var vin_21_bocata_2 = document.getElementById("vin_21_bocata_2");
            vin_21_bocata_2.style.display = "block";
            
            var vin_23 = document.getElementById("vin_23");
            vin_23.style.display = "none";
            contadorVin--;
            break
        case 49:
            var vin_23_bocata_1 = document.getElementById("vin_23_bocata_1");
            vin_23_bocata_1.style.display = "none";
            contadorVin--;
            break
        case 50:
            var vin_23_bocata_2 = document.getElementById("vin_23_bocata_2");
            vin_23_bocata_2.style.display = "none";
            contadorVin--;
            break
        case 51:
            var vin_23 = document.getElementById("vin_23");
            vin_23.style.display = "block";
            var vin_23_bocata_1 = document.getElementById("vin_23_bocata_1");
            vin_23_bocata_1.style.display = "block";
            var vin_23_bocata_2 = document.getElementById("vin_23_bocata_2");
            vin_23_bocata_2.style.display = "block";
            
            var vin_24 = document.getElementById("vin_24");
            vin_24.style.display = "none";
            contadorVin--;
            break
        case 52:
            var vin_24_bocata_1 = document.getElementById("vin_24_bocata_1");
            vin_24_bocata_1.style.display = "none";
            contadorVin--;
            break
        case 53:
            var vin_24 = document.getElementById("vin_24");
            vin_24.style.display = "block";
            var vin_24_bocata_1 = document.getElementById("vin_24_bocata_1");
            vin_24_bocata_1.style.display = "block";
            
            var vin_25 = document.getElementById("vin_25");
            vin_25.style.display = "none";
            contadorVin--;
            break
        case 54:
            var vin_25_bocata_1 = document.getElementById("vin_25_bocata_1");
            vin_25_bocata_1.style.display = "none";
            contadorVin--;
            break
        case 55:
            var vin_25 = document.getElementById("vin_25");
            vin_25.style.display = "block";
            var vin_25_bocata_1 = document.getElementById("vin_25_bocata_1");
            vin_25_bocata_1.style.display = "block";
            
            var vin_26 = document.getElementById("vin_26");
            vin_26.style.display = "none";
            contadorVin--;
            break
        case 56:
            var vin_26 = document.getElementById("vin_26");
            vin_26.style.display = "block";
            
            var vin_27 = document.getElementById("vin_27");
            vin_27.style.display = "none";
            contadorVin--;
            break
        case 57:
            var vin_27 = document.getElementById("vin_27");
            vin_27.style.display = "block";
            
            var vin_28 = document.getElementById("vin_28");
            vin_28.style.display = "none";
            contadorVin--;
            break
        case 58:
            var vin_28 = document.getElementById("vin_28");
            vin_28.style.display = "block";
            
            var vin_29 = document.getElementById("vin_29");
            vin_29.style.display = "none";
            contadorVin--;
            break
        case 59:
            var vin_29 = document.getElementById("vin_29");
            vin_29.style.display = "block";
            
            var vin_30 = document.getElementById("vin_30");
            vin_30.style.display = "none";
            contadorVin--;
            break
        case 60:
            var vin_30 = document.getElementById("vin_30");
            vin_30.style.display = "block";
            
            var vin_31 = document.getElementById("vin_31");
            vin_31.style.display = "none";
            contadorVin--;
            break
    }
}

function sonido(){
    
    var random = Math.floor(Math.random()*20);
    var audio_0 = new Audio();
    audio_0.src = "sonidos/0.mp3";
    
    var audio_1 = new Audio();
    audio_1.src = "sonidos/1.mp3";
    
    var audio_2 = new Audio();
    audio_2.src = "sonidos/2.mp3";
    
    var audio_3 = new Audio();
    audio_3.src = "sonidos/3.mp3";
    
    var audio_4 = new Audio();
    audio_4.src = "sonidos/4.mp3";
    
    var audio_5 = new Audio();
    audio_5.src = "sonidos/5.mp3";
    
    var audio_6 = new Audio();
    audio_6.src = "sonidos/6.mp3";
    
    var audio_7 = new Audio();
    audio_7.src = "sonidos/7.mp3";
    
    var audio_8 = new Audio();
    audio_8.src = "sonidos/8.mp3";
    
    var audio_9 = new Audio();
    audio_9.src = "sonidos/9.mp3";
    
    var audio_10 = new Audio();
    audio_10.src = "sonidos/10.mp3";
    
    var audio_11 = new Audio();
    audio_11.src = "sonidos/11.mp3";
    
    var audio_12 = new Audio();
    audio_12.src = "sonidos/12.mp3";
    
    var audio_13 = new Audio();
    audio_13.src = "sonidos/13.mp3";
    
    var audio_14 = new Audio();
    audio_14.src = "sonidos/14.mp3";
    
    var audio_15 = new Audio();
    audio_15.src = "sonidos/15.mp3";
    
    var audio_16 = new Audio();
    audio_16.src = "sonidos/16.mp3";
    
    var audio_17 = new Audio();
    audio_17.src = "sonidos/17.mp3";
    
    var audio_18 = new Audio();
    audio_18.src = "sonidos/18.mp3";
    
    var audio_19 = new Audio();
    audio_19.src = "sonidos/19.mp3";
    
    switch(random){
        case 0:
            audio_0.play();
        break;
        case 1:
            audio_1.play();
        break;
        case 2:
            audio_2.play();
        break;
        case 3:
            audio_3.play();
        break;
        case 4:
            audio_4.play();
        break;
        case 5:
            audio_5.play();
        break;
        case 6:
            audio_6.play();
        break;
        case 7:
            audio_7.play();
        break;
        case 8:
            audio_8.play();
        break;
        case 9:
            audio_9.play();
        break;
        case 10:
            audio_10.play();
        break;
        case 11:
            audio_11.play();
        break;
        case 12:
            audio_12.play();
        break;
        case 13:
            audio_13.play();
        break;
        case 14:
            audio_14.play();
        break;
        case 15:
            audio_15.play();
        break;
        case 16:
            audio_16.play();
        break;
        case 17:
            audio_17.play();
        break;
        case 18:
            audio_18.play();
        break;
        case 19:
            audio_19.play();
        break;
    }
}
