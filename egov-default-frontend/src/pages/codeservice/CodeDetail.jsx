
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
    const id = location.state.id;
    const searchCondition = location.state.searchCondition;

    const condition = true; 

    const [entity, setEntity] = useState("");

    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [boardDetail, setBoardDetail] = useState({});
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const retrieveDetail = () => {
        const retrieveDetailURL = `/codes/${id}`;
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

    function fetchCode(id){
        axios.get(`/codes/${id}`)
        .then(response => {
            setBoardDetail(response.data);
        })
    }

    function deleteList(){
        axios.delete(`/codes/${id}`)
        navigate('/codeService/codes');
    }



    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li><Link to="/codeService/codes">Code</Link></li>
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
                            <h1 className="tit_1">Code</h1>
                        </div>

                        {/* <!-- 게시판 상세보기 --> */}
                        <div className="board_view">
                            <div className="board_view_top">
                                <div className="tit">{id}</div>
                                <div className="info">
                                    <dl>
                                        <dt>Id</dt>
                                        <dd>{id}</dd>
                                    </dl>
                                    <dl>
                                        <dt>ItemCode</dt>
                                        <dd>{boardDetail && boardDetail.itemCode }</dd>
                                    </dl>
                                    <dl>
                                        <dt>CodeNo</dt>
                                        <dd>{boardDetail && boardDetail.codeNo }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Code</dt>
                                        <dd>{boardDetail && boardDetail.code }</dd>
                                    </dl>
                                    <dl>
                                        <dt>CodeName</dt>
                                        <dd>{boardDetail && boardDetail.codeName }</dd>
                                    </dl>
                                    <dl>
                                        <dt>IsSys</dt>
                                        <dd>{boardDetail && boardDetail.isSys }</dd>
                                    </dl>
                                    <dl>
                                        <dt>IsUse</dt>
                                        <dd>{boardDetail && boardDetail.isUse }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Etc</dt>
                                        <dd>{boardDetail && boardDetail.etc }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Etc1</dt>
                                        <dd>{boardDetail && boardDetail.etc1 }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Etc2</dt>
                                        <dd>{boardDetail && boardDetail.etc2 }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Etc3</dt>
                                        <dd>{boardDetail && boardDetail.etc3 }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Etc4</dt>
                                        <dd>{boardDetail && boardDetail.etc4 }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Etc5</dt>
                                        <dd>{boardDetail && boardDetail.etc5 }</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="board_btn_area">
                                <div style={{ display: "flex", flexDirection: "row"}}>
                                    <div style={{marginTop: "5px"}}>
                                    </div>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px"}}>
                                    <Link to="/codeService/codes"
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
