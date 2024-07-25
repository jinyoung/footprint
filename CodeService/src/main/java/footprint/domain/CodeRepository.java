package footprint.domain;

import footprint.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(collectionResourceRel = "codes", path = "codes")
public interface CodeRepository
    extends PagingAndSortingRepository<Code, Long> {}
