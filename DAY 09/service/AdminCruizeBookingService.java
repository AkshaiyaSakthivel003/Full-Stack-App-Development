package com.java.aqua.service;
 

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.aqua.dto.AdminCruizeBookingDto;
import com.java.aqua.model.CruizeBooking;
import com.java.aqua.repository.CruizeBookingRepository;

@Service

public class AdminCruizeBookingService {
    
    @Autowired
    CruizeBookingRepository repository;

    public List<CruizeBooking> getBookings() {
        return repository.findAll();
    }

    public List<CruizeBooking> getBookingsByName(String name)
	{
		return repository.findBookingsByName(name);
    }

    public boolean updateUser(String name, AdminCruizeBookingDto bookings) {
        CruizeBooking existingUser = repository.findByName(name);
        if (existingUser != null) {
            existingUser.setStatus(bookings.getStatus());
            repository.save(existingUser);
            return true;
        } 
        else {
            return false;
        }
    }

}