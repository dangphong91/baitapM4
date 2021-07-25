package com.phong.ajax.controller;

import com.phong.ajax.model.City;
import com.phong.ajax.model.Country;
import com.phong.ajax.service.city.ICityService;
import com.phong.ajax.service.country.ICountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;

@RestController
@RequestMapping("/")
public class CityController {
    @Autowired
    private ICityService cityService;
    @Autowired
    private ICountryService countryService;

    @ModelAttribute("countries")
    public Iterable<Country> countries() {
        return countryService.findAll();
    }

    @GetMapping("/")
    public ModelAndView listCities() {
        Iterable<City> cities = cityService.findAll();
        ModelAndView modelAndView = new ModelAndView("/list");
        modelAndView.addObject("cities", cities);
        return modelAndView;
    }

    @PostMapping("city")
    public ResponseEntity<City> createCity(@RequestBody City city) {
        city.getCountry().setNameCountry(countryService.findById(city.getCountry().getIdCountry()).get().getNameCountry());
        return new ResponseEntity<>(cityService.save(city), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<Iterable<City>> allCities() {
        return new ResponseEntity<>(cityService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<City> city(@PathVariable Long id) {
        Optional<City> cityOptional = cityService.findById(id);
        if (!cityOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(cityOptional.get(), HttpStatus.OK);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<City> editCity(@RequestBody City city,@PathVariable Long id) {
        city.setIdCity(id);
        city.getCountry().setNameCountry(countryService.findById(city.getCountry().getIdCountry()).get().getNameCountry());
        return new ResponseEntity<>(cityService.save(city), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<City> deleteUser(@PathVariable Long id) {
        Optional<City> cityOptional = cityService.findById(id);
        if (!cityOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        cityService.remove(id);
        return new ResponseEntity<>(cityOptional.get(), HttpStatus.NO_CONTENT);
    }
}