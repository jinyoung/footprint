package footprint.domain;

import footprint.CodeServiceApplication;
import footprint.domain.CodeEntryAdded;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Code_table")
@Data
//<<< DDD / Aggregate Root
public class Code {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    @PostPersist
    public void onPostPersist() {
        CodeEntryAdded codeEntryAdded = new CodeEntryAdded(this);
        codeEntryAdded.publishAfterCommit();
    }

    @PrePersist
    public void onPrePersist() {}

    public static CodeRepository repository() {
        CodeRepository codeRepository = CodeServiceApplication.applicationContext.getBean(
            CodeRepository.class
        );
        return codeRepository;
    }
}
//>>> DDD / Aggregate Root
