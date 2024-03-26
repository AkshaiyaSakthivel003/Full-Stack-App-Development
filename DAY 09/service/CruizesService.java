package com.java.aqua.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.aqua.model.Cruizes;
import com.java.aqua.repository.CruizesRepository;

@Service
@SuppressWarnings("null")

public class CruizesService {
    
    @Autowired
    CruizesRepository repository;

    public boolean addService(Cruizes services) {
        repository.save(services);
        return true;
    }

    public List<Cruizes> getServices() {
        return repository.findAll();
    }

    public boolean updateBookings(String cruizeModel, Cruizes service) {

        Cruizes existingService = repository.findServiceByCruizeModel(cruizeModel);
        if(existingService!=null)
        {
            existingService.setCruizeModel(service.getCruizeModel());
            existingService.setCruizePrice(service.getCruizePrice());
            existingService.setCruizeClass(service.getCruizeClass());
            existingService.setDescription(service.getDescription());
            existingService.setAvailable(service.isAvailable());
           
            repository.save(existingService);
            return true;
        }
        else{
            return false;
        }

    }

    public boolean deleteServiceByCruizeModel(String cruizeModel) {
        Cruizes existingService = repository.findServiceByCruizeModel(cruizeModel);
        if (existingService != null) {
            repository.delete(existingService);
            return true;
        } 
        else {
            return false;
        }
    }
}