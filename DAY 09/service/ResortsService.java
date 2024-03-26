package com.java.aqua.service;

import java.util.List;
import org.springframework.http.ResponseEntity;

import com.java.aqua.model.Resorts;



public interface ResortsService {
    List<Resorts> getAllResorts();

    Resorts getResortById(int id);

    ResponseEntity<Object> addResort(Resorts resort);

    ResponseEntity<Object> updateResort(int id, Resorts resort);

    ResponseEntity<Object> deleteResort(int id);
}