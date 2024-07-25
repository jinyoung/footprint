package footprint.service;

import footprint.domain.*;
import java.util.List;
import java.util.Optional;

public interface MetalOrderService {
    List<MetalOrder> getAllMetalOrders() throws Exception;
    Optional<MetalOrder> getMetalOrderById(Integer morderNo) throws Exception;
    MetalOrder createMetalOrder(MetalOrder metalOrder) throws Exception;
    MetalOrder updateMetalOrder(MetalOrder metalOrder) throws Exception;
    void deleteMetalOrder(Integer morderNo) throws Exception;
}
