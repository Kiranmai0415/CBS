import React, { useState, useEffect } from "react";
import { t } from "i18next";
import { Image, Button, Row, Col, Container, Table } from "react-bootstrap";
import Sidebar from "../../shared/sidebar";
// import HumanResources from "../../../images/human-resources.png";
import Header from "../../shared/header";
import { useTranslation } from "react-i18next";
import logo from "../../images/payrool-white.png";
import up_arrow from "../../images/up-arrow.svg";
import down_arrow from "../../images/down-arrow.svg";
import Forword_Icon from "../../images/forword_icon.svg";
import Backword_Icon from "../../images/backword_icon.svg";
import deletebtn from "../../images/delete_img.svg";
// import bell from "../../images/bell.svg";

// import { Col, Row } from "react-bootstrap";
import pencil from "../../images/pencil_img.svg";
import { useSelector } from "react-redux";
import Adduser from "../../shared/modal";
import Lodash from "lodash";
import { useDispatch } from "react-redux";
import { AuthTypes } from "../../redux/action_types/auth_types";

const Admin = () => {
  const dispatch = useDispatch();
  const admindataredux = useSelector((state) => state.Admin.adminList);

  const list = admindataredux;
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageNumbersPerPage, setPageNumbersPerPage] = useState(5);

  useEffect(() => {
    setPosts(list);
  }, [list]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (each) => setCurrentPage(each);

  var pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const indexOfLastPageNumber = currentPageNumber * pageNumbersPerPage;
  const indexOfFirstPageNumber = indexOfLastPageNumber - pageNumbersPerPage;
  const currentPageNumbers = pageNumbers.slice(
    indexOfFirstPageNumber,
    indexOfLastPageNumber
  );

  const pageSettingRight = () => {
    if (pageNumbers.length > indexOfLastPageNumber) {
      setCurrentPageNumber(currentPageNumber + 1);
    }
  };
  const pageSettingLeft = () => {
    if (currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber - 1);
    }
  };
  const handleAdd = () => {};

  const editBtn = () => {};

  const deleteBtn = (value) => {
    let newarr = list.filter((each) => each.id != value.id);

    // list = newarr
    console.log(newarr);
    console.log("hello onclick", value);
    dispatch({
      type: AuthTypes.REQUEST_DELETE,
      data: newarr,
    });
  };
  const onUpArrow = () => {
    const sortedListUp = Lodash.orderBy(posts, ["name"], ["asc"]);
    dispatch({
      type: "sortedListUp",
      payload: sortedListUp,
    });
    console.log("uparrow", sortedListUp);
  };
  const onDownArrow = () => {
    const sortedListDown = Lodash.orderBy(posts, ["name"], ["desc"]);
    dispatch({
      type: "sortedListDown",
      payload: sortedListDown,
    });
    console.log("onDownArrow", sortedListDown);
  };

  return (
    <>
      <div className="flx">
        <div className="posAbs mt1 col-12">
          <Header />
        </div>
        <div className="posRel">
          <Sidebar />
        </div>
        <div className="  ml4 mt8  header ">
          <Row>
            <Col xs={2}>
              <div className="flx ">
                <img
                  src={logo}
                  alt="icon"
                  className="logo-bg p0-5 ml1 p15 mt2-5"
                />
                <h2 className="ml2 mt3 header-name">{t("ADMIN")}</h2>
              </div>
            </Col>
            <Col xs={4}></Col>
            <Col xs={4}></Col>
            <Col xs={2}>
              <Adduser />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="container mt3">
                <Table
                  className="tac container border1 fntGrey fntMd"
                  striped
                  hover
                >
                  <thead className="head fntXLg">
                    <tr>
                      <th className="posRel">
                        Emp ID{" "}
                        <img src={up_arrow} alt="up_arrow" className="posAbs" />
                        <img
                          src={down_arrow}
                          alt="down_arrow"
                          className="posAbs bottom1-5"
                        />
                      </th>
                      <th className="posRel">
                        Name{" "}
                        <img
                          src={up_arrow}
                          alt="up_arrow"
                          className="posAbs"
                          onClick={onUpArrow}
                        />{" "}
                        <img
                          src={down_arrow}
                          alt="down_arrow"
                          className="posAbs bottom1-5"
                          onClick={onDownArrow}
                        />
                      </th>
                      <th className="posRel">
                        Email{" "}
                        <img src={up_arrow} alt="up_arrow" className="posAbs" />{" "}
                        <img
                          src={down_arrow}
                          alt="down_arrow"
                          className="posAbs bottom1-5"
                        />
                      </th>
                      <th className="posRel">
                        Designation{" "}
                        <img src={up_arrow} alt="up_arrow" className="posAbs" />{" "}
                        <img
                          src={down_arrow}
                          alt="down_arrow"
                          className="posAbs bottom1-5"
                        />
                      </th>
                      <th className="posRel">
                        Reporting Manager{" "}
                        <img src={up_arrow} alt="up_arrow" className="posAbs" />{" "}
                        <img
                          src={down_arrow}
                          alt="down_arrow"
                          className="posAbs bottom1-5"
                        />
                      </th>
                      <th>Actions </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPosts.length > 0 &&
                      currentPosts.map((each, index) => {
                        return (
                          <tr key={index}>
                            <td>{each.id}</td>
                            <td>{each.name}</td>
                            <td>{each.email}</td>
                            <td>{each.designation}</td>
                            <td>{each.reportingManager}</td>
                            <td>
                              <img  src={pencil} alt="img" /> &nbsp;
                              <img className="ml2" src={deletebtn} alt="img" />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>

          <Row style={{ float: "right", padding: "10px" }}>
            <Col>
              <div>
                <button
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "0px",
                    margin: "5px",
                    color: "blue",
                  }}
                  onClick={pageSettingLeft}
                >
                  <img src={Forword_Icon} alt="Forword_Icon" />
                </button>
                {currentPageNumbers &&
                  currentPageNumbers.map((each) => {
                    return (
                      <button
                        key={each}
                        onClick={() => paginate(each)}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          border: "0px",
                          margin: "5px",
                          color: "blue",
                        }}
                      >
                        {each}
                      </button>
                    );
                  })}
                <button
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "0px",
                    margin: "5px",
                    color: "blue",
                  }}
                  onClick={pageSettingRight}
                >
                  <img src={Backword_Icon} alt="Backword_Icon" />
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Admin;
