package footprint.domain;

import footprint.domain.*;
import footprint.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class CodeEntryAdded extends AbstractEvent {

    private Long id;
    private String itemCode;
    private String codeNo;
    private String code;
    private String codeName;
    private String isSys;
    private String isUse;
    private String etc;
    private String etc1;
    private String etc2;
    private String etc3;
    private String etc4;
    private String etc5;

    public CodeEntryAdded(Code aggregate) {
        super(aggregate);
    }

    public CodeEntryAdded() {
        super();
    }
}
//>>> DDD / Domain Event
