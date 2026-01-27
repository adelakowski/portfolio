package com.example.portfolio.controller;

import com.example.portfolio.dto.ContactRequest;
import com.example.portfolio.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*") // Allow frontend access
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> sendContactEmail(@RequestBody ContactRequest request) {
        try {
            emailService.sendEmail(request.getName(), request.getEmail(), request.getMessage());
            return ResponseEntity.ok("Message sent successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error sending message: " + e.getMessage());
        }
    }
}
