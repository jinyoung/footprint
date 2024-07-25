package footprint.service;

import footprint.domain.*;
import java.util.List;
import java.util.Optional;

public interface MoldService {
    List<Mold> getAllMolds() throws Exception;
    Optional<Mold> getMoldById(Long moldNo) throws Exception;
    Mold createMold(Mold mold) throws Exception;
    Mold updateMold(Mold mold) throws Exception;
    void deleteMold(Long moldNo) throws Exception;
}
