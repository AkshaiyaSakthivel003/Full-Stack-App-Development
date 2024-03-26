package com.java.aqua.model;

import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name="resort_booking")
public class ResortBooking {
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "resortId", nullable = false)
    private int resortId;

    @Column(name = "userId", nullable = false)
    private int userId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "mobile", nullable = false)
    private int mobile;
    
    @Column(name = "cruizeModel", nullable = false)
    private String roomType;

    @Column(name = "person", nullable = false)
    private int person;
    
    @Column(name = "price", nullable = true)
    private double price;
    
    @Column(name = "checkInDate", nullable = false)
    private LocalDate checkInDate;

    @Column(name = "checkOutDate", nullable = false)
    private LocalDate checkOutDate;

    @Column(name = "status",columnDefinition = "varchar(255) default 'pending'")
    private String status;

   

    public ResortBooking(int resortId, int userId, String name, int mobile, String roomType, int person, double price,
            LocalDate checkInDate, LocalDate checkOutDate, String status) {
        this.resortId = resortId;
        this.userId = userId;
        this.name = name;
        this.mobile = mobile;
        this.roomType = roomType;
        this.person = person;
        this.price = price;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.status = status;
       
    }

    
    
        
    
}