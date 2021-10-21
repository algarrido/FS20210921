package com.examples;

import static org.hamcrest.CoreMatchers.nullValue;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Calculadora implements ICalculadora {
	
	@Override
	public double sumar(double a, double b) {
		return a + b;
	}
	@Override
	public double divide(double a, double b) {
		return a / b;
	}
	@Override
	public int divide(int a, int b) {
		return a / b;
	}
	

}
