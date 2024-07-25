package footprint.infra;

import footprint.domain.*;
import footprint.service.*;
import java.util.List;
import java.util.Optional;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RequestMapping(value="/molds")
public class MoldController {

    @Resource(name = "moldService")
    private MoldService moldService;

    @GetMapping("/molds")
    public List<Mold> getAllMolds() throws Exception {
        // Get all molds via MoldService
        return moldService.getAllMolds();
    }

    @GetMapping("/molds/{moldNo}")
    public Optional<Mold> getMoldById(@PathVariable Long moldNo)
        throws Exception {
        // Get a mold by ID via MoldService
        return moldService.getMoldById(moldNo);
    }

    @PostMapping("/molds")
    public Mold createMold(@RequestBody Mold mold) throws Exception {
        // Create a new mold via MoldService
        return moldService.createMold(mold);
    }

    @PutMapping("/molds/{moldNo}")
    public Mold updateMold(@PathVariable Long moldNo, @RequestBody Mold mold)
        throws Exception {
        // Update an existing mold via MoldService
        return moldService.updateMold(mold);
    }

    @DeleteMapping("/molds/{moldNo}")
    public void deleteMold(@PathVariable Long moldNo) throws Exception {
        // Delete a mold via MoldService
        moldService.deleteMold(moldNo);
    }
}
