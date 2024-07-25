package footprint.domain;

import footprint.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(
    collectionResourceRel = "metalOrders",
    path = "metalOrders"
)
public interface MetalOrderRepository
    extends PagingAndSortingRepository<MetalOrder, Integer> {}
