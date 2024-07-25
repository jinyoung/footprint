package footprint.infra;

import footprint.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class MetalOrderHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<MetalOrder>> {

    @Override
    public EntityModel<MetalOrder> process(EntityModel<MetalOrder> model) {
        return model;
    }
}
