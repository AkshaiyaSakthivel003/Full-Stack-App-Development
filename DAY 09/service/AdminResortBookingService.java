package com.java.aqua.service;
 

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.aqua.dto.AdminResortBookingDto;
import com.java.aqua.model.ResortBooking;
import com.java.aqua.repository.ResortBookingRepository;

@Service
public class AdminResortBookingService {
    


    
    @Autowired
    ResortBookingRepository resortBookingRepository;

    public List<ResortBooking> getResortBookings() {
        return resortBookingRepository.findAll();
    }

    public List<ResortBooking> getResortBookingsByName(String name)
	{
		return resortBookingRepository.findResortBookingsByName(name);
    }

    public boolean updateUser(String name, AdminResortBookingDto adminResortBookingDto) {
        ResortBooking existingUser = resortBookingRepository.findResortByName(name);
        if (existingUser != null) {
            existingUser.setStatus(adminResortBookingDto.getStatus());
            resortBookingRepository.save(existingUser);
            return true;
        } 
        else {
            return false;
        }
    }

}