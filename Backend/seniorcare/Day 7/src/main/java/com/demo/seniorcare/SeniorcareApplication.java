package com.demo.seniorcare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
Main Configurations

@OpenAPIDefinition(
		info =@Info(
				title = "Senior Care Application",
				version = "1.1.2",
				description = "App Description",
				contact = @Contact(
						name = "Author Name",
						email = "Author Email"
						)
				)
		)
public class SeniorcareApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeniorcareApplication.class, args);  
	
		
	
	}

}
