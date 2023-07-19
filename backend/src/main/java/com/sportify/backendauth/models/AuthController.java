package com.sportify.backendauth.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sportify.backendauth.models.User;
import com.sportify.backendauth.repository.UserRepository;
import com.sportify.backendauth.request.LoginRequest;
import com.sportify.backendauth.request.SignupRequest;
import com.sportify.backendauth.response.JwtResponse;
import com.sportify.backendauth.response.MessageResponse;
import com.sportify.backendauth.security.jwt.JwtUtils;
import com.sportify.backendauth.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
}