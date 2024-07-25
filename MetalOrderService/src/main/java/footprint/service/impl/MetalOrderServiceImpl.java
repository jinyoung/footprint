package footprint.service.impl;

import footprint.domain.MetalOrder;
import footprint.domain.MetalOrderRepository;
import footprint.service.MetalOrderService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.egovframe.rte.fdl.cmmn.EgovAbstractServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("metalOrderService")
@Transactional
public class MetalOrderServiceImpl
    extends EgovAbstractServiceImpl
    implements MetalOrderService {

    private static final Logger LOGGER = LoggerFactory.getLogger(
        MetalOrderServiceImpl.class
    );

    @Autowired
    MetalOrderRepository metalOrderRepository;

    @Override
    public List<MetalOrder> getAllMetalOrders() throws Exception {
        // Get all metalOrders
        return StreamSupport
            .stream(metalOrderRepository.findAll().spliterator(), false)
            .collect(Collectors.toList());
    }

    @Override
    public Optional<MetalOrder> getMetalOrderById(Integer morderNo)
        throws Exception {
        // Get a metalOrder by ID
        return metalOrderRepository.findById(morderNo);
    }

    @Override
    public MetalOrder createMetalOrder(MetalOrder metalOrder) throws Exception {
        // Create a new metalOrder
        return metalOrderRepository.save(metalOrder);
    }

    @Override
    public MetalOrder updateMetalOrder(MetalOrder metalOrder) throws Exception {
        // Update an existing metalOrder via MetalOrderService
        if (metalOrderRepository.existsById(metalOrder.getMorderNo())) {
            return metalOrderRepository.save(metalOrder);
        } else {
            throw processException("info.nodata.msg");
        }
    }

    @Override
    public void deleteMetalOrder(Integer morderNo) throws Exception {
        // Delete a metalOrder
        metalOrderRepository.deleteById(morderNo);
    }
}
