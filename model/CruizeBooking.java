package com.java.aqua.model;

import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="cruize_booking")
public class CruizeBooking {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "bookingId", nullable = false)
    private int bookingId;

    @Column(name = "userId", nullable = false)
    private int userId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "mobile", nullable = false)
    private String mobile;

    @Column(name = "cruizeModel", nullable = false)
    private String cruizeModel;
    
    @Column(name = "price", nullable = true)
    private double price;
    
    @Column(name = "checkInDate", nullable = false)
    private LocalDate checkInDate;

    @Column(name = "checkOutDate", nullable = false)
    private LocalDate checkOutDate;

    @Column(name = "source", nullable = false)
    private String source;

    @Column(name = "destination", nullable = false)
    private String destination;

    @Column(name = "status",columnDefinition = "varchar(255) default 'pending'")
    private String status;

    // public CruizeBooking(int bookingId, int userId, String name, String mobile, String cruizeModel, double price,
    //         LocalDate checkInDate, LocalDate checkOutDate, String source, String destination, String status) {
    //     this.bookingId = bookingId;
    //     this.userId = userId;
    //     this.name = name;
    //     this.mobile = mobile;
    //     this.cruizeModel = cruizeModel;
    //     this.price = price;
    //     this.checkInDate = checkInDate;
    //     this.checkOutDate = checkOutDate;
    //     this.source = source;
    //     this.destination = destination;
    //     this.status = status;
    // }
    
        
    
}