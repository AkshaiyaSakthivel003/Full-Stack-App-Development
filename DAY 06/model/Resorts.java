package com.java.aqua.model;

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
@Table(name = "a_resort")
public class Resorts {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "resortId", nullable = false)
    private int resortId;
    
    @Column(name = "roomType", nullable = false,unique=true)
    private String roomType;
    
    @Column(name = "Price", nullable = false)
    private double Price;

    @Column(name = "available", nullable = false)
    private boolean available;    
    

}