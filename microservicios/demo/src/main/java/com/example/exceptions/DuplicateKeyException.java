package com.example.exceptions;

public class DuplicateKeyException extends Exception {


	private static final long serialVersionUID = 1L;
	final static String MESSAGE_STRING = "Clave duplicada";
	public DuplicateKeyException() {
		super(MESSAGE_STRING);
	}

	public DuplicateKeyException(String message) {
		super(message);
		
	}

	public DuplicateKeyException(Throwable cause) {
		this(MESSAGE_STRING,cause);
		
	}

	public DuplicateKeyException(String message, Throwable cause) {
		super(message, cause);
		
	}

	public DuplicateKeyException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		
	}

}
