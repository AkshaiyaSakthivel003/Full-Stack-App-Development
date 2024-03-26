package com.java.aqua.controller;

import org.springframework.web.bind.annotation.RestController;


import com.java.aqua.dto.UserResortBookingDto;

import com.java.aqua.model.ResortBooking;
import com.java.aqua.service.UserResortBookingService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/resort")
@RequiredArgsConstructor
@Tag(name="User Resort Bookings ", description=" To Verify And Update The Models Of Resorts Booked By User")
public class UserResortBookingController {
    
    @Autowired
    UserResortBookingService resortBookingService;

    @PostMapping("/post")
    public String addResortBooking(@RequestBody UserResortBookingDto bookingsDto) {
        String result=resortBookingService.addResortBooking(bookingsDto);
           return result;
    }

    @GetMapping("/get/{name}")
    public List<ResortBooking> getResortBookingsByName(@PathVariable String name) {
        return resortBookingService.getResortBookingsByName(name);
    }

    @PutMapping("/put/{name}")
    public boolean updateBookings(@PathVariable String name, @RequestBody UserResortBookingDto bookings) {
        if (resortBookingService.updateResortBookings(name, bookings)) {
            return true;
        } 
        else {
            return false;
        }
    }

    @DeleteMapping("/delete/{name}")
    public boolean deleteBookingByName(@PathVariable String name) {
        if (resortBookingService.deleteResortBookingByName(name)) {
            return true;
        } 
        else {
            return false;
        }
    }
}