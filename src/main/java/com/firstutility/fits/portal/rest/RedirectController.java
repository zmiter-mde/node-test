package com.firstutility.fits.portal.rest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RedirectController {
    @RequestMapping(value = {
            "/{path:[^\\.]+}",
            "/reports/**",
            "/generators/**",
            "/billinginfo/**",
            "/fits/**",
            "/calculations/**",
            "/reads/**",
            "/read/**",
            "/tolerances/**",
            "/meters/**",
            "/quarters/**",
            "/upload/**"
    }
    )
    public String redirect() {
        return "forward:/";
    }
}
