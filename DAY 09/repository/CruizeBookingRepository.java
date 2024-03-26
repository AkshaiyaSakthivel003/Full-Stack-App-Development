package com.java.aqua.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.java.aqua.model.CruizeBooking;

@Repository

public interface CruizeBookingRepository extends JpaRepository<CruizeBooking, Integer> {

    public List<CruizeBooking> findBookingsByName(String name);

    public CruizeBooking findByName(String name);

    public CruizeBooking findUserByName(String name);

}