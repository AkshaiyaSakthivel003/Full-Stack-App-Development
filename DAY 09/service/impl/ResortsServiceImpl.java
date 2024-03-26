package com.java.aqua.service.impl;

import com.java.aqua.model.Resorts;
import com.java.aqua.repository.ResortsRepository;
import com.java.aqua.service.ResortsService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")

public class ResortsServiceImpl implements ResortsService {

    private final  ResortsRepository resortsRepository;

    @Override
    public List<Resorts> getAllResorts() {
        return resortsRepository.findAll();
    }

    @Override
    public Resorts getResortById(int id) {
        return resortsRepository.findById(id).orElse(null);
    }

    @Override
    public ResponseEntity<Object> addResort(Resorts resort) {
        try {
            Resorts savedResort = resortsRepository.save(resort);
            return new ResponseEntity<>(savedResort, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add resort", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<Object> updateResort(int id, Resorts resort) {
        try {
            Resorts existingResort = resortsRepository.findById(id).orElse(null);
            if (existingResort != null) {
                resort.setResortId(id);
                Resorts updatedResort = resortsRepository.save(resort);
                return new ResponseEntity<>(updatedResort, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Resort not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to update resort", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<Object> deleteResort(int id) {
        try {
            Resorts existingResort = resortsRepository.findById(id).orElse(null);
            if (existingResort != null) {
                resortsRepository.deleteById(id);
                return new ResponseEntity<>("Resort deleted successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Resort not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete resort", HttpStatus.BAD_REQUEST);
        }
    }
}
