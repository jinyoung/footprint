package footprint.domain;

import footprint.MetalOrderServiceApplication;
import footprint.domain.MetalOrderCreated;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "MetalOrder_table")
@Data
//<<< DDD / Aggregate Root
public class MetalOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    @PostPersist
    public void onPostPersist() {
        MetalOrderCreated metalOrderCreated = new MetalOrderCreated(this);
        metalOrderCreated.publishAfterCommit();
    }

    @PrePersist
    public void onPrePersist() {}

    public static MetalOrderRepository repository() {
        MetalOrderRepository metalOrderRepository = MetalOrderServiceApplication.applicationContext.getBean(
            MetalOrderRepository.class
        );
        return metalOrderRepository;
    }
}
//>>> DDD / Aggregate Root
