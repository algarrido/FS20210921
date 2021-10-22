package com.example.ioc;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

//@Service
//@Qualifier("dos")
public class OtroServicioImpl implements Servicio {

	@Override
	public String saluda() {
		// TODO Auto-generated method stub
		return "Soy una tetera";
	}

}
