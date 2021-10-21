package com.example.exceptions;

public class InvalidDataException extends Exception {

	private static final long serialVersionUID = 1L;
	final static String MESSAGE_STRING = "Dato invalido";

	public InvalidDataException() {
		super(MESSAGE_STRING);

	}

	public InvalidDataException(String message) {
		super(message);

	}

	public InvalidDataException(Throwable cause) {
		this(MESSAGE_STRING, cause);

	}

	public InvalidDataException(String message, Throwable cause) {
		super(message, cause);

	}

	public InvalidDataException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);

	}

}
