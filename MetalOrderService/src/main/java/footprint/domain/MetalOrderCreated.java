package footprint.domain;

import footprint.domain.*;
import footprint.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class MetalOrderCreated extends AbstractEvent {

    private Integer morderNo;
    private Long orderDt;
    private String accountMon;
    private String kangjong;
    private String kongjung;
    private String dia;
    private Integer mcompNo;
    private Long price;
    private String orderAmt;
    private Integer ownCompNo;
    private String isEnd;
    private String worker;
    private Long requestDt;
    private Long confirmDt;
    private String etc;
    private Boolean isAutoOrder;
    private String isClose;
    private String closeNm;
    private Long closeTm;
    private String isAdmit;
    private String admitNm;
    private Long admitTm;
    private String regiNm;
    private Long regiDt;
    private String modiNm;
    private Long modiDt;
    private String file1;
    private String file2;
    private String file3;

    public MetalOrderCreated(MetalOrder aggregate) {
        super(aggregate);
    }

    public MetalOrderCreated() {
        super();
    }
}
//>>> DDD / Domain Event
