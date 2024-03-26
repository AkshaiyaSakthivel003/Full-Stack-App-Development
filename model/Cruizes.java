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
@Table(name = "a_cruizes")
public class Cruizes {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "cruizeId", nullable = false)
    private int cruizeId;
    
    @Column(name = "cruizeModel", nullable = false,unique=true)
    private String cruizeModel;
    
    @Column(name = "cruizePrice", nullable = false)
    private double cruizePrice;
    
    @Column(name = "cruizeClass", nullable = false)
    private String cruizeClass;
    
    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "available", nullable = false)
    private boolean available;    
    

}