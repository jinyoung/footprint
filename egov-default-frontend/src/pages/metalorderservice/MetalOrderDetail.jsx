
import { useEffect, useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

import axios from 'axios';

import * as EgovNet from 'api/egovFetch'
import { NOTICE_BBS_ID } from 'config'
import CODE from 'constants/code'
import URL from 'constants/url'

import EgovAttachFile from 'components/EgovAttachFile'
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavInform'

function EgovNoticeDetail(props) {
    console.group("EgovNoticeDetail");
    console.log("EgovNoticeDetail [props] : ", props);

    const navigate = useNavigate();
    const location = useLocation();
    console.log("EgovNoticeDetail [location] : ", location);

    // const bbsId = location.state.bbsId || NOTICE_BBS_ID;
    const morder_no = location.state.morder_no;
    const searchCondition = location.state.searchCondition;

    const condition = true; 

    const [entity, setEntity] = useState("");

    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [boardDetail, setBoardDetail] = useState({});
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const retrieveDetail = () => {
        const retrieveDetailURL = `/metalOrders/${morder_no}`;
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }
        EgovNet.requestFetch(retrieveDetailURL,
            requestOptions,
            function (resp) {
                setBoardDetail(resp);
            }
        );
    }
    useEffect(function () {
        retrieveDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function fetchMetalOrder(morder_no){
        axios.get(`/metalOrders/${morder_no}`)
        .then(response => {
            setBoardDetail(response.data);
        })
    }

    function deleteList(){
        axios.delete(`/metalOrders/${morder_no}`)
        navigate('/metalOrderService/metalOrders');
    }



    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li><Link to="/metalOrderService/metalOrders">MetalOrder</Link></li>
                        <li>{masterBoard && masterBoard.bbsNm}</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents NOTICE_VIEW" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">MetalOrder</h1>
                        </div>

                        {/* <!-- 게시판 상세보기 --> */}
                        <div className="board_view">
                            <div className="board_view_top">
                                <div className="tit">{morder_no}</div>
                                <div className="info">
                                    <dl>
                                        <dt>MorderNo</dt>
                                        <dd>{morder_no}</dd>
                                    </dl>
                                    <dl>
                                        <dt>OrderDt</dt>
                                        <dd>{boardDetail && boardDetail.orderDt }</dd>
                                    </dl>
                                    <dl>
                                        <dt>AccountMon</dt>
                                        <dd>{boardDetail && boardDetail.accountMon }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Kangjong</dt>
                                        <dd>{boardDetail && boardDetail.kangjong }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Kongjung</dt>
                                        <dd>{boardDetail && boardDetail.kongjung }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Dia</dt>
                                        <dd>{boardDetail && boardDetail.dia }</dd>
                                    </dl>
                                    <dl>
                                        <dt>McompNo</dt>
                                        <dd>{boardDetail && boardDetail.mcompNo }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{boardDetail && boardDetail.price }</dd>
                                    </dl>
                                    <dl>
                                        <dt>OrderAmt</dt>
                                        <dd>{boardDetail && boardDetail.orderAmt }</dd>
                                    </dl>
                                    <dl>
                                        <dt>OwnCompNo</dt>
                                        <dd>{boardDetail && boardDetail.ownCompNo }</dd>
                                    </dl>
                                    <dl>
                                        <dt>IsEnd</dt>
                                        <dd>{boardDetail && boardDetail.isEnd }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Worker</dt>
                                        <dd>{boardDetail && boardDetail.worker }</dd>
                                    </dl>
                                    <dl>
                                        <dt>RequestDt</dt>
                                        <dd>{boardDetail && boardDetail.requestDt }</dd>
                                    </dl>
                                    <dl>
                                        <dt>ConfirmDt</dt>
                                        <dd>{boardDetail && boardDetail.confirmDt }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Etc</dt>
                                        <dd>{boardDetail && boardDetail.etc }</dd>
                                    </dl>
                                    <dl>
                                        <dt>IsAutoOrder</dt>
                                        <dd>{boardDetail && boardDetail.isAutoOrder }</dd>
                                    </dl>
                                    <dl>
                                        <dt>IsClose</dt>
                                        <dd>{boardDetail && boardDetail.isClose }</dd>
                                    </dl>
                                    <dl>
                                        <dt>CloseNm</dt>
                                        <dd>{boardDetail && boardDetail.closeNm }</dd>
                                    </dl>
                                    <dl>
                                        <dt>CloseTm</dt>
                                        <dd>{boardDetail && boardDetail.closeTm }</dd>
                                    </dl>
                                    <dl>
                                        <dt>IsAdmit</dt>
                                        <dd>{boardDetail && boardDetail.isAdmit }</dd>
                                    </dl>
                                    <dl>
                                        <dt>AdmitNm</dt>
                                        <dd>{boardDetail && boardDetail.admitNm }</dd>
                                    </dl>
                                    <dl>
                                        <dt>AdmitTm</dt>
                                        <dd>{boardDetail && boardDetail.admitTm }</dd>
                                    </dl>
                                    <dl>
                                        <dt>RegiNm</dt>
                                        <dd>{boardDetail && boardDetail.regiNm }</dd>
                                    </dl>
                                    <dl>
                                        <dt>RegiDt</dt>
                                        <dd>{boardDetail && boardDetail.regiDt }</dd>
                                    </dl>
                                    <dl>
                                        <dt>ModiNm</dt>
                                        <dd>{boardDetail && boardDetail.modiNm }</dd>
                                    </dl>
                                    <dl>
                                        <dt>ModiDt</dt>
                                        <dd>{boardDetail && boardDetail.modiDt }</dd>
                                    </dl>
                                    <dl>
                                        <dt>File1</dt>
                                        <dd>{boardDetail && boardDetail.file1 }</dd>
                                    </dl>
                                    <dl>
                                        <dt>File2</dt>
                                        <dd>{boardDetail && boardDetail.file2 }</dd>
                                    </dl>
                                    <dl>
                                        <dt>File3</dt>
                                        <dd>{boardDetail && boardDetail.file3 }</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="board_btn_area">
                                <div style={{ display: "flex", flexDirection: "row"}}>
                                    <div style={{marginTop: "5px"}}>
                                    </div>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px"}}>
                                    <Link to="/metalOrderService/metalOrders"
                                        className="btn btn_blue_h46 w_100">목록</Link>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px", marginRight: "9%"}}>
                                    <button
                                        onClick={deleteList}
                                        className="btn btn_blue_h46 w_100">삭제
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 게시판 상세보기 --> */}
                        
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EgovNoticeDetail;
