
import React, { useEffect, useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

import * as EgovNet from 'api/egovFetch'
import { NOTICE_BBS_ID } from 'config'
import CODE from 'constants/code'
import URL from 'constants/url'
import axios from 'axios';

import EgovAttachFile from 'components/EgovAttachFile'
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavInform'
import bbsFormVaildator from 'utils/bbsFormVaildator'

function EgovNoticeEdit(props) {
    console.group("EgovNoticeEdit");
    console.log("EgovNoticeEdit [props] : ", props);
    props = {mode: CODE.MODE_CREATE};

    const navigate = useNavigate();
    const location = useLocation();
    console.log("EgovNoticeEdit [location] : ", location);

    const bbsId = location.state?.bbsId || NOTICE_BBS_ID;
    const nttId = location.state?.nttId || "";

    const [modeInfo, setModeInfo] = useState({ mode: props.mode });
    const [masterBoard, setMasterBoard] = useState({});
    const [boardDetail, setBoardDetail] = useState({ nttSj: '', nttCn: '' });
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const initMode = () => {
        switch (props.mode) {
            case CODE.MODE_CREATE:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: "등록",
                    method: "POST",
                    editURL: '/codes'
                });
                break;
            
			default:
                navigate({pathname: URL.ERROR}, {state: {msg : ""}});
        }
    }

    const updateBoard = () => {
        const formData = new FormData();
        for (let key in boardDetail) {
            formData.append(key, boardDetail[key]);
        }

        const entity = {
            id: boardDetail.id,
            itemCode: boardDetail.itemCode,
            codeNo: boardDetail.codeNo,
            code: boardDetail.code,
            codeName: boardDetail.codeName,
            isSys: boardDetail.isSys,
            isUse: boardDetail.isUse,
            etc: boardDetail.etc,
            etc1: boardDetail.etc1,
            etc2: boardDetail.etc2,
            etc3: boardDetail.etc3,
            etc4: boardDetail.etc4,
            etc5: boardDetail.etc5
        };

        axios.post('/codes', entity)
        .then(response => {
            const resp = response.data;
            if (response.data.id) {
                navigate('/codeService/codes');
            } else {
                navigate({pathname: URL.ERROR}, {state: {msg: ""}});
            }
        })
        .catch(error => {
            console.error('Request failed:', error);
            navigate({pathname: URL.ERROR}, {state: {msg: error.message}});
        });
    };

	const Location = React.memo(function Location(masterBoard) {
        return (
            <div className="location">
                <ul>
                    <li><Link to={URL.MAIN} className="home">Home</Link></li>
                    <li><Link to="/codeService/codes">Code</Link></li>
                    <li>{masterBoard && masterBoard.bbsNm}</li>
                </ul>
            </div>
        )
    });

    useEffect(function () {
        initMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.groupEnd("EgovNoticeEdit");

    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <Location />
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents NOTICE_LIST" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">Code</h1>
                        </div>
                        
                        <h2 className="tit_2">{masterBoard && masterBoard.bbsNm} {modeInfo.modeTitle}</h2>

                        <div className="board_view2">
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Id</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="id" name="id" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, id: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">ItemCode</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="itemCode" name="itemCode" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, itemCode: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">CodeNo</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="codeNo" name="codeNo" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, codeNo: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Code</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="code" name="code" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, code: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">CodeName</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="codeName" name="codeName" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, codeName: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">IsSys</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="isSys" name="isSys" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, isSys: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">IsUse</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="isUse" name="isUse" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, isUse: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Etc</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="etc" name="etc" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, etc: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Etc1</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="etc1" name="etc1" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, etc1: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Etc2</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="etc2" name="etc2" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, etc2: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Etc3</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="etc3" name="etc3" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, etc3: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Etc4</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="etc4" name="etc4" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, etc4: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Etc5</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="etc5" name="etc5" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, etc5: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            {/* <!-- 버튼영역 --> */}
                            <div className="board_btn_area">
                                <div className="left_col btn1">
                                    <button className="btn btn_skyblue_h46 w_100"
                                        onClick={() => updateBoard()}>저장</button>
                                </div>

                                <div className="right_col btn1">
                                    <Link to="/codeService/codes" className="btn btn_blue_h46 w_100">목록</Link>
                                </div>
                            </div>
                            {/* <!--// 버튼영역 --> */}
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EgovNoticeEdit;