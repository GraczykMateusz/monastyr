package dev.graczykmateusz.monastyr.service;

import org.springframework.stereotype.Service;

@Service
public class HelloWorldService {

    public String getHelloWorld() {
        return "{\"content\":\"hello world\"}";
    }
}
