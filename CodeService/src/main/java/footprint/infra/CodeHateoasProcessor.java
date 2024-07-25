package footprint.infra;

import footprint.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class CodeHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<Code>> {

    @Override
    public EntityModel<Code> process(EntityModel<Code> model) {
        return model;
    }
}
