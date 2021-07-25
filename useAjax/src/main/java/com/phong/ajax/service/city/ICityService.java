package com.phong.ajax.service.city;

import com.phong.ajax.model.City;

import java.util.Optional;

public interface ICityService {

    Iterable<City> findAll();

    Optional<City> findById(Long id);

    City save(City city);

    void remove(Long id);
}