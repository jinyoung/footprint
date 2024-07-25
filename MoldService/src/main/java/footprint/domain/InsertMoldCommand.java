package footprint.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class InsertMoldCommand {

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
}
