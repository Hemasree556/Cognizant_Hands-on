package com.cognizant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    // Create Logger object
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        // Log an error message
        logger.error("This is an error message");

        // Log a warning message
        logger.warn("This is a warning message");
    }
}