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
// @RequestMapping(value="/metalOrders")
public class MetalOrderController {

    @Resource(name = "metalOrderService")
    private MetalOrderService metalOrderService;

    @GetMapping("/metalOrders")
    public List<MetalOrder> getAllMetalOrders() throws Exception {
        // Get all metalOrders via MetalOrderService
        return metalOrderService.getAllMetalOrders();
    }

    @GetMapping("/metalOrders/{morderNo}")
    public Optional<MetalOrder> getMetalOrderById(
        @PathVariable Integer morderNo
    ) throws Exception {
        // Get a metalOrder by ID via MetalOrderService
        return metalOrderService.getMetalOrderById(morderNo);
    }

    @PostMapping("/metalOrders")
    public MetalOrder createMetalOrder(@RequestBody MetalOrder metalOrder)
        throws Exception {
        // Create a new metalOrder via MetalOrderService
        return metalOrderService.createMetalOrder(metalOrder);
    }

    @PutMapping("/metalOrders/{morderNo}")
    public MetalOrder updateMetalOrder(
        @PathVariable Integer morderNo,
        @RequestBody MetalOrder metalOrder
    ) throws Exception {
        // Update an existing metalOrder via MetalOrderService
        return metalOrderService.updateMetalOrder(metalOrder);
    }

    @DeleteMapping("/metalOrders/{morderNo}")
    public void deleteMetalOrder(@PathVariable Integer morderNo)
        throws Exception {
        // Delete a metalOrder via MetalOrderService
        metalOrderService.deleteMetalOrder(morderNo);
    }
}
