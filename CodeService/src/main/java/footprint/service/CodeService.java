package footprint.service;

import footprint.domain.*;
import java.util.List;
import java.util.Optional;

public interface CodeService {
    List<Code> getAllCodes() throws Exception;
    Optional<Code> getCodeById(Long id) throws Exception;
    Code createCode(Code code) throws Exception;
    Code updateCode(Code code) throws Exception;
    void deleteCode(Long id) throws Exception;
}
