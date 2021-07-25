package com.phong.test4.service.city;

import com.phong.test4.model.City;

import java.util.Optional;

public interface ICityService {

    Iterable<City> findAll();

    Optional<City> findById(Long id);

    void save(City city);

    void remove(Long id);
}