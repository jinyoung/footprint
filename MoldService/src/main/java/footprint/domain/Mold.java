package footprint.domain;

import footprint.MoldServiceApplication;
import footprint.domain.MoldInserted;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Mold_table")
@Data
//<<< DDD / Aggregate Root
public class Mold {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long moldNo;

    private String moldType;

    private Integer prodNo;

    private Integer progNo;

    private String progTypeCode;

    private String moldCode;

    private String moldNumber;

    private String moldNm;

    private String moldStandard;

    private Integer curSetMfIdx;

    private Long settingDt;

    private Integer lifeCycle;

    private Integer moldPrice;

    private Integer fairStock;

    private Integer limitMin;

    private Integer curStock;

    private String isManage;

    private String moldDesign;

    private String moldDesignCode;

    private String moldPicture;

    private String keepPlace;

    private String manage1;

    private String manage2;

    private String regiNm;

    private Long regiDt;

    private String modiNm;

    private Long modiDt;

    private Integer checkStandNum;

    @PostPersist
    public void onPostPersist() {
        MoldInserted moldInserted = new MoldInserted(this);
        moldInserted.publishAfterCommit();
    }

    @PrePersist
    public void onPrePersist() {}

    public static MoldRepository repository() {
        MoldRepository moldRepository = MoldServiceApplication.applicationContext.getBean(
            MoldRepository.class
        );
        return moldRepository;
    }
}
//>>> DDD / Aggregate Root
