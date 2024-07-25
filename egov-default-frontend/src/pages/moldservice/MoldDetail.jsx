
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
    const mold_no = location.state.mold_no;
    const searchCondition = location.state.searchCondition;

    const condition = true; 

    const [entity, setEntity] = useState("");

    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [boardDetail, setBoardDetail] = useState({});
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const retrieveDetail = () => {
        const retrieveDetailURL = `/molds/${mold_no}`;
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

    function fetchMold(mold_no){
        axios.get(`/molds/${mold_no}`)
        .then(response => {
            setBoardDetail(response.data);
        })
    }

    function deleteList(){
        axios.delete(`/molds/${mold_no}`)
        navigate('/moldService/molds');
    }



    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li><Link to="/moldService/molds">Mold</Link></li>
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
                            <h1 className="tit_1">Mold</h1>
                        </div>

                        {/* <!-- 게시판 상세보기 --> */}
                        <div className="board_view">
                            <div className="board_view_top">
                                <div className="tit">{mold_no}</div>
                                <div className="info">
                                    <dl>
                                        <dt>MoldNo</dt>
                                        <dd>{mold_no}</dd>
                                    </dl>
                                    <dl>
                                        <dt>MoldType</dt>
                                        <dd>{boardDetail && boardDetail.moldType }</dd>
                                    </dl>
                                    <dl>
                                        <dt>ProdNo</dt>
                                        <dd>{boardDetail && boardDetail.prodNo }</dd>
                                    </dl>
                                    <dl>
                                        <dt>ProgNo</dt>
                                        <dd>{boardDetail && boardDetail.progNo }</dd>
                                    </dl>
                                    <dl>
                                        <dt>ProgTypeCode</dt>
                                        <dd>{boardDetail && boardDetail.progTypeCode }</dd>
                                    </dl>
                                    <dl>
                                        <dt>MoldCode</dt>
                                        <dd>{boardDetail && boardDetail.moldCode }</dd>
                                    </dl>
                                    <dl>
                                        <dt>MoldNumber</dt>
                                        <dd>{boardDetail && boardDetail.moldNumber }</dd>
                                    </dl>
                                    <dl>
                                        <dt>MoldNm</dt>
                                        <dd>{boardDetail && boardDetail.moldNm }</dd>
                                    </dl>
                                    <dl>
                                        <dt>MoldStandard</dt>
                                        <dd>{boardDetail && boardDetail.moldStandard }</dd>
                                    </dl>
                                    <dl>
                                        <dt>CurSetMfIdx</dt>
                                        <dd>{boardDetail && boardDetail.curSetMfIdx }</dd>
                                    </dl>
                                    <dl>
                                        <dt>SettingDt</dt>
                                        <dd>{boardDetail && boardDetail.settingDt }</dd>
                                    </dl>
                                    <dl>
                                        <dt>LifeCycle</dt>
                                        <dd>{boardDetail && boardDetail.lifeCycle }</dd>
                                    </dl>
                                    <dl>
                                        <dt>MoldPrice</dt>
                                        <dd>{boardDetail && boardDetail.moldPrice }</dd>
                                    </dl>
                                    <dl>
                                        <dt>FairStock</dt>
                                        <dd>{boardDetail && boardDetail.fairStock }</dd>
                                    </dl>
                                    <dl>
                                        <dt>LimitMin</dt>
                                        <dd>{boardDetail && boardDetail.limitMin }</dd>
                                    </dl>
                                    <dl>
                                        <dt>CurStock</dt>
                                        <dd>{boardDetail && boardDetail.curStock }</dd>
                                    </dl>
                                    <dl>
                                        <dt>IsManage</dt>
                                        <dd>{boardDetail && boardDetail.isManage }</dd>
                                    </dl>
                                    <dl>
                                        <dt>MoldDesign</dt>
                                        <dd>{boardDetail && boardDetail.moldDesign }</dd>
                                    </dl>
                                    <dl>
                                        <dt>MoldDesignCode</dt>
                                        <dd>{boardDetail && boardDetail.moldDesignCode }</dd>
                                    </dl>
                                    <dl>
                                        <dt>MoldPicture</dt>
                                        <dd>{boardDetail && boardDetail.moldPicture }</dd>
                                    </dl>
                                    <dl>
                                        <dt>KeepPlace</dt>
                                        <dd>{boardDetail && boardDetail.keepPlace }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Manage1</dt>
                                        <dd>{boardDetail && boardDetail.manage1 }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Manage2</dt>
                                        <dd>{boardDetail && boardDetail.manage2 }</dd>
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
                                        <dt>CheckStandNum</dt>
                                        <dd>{boardDetail && boardDetail.checkStandNum }</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="board_btn_area">
                                <div style={{ display: "flex", flexDirection: "row"}}>
                                    <div style={{marginTop: "5px"}}>
                                    </div>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px"}}>
                                    <Link to="/moldService/molds"
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
