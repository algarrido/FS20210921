package com.examples;

public class Dni {
	
	public boolean DNI(String dni) {
		
		 char[] letraDni = {
            'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',  'X',  'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
        };  
  
        String num= "";
        int ind = 0;  
    
        if(dni.length() == 8) {
             dni = "0" + dni;
        }
 
        if (dni.isEmpty() || !Character.isLetter(dni.charAt(8)) 
        		|| dni.length() != 9 || dni ==null ) {
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
       
	 
	 return true;    
   }
	
	public boolean isValid(String value) {
		if (value == null)
			return true;
		value = value.toUpperCase();
		if (!value.matches("^\\d{1,8}[A-Z]$"))
			return false;
		return "TRWAGMYFPDXBNJZSQVHLCKE".charAt(Integer.parseInt(value.substring(0, value.length() - 1)) % 23) == value
				.charAt(value.length() - 1);
	}
	
}
