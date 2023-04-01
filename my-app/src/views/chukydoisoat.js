import React from "react";
import "./chukydoisoat.css";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "./menu";
import { FiEdit } from "react-icons/fi";
// import { toast } from "react-toastify";

const ChuKyDSoat = () => {
  // const notify = () => toast.success("Lưu cài đặt chu kỳ đối soát thành công");
  return (
      <>

          <div className="kbg-container">
             
              <div>
                  <h3>Cài đặt hệ thống</h3>
              </div>

              <div className="kbg-nd">
                  <div>
                      <h5>Cài đặt chu kỳ đối soát</h5>
                  </div>

                  <div className="input-radio">
                      <input type="radio" name="radio"></input>
                      <label className="container">Đối soát theo quý</label>

                      <div className="nd-con">
                          <div className="nd-1">
                              <h5>Quý 1: </h5>
                              <a className="a-radio"> 01/06 - 30/07</a>
                          </div>
                          <div className="nd-1">
                              <h5>Quý 2: </h5>
                              <a className="a-radio"> 01/06 - 30/07</a>
                          </div>
                          <div className="nd-1">
                              <h5>Quý 3: </h5>
                              <a className="a-radio"> 01/06 - 30/07</a>
                          </div>
                          <div className="nd-1">
                              <h5>Quý 4: </h5>
                              <a className="a-radio"> 01/06 - 30/07</a>
                          </div>
                      </div>

                  </div>

                  <div className="input-radio">
                      <input type="radio" name="radio"></input>
                      <label className="container">Đối soát theo tháng</label>

                      <div className="nd-1">
                          <div className="kbg-option">
                              <a className="kbg-a">Ngày bắt đầu: </a>
                              <input className="kbg-date" type="date" name="date"></input>
                          </div>

                          <div className="kbg-option">
                              <a className="kbg-a-2">Ngày kết thúc: </a>
                              <input className="kbg-date" type="date" name="date"></input>
                          </div>
                      </div>
                  </div>
              </div>

              <div>
                  <div className="btn-infor">
                      <input className="btn-2" type="button" value="Lưu"  />
                  </div>
              </div>
          </div>

          <Menu/>
      </>
  )
}

export default ChuKyDSoat;
