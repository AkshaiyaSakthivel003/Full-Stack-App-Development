package com.java.aqua;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.RequiredArgsConstructor;

@SpringBootApplication
@RequiredArgsConstructor
@SuppressWarnings("null")

public class AquaApplication {

	private final PasswordEncoder passwordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(AquaApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner commandLineRunner(com.java.aqua.repository.UserRepository userRepository){
		return args -> {
			if(userRepository.count() > 0) return;
			var admin = com.java.aqua.model.User.builder()
						.name("Admin")
						.email("admin@gmail.com")
						.password(passwordEncoder.encode("Admin@123"))
						.role(com.java.aqua.Enumerator.Role.ADMIN)
						.build();
			userRepository.save(admin);
		};
	}
}