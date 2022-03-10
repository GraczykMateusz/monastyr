package dev.graczykmateusz.monastyr.gateway;

import dev.graczykmateusz.monastyr.service.HelloWorldService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class HelloWorldController {

    private final HelloWorldService service;

    @GetMapping("/helloworld")
    String getHelloWorld() {
        return service.getHelloWorld();
    }

}

