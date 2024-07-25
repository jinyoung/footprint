
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import * as EgovNet from 'api/egovFetch'
import { NOTICE_BBS_ID } from 'config'
import URL from 'constants/url'

import EgovPaging from 'components/EgovPaging'
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavInform'

import { itemIdxByPage } from 'utils/calc'

function EgovNoticeList(props) {

    const location = useLocation();
	const cndRef = useRef();
    const wrdRef = useRef();
    const bbsId = location.state?.bbsId || NOTICE_BBS_ID; 

	// eslint-disable-next-line no-unused-vars
    const [searchCondition, setSearchCondition] = useState(location.state?.searchCondition || { bbsId: bbsId, pageIndex: 1, searchCnd: '0', searchWrd: '' });// 기존 조회에서 접근 했을 시 || 신규로 접근 했을 시
    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [paginationInfo, setPaginationInfo] = useState({});

    const [listTag, setListTag] = useState([]);

    const retrieveList = useCallback((searchCondition) => {
        console.groupCollapsed("EgovNoticeList.retrieveList()");

        const retrieveListURL = '/metalOrders';
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            }
        }

        EgovNet.requestFetch(retrieveListURL,
            requestOptions,
            (resp) => {
                let mutListTag = [];
                for(let i = 0; i< resp.length; i++){
                    if(resp.length == 0) mutListTag =[];
                    mutListTag.push(
                        <Link
                            to={{pathname: "/metalOrder/MetalOrderDetail"}}
                            state={{
                                morderNo: resp[i].morderNo,
                                searchCondition: searchCondition}}                            
                            className="list_item">
                            <div>{resp[i]morderNo}</div>
                            <div>{resp[i].orderDt}</div>
                            <div>{resp[i].accountMon}</div>
                            <div>{resp[i].kangjong}</div>
                            <div>{resp[i].kongjung}</div>
                            <div>{resp[i].dia}</div>
                            <div>{resp[i].mcompNo}</div>
                            <div>{resp[i].price}</div>
                            <div>{resp[i].orderAmt}</div>
                            <div>{resp[i].ownCompNo}</div>
                            <div>{resp[i].isEnd}</div>
                            <div>{resp[i].worker}</div>
                            <div>{resp[i].requestDt}</div>
                            <div>{resp[i].confirmDt}</div>
                            <div>{resp[i].etc}</div>
                            <div>{resp[i].isAutoOrder}</div>
                            <div>{resp[i].isClose}</div>
                            <div>{resp[i].closeNm}</div>
                            <div>{resp[i].closeTm}</div>
                            <div>{resp[i].isAdmit}</div>
                            <div>{resp[i].admitNm}</div>
                            <div>{resp[i].admitTm}</div>
                            <div>{resp[i].regiNm}</div>
                            <div>{resp[i].regiDt}</div>
                            <div>{resp[i].modiNm}</div>
                            <div>{resp[i].modiDt}</div>
                            <div>{resp[i].file1}</div>
                            <div>{resp[i].file2}</div>
                            <div>{resp[i].file3}</div>
                       </Link>
                    );
                };
                setListTag(mutListTag);
            },
            function (resp) {
                console.log("err response : ", resp);
            }
        );
        console.groupEnd("EgovNoticeList.retrieveList()");
    },[]);


    useEffect(() => {
        retrieveList(searchCondition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.groupEnd("EgovNoticeList");
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li>MetalOrderService</li>
                        <li>MetalOrder</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents NOTICE_LIST" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">MetalOrderService</h1>
                        </div>

                        <h2 className="tit_2">MetalOrder</h2>

                        {/* <!-- 검색조건 --> */}
                        <div className="condition">
                            <ul>
                                <li className="third_1 L">
                                    <label className="f_select" htmlFor="sel1">
                                        <select id="sel1" title="조건" defaultValue={searchCondition.searchCnd} ref={cndRef}
                                            onChange={e => {
                                                cndRef.current.value = e.target.value; 
                                            }}
                                        >
                                            <option value="0">제목</option>
                                            <option value="1">내용</option>
                                            <option value="2">작성자</option>
                                        </select>
                                    </label>
                                </li>
                                <li className="third_2 R">
                                    <span className="f_search w_500">
                                        <input type="text" name="" defaultValue={searchCondition.searchWrd} placeholder="" ref={wrdRef}
                                            onChange={e => {
                                                wrdRef.current.value = e.target.value;
                                            }}
                                        />
                                        <button type="button"
                                            onClick={() => {
                                                retrieveList({ ...searchCondition, pageIndex: 1, searchCnd: cndRef.current.value, searchWrd: wrdRef.current.value });
                                            }}>조회</button>
                                    </span>
                                </li>
                                    <li>
                                        <Link to="/metalOrderService/MetalOrderEdit" state={{bbsId: bbsId}} className="btn btn_blue_h46 pd35">등록</Link>
                                    </li>
                            </ul>
                        </div>
                        {/* <!--// 검색조건 --> */}

                        {/* <!-- 게시판목록 --> */}
                        <div className="board_list BRD002">
                            <div className="head">

                                <span>MorderNo</span>
                                <span>OrderDt</span>
                                <span>AccountMon</span>
                                <span>Kangjong</span>
                                <span>Kongjung</span>
                                <span>Dia</span>
                                <span>McompNo</span>
                                <span>Price</span>
                                <span>OrderAmt</span>
                                <span>OwnCompNo</span>
                                <span>IsEnd</span>
                                <span>Worker</span>
                                <span>RequestDt</span>
                                <span>ConfirmDt</span>
                                <span>Etc</span>
                                <span>IsAutoOrder</span>
                                <span>IsClose</span>
                                <span>CloseNm</span>
                                <span>CloseTm</span>
                                <span>IsAdmit</span>
                                <span>AdmitNm</span>
                                <span>AdmitTm</span>
                                <span>RegiNm</span>
                                <span>RegiDt</span>
                                <span>ModiNm</span>
                                <span>ModiDt</span>
                                <span>File1</span>
                                <span>File2</span>
                                <span>File3</span>
                            
                            </div>
                            <div className="result">
                                {listTag}
                            </div>
                        </div>
                        {/* <!--// 게시판목록 --> */}

                        <div className="board_bot">
                            {/* <!-- Paging --> */}
                            <EgovPaging pagination={paginationInfo} moveToPage={passedPage => {
                                retrieveList({ ...searchCondition, pageIndex: passedPage, searchCnd: cndRef.current.value, searchWrd: wrdRef.current.value })
                            }} />
                            {/* <!--/ Paging --> */}
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EgovNoticeList;


