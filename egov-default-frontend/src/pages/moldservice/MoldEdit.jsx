
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
                    editURL: '/molds'
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
            moldNo: boardDetail.moldNo,
            moldType: boardDetail.moldType,
            prodNo: boardDetail.prodNo,
            progNo: boardDetail.progNo,
            progTypeCode: boardDetail.progTypeCode,
            moldCode: boardDetail.moldCode,
            moldNumber: boardDetail.moldNumber,
            moldNm: boardDetail.moldNm,
            moldStandard: boardDetail.moldStandard,
            curSetMfIdx: boardDetail.curSetMfIdx,
            settingDt: boardDetail.settingDt,
            lifeCycle: boardDetail.lifeCycle,
            moldPrice: boardDetail.moldPrice,
            fairStock: boardDetail.fairStock,
            limitMin: boardDetail.limitMin,
            curStock: boardDetail.curStock,
            isManage: boardDetail.isManage,
            moldDesign: boardDetail.moldDesign,
            moldDesignCode: boardDetail.moldDesignCode,
            moldPicture: boardDetail.moldPicture,
            keepPlace: boardDetail.keepPlace,
            manage1: boardDetail.manage1,
            manage2: boardDetail.manage2,
            regiNm: boardDetail.regiNm,
            regiDt: boardDetail.regiDt,
            modiNm: boardDetail.modiNm,
            modiDt: boardDetail.modiDt,
            checkStandNum: boardDetail.checkStandNum
        };

        axios.post('/molds', entity)
        .then(response => {
            const resp = response.data;
            if (response.data.moldNo) {
                navigate('/moldService/molds');
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
                    <li><Link to="/moldService/molds">Mold</Link></li>
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
                            <h1 className="tit_1">Mold</h1>
                        </div>
                        
                        <h2 className="tit_2">{masterBoard && masterBoard.bbsNm} {modeInfo.modeTitle}</h2>

                        <div className="board_view2">
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MoldNo</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="moldNo" name="moldNo" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, moldNo: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MoldType</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="moldType" name="moldType" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, moldType: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">ProdNo</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="prodNo" name="prodNo" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, prodNo: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">ProgNo</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="progNo" name="progNo" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, progNo: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">ProgTypeCode</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="progTypeCode" name="progTypeCode" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, progTypeCode: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MoldCode</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="moldCode" name="moldCode" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, moldCode: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MoldNumber</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="moldNumber" name="moldNumber" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, moldNumber: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MoldNm</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="moldNm" name="moldNm" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, moldNm: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MoldStandard</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="moldStandard" name="moldStandard" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, moldStandard: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">CurSetMfIdx</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="curSetMfIdx" name="curSetMfIdx" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, curSetMfIdx: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">SettingDt</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="settingDt" name="settingDt" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, settingDt: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">LifeCycle</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="lifeCycle" name="lifeCycle" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, lifeCycle: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MoldPrice</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="moldPrice" name="moldPrice" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, moldPrice: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">FairStock</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="fairStock" name="fairStock" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, fairStock: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">LimitMin</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="limitMin" name="limitMin" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, limitMin: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">CurStock</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="curStock" name="curStock" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, curStock: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">IsManage</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="isManage" name="isManage" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, isManage: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MoldDesign</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="moldDesign" name="moldDesign" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, moldDesign: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MoldDesignCode</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="moldDesignCode" name="moldDesignCode" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, moldDesignCode: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MoldPicture</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="moldPicture" name="moldPicture" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, moldPicture: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">KeepPlace</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="keepPlace" name="keepPlace" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, keepPlace: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Manage1</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="manage1" name="manage1" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, manage1: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Manage2</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="manage2" name="manage2" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, manage2: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">RegiNm</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="regiNm" name="regiNm" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, regiNm: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">RegiDt</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="regiDt" name="regiDt" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, regiDt: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">ModiNm</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="modiNm" name="modiNm" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, modiNm: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">ModiDt</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="modiDt" name="modiDt" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, modiDt: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">CheckStandNum</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="checkStandNum" name="checkStandNum" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, checkStandNum: e.target.value })}
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
                                    <Link to="/moldService/molds" className="btn btn_blue_h46 w_100">목록</Link>
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