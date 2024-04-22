package framefix.com.ProjectFr;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class Controller {

    @CrossOrigin(origins = "http://localhost:3000/") 
    @GetMapping("/")
    public String getFrameFixData() {
        return "hi, world!";
    }

}
