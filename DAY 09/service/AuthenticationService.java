package com.java.aqua.service;

import org.springframework.stereotype.Service;

import com.java.aqua.dto.Request.ForgotPasswordRequest;
import com.java.aqua.dto.Request.LoginRequest;
import com.java.aqua.dto.Request.RegisterRequest;
import com.java.aqua.dto.Response.BasicResponse;
import com.java.aqua.dto.Response.LoginResponse;

@Service
public interface AuthenticationService {

    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);
    
} 