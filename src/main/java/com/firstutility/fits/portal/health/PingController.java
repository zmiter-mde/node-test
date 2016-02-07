package com.firstutility.fits.portal.health;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@PropertySource("classpath:serviceinfo/service-info.properties")
public class PingController {

    @Value("${groupId}")
    private String groupId;

    @Value("${artifactId}")
    private String artifactId;

    @Value("${version}")
    private String version;

    @RequestMapping(
            value = "/ping",
            method = RequestMethod.GET,
            produces = {
                    MediaType.APPLICATION_JSON_VALUE,
                    MediaType.APPLICATION_XML_VALUE,
                    MediaType.TEXT_PLAIN_VALUE
            })
    public ResponseEntity<Object> ping(@RequestHeader(HttpHeaders.ACCEPT) String acceptHeader) {
        ServiceInfo serviceInfo = new ServiceInfo(groupId, artifactId, version);

        Object result = serviceInfo;
        if (MediaType.TEXT_PLAIN_VALUE.equals(acceptHeader)) {
            result = serviceInfo.toString();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "*");

        return new ResponseEntity<>(result, headers, HttpStatus.OK);
    }
}
