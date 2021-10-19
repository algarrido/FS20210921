package com.examples;

public class Dni {
	
	public boolean DNI(String dni) {
		
	 try {
		 char[] letraDni = {
            'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',  'X',  'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
        };  
  
        String num= "";
        int ind = 0;  
    
        if(dni.length() == 8) {
             dni = "0" + dni;
        }
 
        if (dni.isEmpty() || !Character.isLetter(dni.charAt(8)) || dni.length() != 9) {
             return false; 
             
        }
		
        for (int i=0; i<8; i++) {
   
             if(!Character.isDigit(dni.charAt(i))){
                   return false;    
             }       
             num += dni.charAt(i);     
        }
  
        ind = Integer.parseInt(num);
        ind %= 23;
        if ((Character.toUpperCase(dni.charAt(8))) != letraDni[ind]){
             return false;
       }   
       
	 }catch (Exception e) {
		System.err.print(e);
	}
	 return true;    
   }
}
