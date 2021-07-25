package com.phong.test4.service.country;

import com.phong.test4.model.Country;
import com.phong.test4.repository.ICountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService implements ICountryService {
    @Autowired
    private ICountryRepository countryRepository;

    @Override
    public Iterable<Country> findAll() {
        return countryRepository.findAll();
    }
}