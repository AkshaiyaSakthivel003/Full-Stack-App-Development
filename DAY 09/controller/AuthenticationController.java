package com.java.aqua.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PatchExchange;

import com.java.aqua.dto.Request.ForgotPasswordRequest;
import com.java.aqua.dto.Request.LoginRequest;
import com.java.aqua.dto.Request.RegisterRequest;
import com.java.aqua.dto.Response.BasicResponse;
import com.java.aqua.dto.Response.LoginResponse;
import com.java.aqua.service.AuthenticationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/aqua/api/v1/authentication")
@RequiredArgsConstructor
@Tag(name="Authentication", description = "It's used to authenticate and authorize the user.")
public class AuthenticationController {

private final AuthenticationService authenticationService;

    
    @PostMapping("/register")
    @Operation(summary = "User registration", description = "For registration process, i collect user credentials.")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        BasicResponse<String> response = new BasicResponse<>();
        try {
            response = authenticationService.register(registerRequest);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);

        } catch(Exception e) {
            response.setMessage("Something went wrong.");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);

        }

    }
    
    @PostMapping("/login")
    @Operation(summary = "User Authentication", description = "Upon successful authentication using user credentials.")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        BasicResponse<LoginResponse> response = new BasicResponse<>();
        try{
            response = authenticationService.login(loginRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);

        } 
        catch (Exception e) {
            response.setMessage("Something went wrong");
            response.setData(LoginResponse.builder().accessToken("").build());
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }  

    }

    @PatchExchange("/fp")
    @Operation(summary = "Reset user password", description = "For this process, I collect user's email, current password and new password.")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest){
        BasicResponse<String> response = new BasicResponse<>();
        try{
            response = authenticationService.forgotPassword(forgotPasswordRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch(Exception e){
            response.setMessage("Something went wrong");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }

    }
}
