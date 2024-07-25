package footprint.infra;

import footprint.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class MoldHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<Mold>> {

    @Override
    public EntityModel<Mold> process(EntityModel<Mold> model) {
        return model;
    }
}
