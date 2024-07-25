package footprint.service.impl;

import footprint.domain.Code;
import footprint.domain.CodeRepository;
import footprint.service.CodeService;
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

@Service("codeService")
@Transactional
public class CodeServiceImpl
    extends EgovAbstractServiceImpl
    implements CodeService {

    private static final Logger LOGGER = LoggerFactory.getLogger(
        CodeServiceImpl.class
    );

    @Autowired
    CodeRepository codeRepository;

    @Override
    public List<Code> getAllCodes() throws Exception {
        // Get all codes
        return StreamSupport
            .stream(codeRepository.findAll().spliterator(), false)
            .collect(Collectors.toList());
    }

    @Override
    public Optional<Code> getCodeById(Long id) throws Exception {
        // Get a code by ID
        return codeRepository.findById(id);
    }

    @Override
    public Code createCode(Code code) throws Exception {
        // Create a new code
        return codeRepository.save(code);
    }

    @Override
    public Code updateCode(Code code) throws Exception {
        // Update an existing code via CodeService
        if (codeRepository.existsById(code.getId())) {
            return codeRepository.save(code);
        } else {
            throw processException("info.nodata.msg");
        }
    }

    @Override
    public void deleteCode(Long id) throws Exception {
        // Delete a code
        codeRepository.deleteById(id);
    }
}
