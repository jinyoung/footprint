package footprint.domain;

import footprint.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(collectionResourceRel = "molds", path = "molds")
public interface MoldRepository
    extends PagingAndSortingRepository<Mold, Long> {}
