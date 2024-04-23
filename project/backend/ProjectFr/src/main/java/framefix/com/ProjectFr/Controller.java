package framefix.com.ProjectFr;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @CrossOrigin(origins = "http://localhost:3000/") 
    @GetMapping("/")
    public String getFrameFixData() {
        return "hello world";
    }

}
