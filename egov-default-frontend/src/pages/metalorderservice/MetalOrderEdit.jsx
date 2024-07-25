
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
                    editURL: '/metalOrders'
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
            morderNo: boardDetail.morderNo,
            orderDt: boardDetail.orderDt,
            accountMon: boardDetail.accountMon,
            kangjong: boardDetail.kangjong,
            kongjung: boardDetail.kongjung,
            dia: boardDetail.dia,
            mcompNo: boardDetail.mcompNo,
            price: boardDetail.price,
            orderAmt: boardDetail.orderAmt,
            ownCompNo: boardDetail.ownCompNo,
            isEnd: boardDetail.isEnd,
            worker: boardDetail.worker,
            requestDt: boardDetail.requestDt,
            confirmDt: boardDetail.confirmDt,
            etc: boardDetail.etc,
            isAutoOrder: boardDetail.isAutoOrder,
            isClose: boardDetail.isClose,
            closeNm: boardDetail.closeNm,
            closeTm: boardDetail.closeTm,
            isAdmit: boardDetail.isAdmit,
            admitNm: boardDetail.admitNm,
            admitTm: boardDetail.admitTm,
            regiNm: boardDetail.regiNm,
            regiDt: boardDetail.regiDt,
            modiNm: boardDetail.modiNm,
            modiDt: boardDetail.modiDt,
            file1: boardDetail.file1,
            file2: boardDetail.file2,
            file3: boardDetail.file3
        };

        axios.post('/metalOrders', entity)
        .then(response => {
            const resp = response.data;
            if (response.data.morderNo) {
                navigate('/metalOrderService/metalOrders');
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
                    <li><Link to="/metalOrderService/metalOrders">MetalOrder</Link></li>
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
                            <h1 className="tit_1">MetalOrder</h1>
                        </div>
                        
                        <h2 className="tit_2">{masterBoard && masterBoard.bbsNm} {modeInfo.modeTitle}</h2>

                        <div className="board_view2">
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">MorderNo</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="morderNo" name="morderNo" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, morderNo: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">OrderDt</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="orderDt" name="orderDt" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, orderDt: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">AccountMon</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="accountMon" name="accountMon" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, accountMon: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Kangjong</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="kangjong" name="kangjong" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, kangjong: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Kongjung</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="kongjung" name="kongjung" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, kongjung: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Dia</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="dia" name="dia" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, dia: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">McompNo</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="mcompNo" name="mcompNo" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, mcompNo: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Price</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="price" name="price" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, price: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">OrderAmt</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="orderAmt" name="orderAmt" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, orderAmt: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">OwnCompNo</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="ownCompNo" name="ownCompNo" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, ownCompNo: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">IsEnd</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="isEnd" name="isEnd" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, isEnd: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Worker</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="worker" name="worker" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, worker: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">RequestDt</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="requestDt" name="requestDt" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, requestDt: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">ConfirmDt</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="confirmDt" name="confirmDt" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, confirmDt: e.target.value })}
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
                                    <label htmlFor="nttSj">IsAutoOrder</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="isAutoOrder" name="isAutoOrder" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, isAutoOrder: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">IsClose</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="isClose" name="isClose" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, isClose: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">CloseNm</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="closeNm" name="closeNm" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, closeNm: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">CloseTm</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="closeTm" name="closeTm" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, closeTm: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">IsAdmit</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="isAdmit" name="isAdmit" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, isAdmit: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">AdmitNm</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="admitNm" name="admitNm" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, admitNm: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">AdmitTm</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="admitTm" name="admitTm" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, admitTm: e.target.value })}
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
                                    <label htmlFor="nttSj">File1</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="file1" name="file1" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, file1: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">File2</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="file2" name="file2" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, file2: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">File3</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="file3" name="file3" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, file3: e.target.value })}
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
                                    <Link to="/metalOrderService/metalOrders" className="btn btn_blue_h46 w_100">목록</Link>
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