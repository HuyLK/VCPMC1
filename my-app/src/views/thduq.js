import React from "react";
import './thduq.css';
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";

import { SlCloudUpload } from "react-icons/sl";
import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

const ThemHDUQ = () => {
    return (
        <>

            <div className="kbg-container">
               
            <div className="dropdown">
          <div className="dropbtn">
            <a className="a-top">Tiếng Việt</a>
            <img src={vn} className="logo2" />
          </div>
          <div className="dropdown-content">
            <div className="drop-title">
              <a className="a-top">Tiếng Việt</a>
              <img src={vn} className="vn" />
            </div>
            <div className="drop-title">
              <a className="a-top">English</a>
              <img src={eng} className="eng" />
            </div>
          </div>
        </div>
               
                <div className="h3">
                    <h3>Thêm hợp đồng ủy quyền mới</h3>
                </div>

                <div className="full-container">
                    <div className="box-container">
                        <div className="box-1">
                            <div className="lb-1">
                                <label className="lb-1">Số hợp đồng: </label>
                                <input className="input-z" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label>Tên hợp đồng: </label>
                                <input className="input-z" type="text"></input>
                            </div>


                            <div className="lb-1">
                                <label className="lb-1">Ngày hiệu lực: </label>
                                <input className="input-date-z" type="date"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Ngày hết hạn: </label>
                                <input className="input-date-z" type="date"></input>
                            </div>
                        </div>

                        <div className="box-2">
                            <div>
                                <label>Đính kèm tệp:</label>
                            </div>

                            <div className="box-file-2">
                                <button className="box-2-btn"> <SlCloudUpload className="box-2-icon"></SlCloudUpload> Tải lên</button>
                            </div>
                        </div>

                        <div className="box-3">
                            <div className="box-file-1">
                                <label className="box-label"><RiErrorWarningLine className="box-2-icon-3"></RiErrorWarningLine>Mức nhuận bút</label>
                                <label className="box-label-2">Quyền tác giả:</label>
                                <label className="box-label-3">Quyền liên quan:</label>
                                <label className="box-2-label">Quyền của người biểu diễn:</label>
                                <label className="box-2-label">Quyền của nhà sản xuất:</label>
                                <label className="box-2-label">(Bản ghi/video)</label>
                            </div>

                            <div className="box-file-3">
                                <br></br>
                                <label className="box-2-label">0%</label>
                                <br></br>

                                <div>
                                    <br></br>
                                    <label className="box-2-label">50%</label>
                                </div>

                                <div>
                                    <label className="box-2-label">50%</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <hr />
                    </div>

                    <div className="box-container-3">
                        <div className="box-4">
                            <div className="lb-1">
                                <label className="lb-1">Thông tin pháp nhân ủy quyền</label>
                            </div>
                        </div>
                    </div>

                    <div className="box-container-2">
                        <div className="box-4">
                            <div className="lb-1">
                                <label className="lb-1">Pháp nhân ủy quyền: </label>
                                {/* <input className="radio" type="radio"></input>Cá nhân
                                <input className="radio" type="radio"></input>Tổ chức */}
                            </div>

                            <div className="lb-1">
                                <label>Tên người ủy quyền: </label>
                                <input className="input-7" type="text"></input>
                            </div>


                            <div className="lb-1">
                                <label className="lb-1">Ngày sinh: </label>
                                <input className="input-date-3" type="date"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Giới tính: </label>
                                {/* <input className="radio" type="radio"></input>Nam
                                <input className="radio" type="radio"></input>Nữ */}
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Quốc tịch: </label>
                                <select className="kbg-slt-2">
                                    <option className="option-2">Việt Nam</option>
                                </select>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Số điện thoại: </label>
                                <input className="input-7" type="text"></input>
                            </div>
                        </div>

                        <div className="box-5">
                            <div className="lb-1">
                                <label className="lb-1">CMND/CCCD: </label>
                                <input className="input-2" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label>Ngày cấp: </label>
                                <input className="input-date-4" type="date"></input>
                            </div>


                            <div className="lb-1">
                                <label className="lb-1">Nơi cấp: </label>
                                <input className="input-2" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Mã số thuế: </label>
                                <input className="input-2" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Nơi cư trú: </label>
                                <input className="input-4" type="text"></input>
                            </div>
                        </div>

                        <div className="box-6">
                            <div className="lb-1">
                                <label className="lb-1">Email: </label>
                                <input className="input-2" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label>Tên đăng nhập: </label>
                                <input className="input-2" type="text"></input>
                            </div>


                            <div className="lb-1">
                                <label className="lb-1">Mật khẩu: </label>
                                <input className="input-2" type="password"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Số tài khoản: </label>
                                <input className="input-2" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Ngân hàng: </label>
                                <input className="input-2" type="text"></input>
                            </div>
                        </div>

                    </div>
                    <div className="btn-box">
                <div className="btn-infor">
                    <input className="btn-1" type="button" value="Hủy" />
                    <input className="btn-2" type="button" value="Tạo" />
                </div>
            </div>
                </div>
            </div>

           
        </>
    )
}

export default ThemHDUQ;