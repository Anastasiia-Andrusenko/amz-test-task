package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;


@RestController
@RequestMapping("/api/ads")
public class AdController {

    private final List<AdData> ads = new ArrayList<>(Arrays.asList(
            new AdData("Advert 1", 89, 119),
            new AdData("Advert 2", 144, 230),
            new AdData("Advert 3", 44, 301),
            new AdData("Advert 4", 109, 274)
      )
    );

    @GetMapping
    public List<AdData> getAds() {
        return ads;
    }

    @PostMapping
    public AdData createAd(@RequestBody AdData newAd) {
        ads.add(newAd);
        return newAd;
    }
}