package com.java.aqua.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserResortBookingDto {


    private int resortId;
    private int userId;
    private String name;
    private int mobile;
    private String roomType;
    private int person;
    private double price;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    
    
}