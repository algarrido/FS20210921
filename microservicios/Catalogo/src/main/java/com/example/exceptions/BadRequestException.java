package com.example.exceptions;

public class BadRequestException extends Exception {


	private static final long serialVersionUID = 1L;
	final static String MESSAGE_STRING = "Error consulta";
	public BadRequestException() {
		super(MESSAGE_STRING);
	}

	public BadRequestException(String message) {
		super(message);
	
	}

	public BadRequestException(Throwable cause) {
		super(cause);
		
	}

	public BadRequestException(String message, Throwable cause) {
		super(message, cause);
	
	}

	public BadRequestException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	
	}

}
