package com.example.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public void sendEmail(String name, String userEmail, String messageBody) {
        SimpleMailMessage message = new SimpleMailMessage();
        
        // Send to yourself (the owner of the portfolio)
        message.setFrom(fromEmail);
        message.setTo(fromEmail); 
        message.setSubject("Portfolio Contact: " + name);
        message.setText("Name: " + name + "\nEmail: " + userEmail + "\n\nMessage:\n" + messageBody);

        mailSender.send(message);
    }
}
