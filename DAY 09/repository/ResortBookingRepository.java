package com.java.aqua.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.aqua.model.ResortBooking;


@Repository

public interface ResortBookingRepository extends JpaRepository<ResortBooking, Integer> {

    public List<ResortBooking> findResortBookingsByName(String name);

    public ResortBooking findResortByName(String name);

    public ResortBooking findUserByName(String name);

}