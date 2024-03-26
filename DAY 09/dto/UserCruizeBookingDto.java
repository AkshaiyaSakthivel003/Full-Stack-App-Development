package com.java.aqua.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class UserCruizeBookingDto {

    private int bookingId;
    private int userId;
    private String name;
    private String mobile;
    private String cruizeModel;
    private double price;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private String source;
    private String destination;
    
}