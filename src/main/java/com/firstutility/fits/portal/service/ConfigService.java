package com.firstutility.fits.portal.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jndi.JndiTemplate;
import org.springframework.stereotype.Component;

import javax.naming.NamingException;
import java.util.Properties;

@Component
public class ConfigService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ConfigService.class);

    private static final String JNDI_PREFIX = "java:comp/env/";

    private JndiTemplate jndiTemplate;

    private Properties config;

    public ConfigService() {
        this.jndiTemplate = new JndiTemplate();
        this.config = loadConfig();
    }

    public Properties getConfig() {
        return config;
    }

    private Properties loadConfig() {
        String fitsEngineUrl = getJndiValue("fits-engine-url", "http://localhost:8080/fits-engine");

        Properties properties = new Properties();
        properties.put("engine.url", fitsEngineUrl);

        return properties;
    }

    private String getJndiValue(String name, String defaultValue) {
        String result = defaultValue;

        try {
            result = (String) jndiTemplate.lookup(JNDI_PREFIX + name);
            LOGGER.info("read jndi: " + name + "=" + result);
        } catch (NamingException e) {
            String msg = "Can not find jndi resource with name=" + name + ". Using default value=" + defaultValue;
            LOGGER.warn(msg);
        }

        return result;
    }

}
