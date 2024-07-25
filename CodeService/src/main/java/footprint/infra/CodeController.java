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
// @RequestMapping(value="/codes")
public class CodeController {

    @Resource(name = "codeService")
    private CodeService codeService;

    @GetMapping("/codes")
    public List<Code> getAllCodes() throws Exception {
        // Get all codes via CodeService
        return codeService.getAllCodes();
    }

    @GetMapping("/codes/{id}")
    public Optional<Code> getCodeById(@PathVariable Long id) throws Exception {
        // Get a code by ID via CodeService
        return codeService.getCodeById(id);
    }

    @PostMapping("/codes")
    public Code createCode(@RequestBody Code code) throws Exception {
        // Create a new code via CodeService
        return codeService.createCode(code);
    }

    @PutMapping("/codes/{id}")
    public Code updateCode(@PathVariable Long id, @RequestBody Code code)
        throws Exception {
        // Update an existing code via CodeService
        return codeService.updateCode(code);
    }

    @DeleteMapping("/codes/{id}")
    public void deleteCode(@PathVariable Long id) throws Exception {
        // Delete a code via CodeService
        codeService.deleteCode(id);
    }
}
