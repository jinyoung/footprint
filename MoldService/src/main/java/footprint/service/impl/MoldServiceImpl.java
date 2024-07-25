package footprint.service.impl;

import footprint.domain.Mold;
import footprint.domain.MoldRepository;
import footprint.service.MoldService;
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

@Service("moldService")
@Transactional
public class MoldServiceImpl
    extends EgovAbstractServiceImpl
    implements MoldService {

    private static final Logger LOGGER = LoggerFactory.getLogger(
        MoldServiceImpl.class
    );

    @Autowired
    MoldRepository moldRepository;

    @Override
    public List<Mold> getAllMolds() throws Exception {
        // Get all molds
        return StreamSupport
            .stream(moldRepository.findAll().spliterator(), false)
            .collect(Collectors.toList());
    }

    @Override
    public Optional<Mold> getMoldById(Long moldNo) throws Exception {
        // Get a mold by ID
        return moldRepository.findById(moldNo);
    }

    @Override
    public Mold createMold(Mold mold) throws Exception {
        // Create a new mold
        return moldRepository.save(mold);
    }

    @Override
    public Mold updateMold(Mold mold) throws Exception {
        // Update an existing mold via MoldService
        if (moldRepository.existsById(mold.getMoldNo())) {
            return moldRepository.save(mold);
        } else {
            throw processException("info.nodata.msg");
        }
    }

    @Override
    public void deleteMold(Long moldNo) throws Exception {
        // Delete a mold
        moldRepository.deleteById(moldNo);
    }
}
