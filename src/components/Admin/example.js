import { React, useState } from "react";
import Table from "@mui/material/Table";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { useTranslation } from "react-i18next";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { Grid, TextField } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../../shared/button";
import Header from "../../../src/shared/header";
import Checkbox from "../../shared/checkbox";
import AddModal from "../../shared/addModal";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SortArrows } from "../../images/sort_arrows.svg";

function Customer() {
  const navigate = useNavigate();

  const _ = require("lodash");
  let user;
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [search, setSearch] = useState(false);
  let dataredux = useSelector((state) => state.Customer.customerdataList);
  let users = dataredux;
  console.log("user", users);

  const [searchTerm, setSearchTerm] = useState({
    searchValue: "",
  });

  const [result, setResult] = useState({
    sortName: "",
    sortOrder: "asc",
  });

  const sortFn = (name, order) => {
    setResult({ ...result, sortName: name, sortOrder: order });
  };

  const list = _.orderBy(users, [result.sortName], [result.sortOrder]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [paganationliststate, setpaganationliststate] = useState(
    Math.ceil(users.length / 5)
  );
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  function myfun(event, newPage) {
    setPage(newPage);
    console.log("hi", newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    console.log(event.target.value);
    const paganationList = Math.ceil(users.length / event.target.value);
    console.log("page", paganationList);
    setpaganationliststate(paganationList);
  };

  const searchInputChange = (e) => {
    setSearch(true);
    const data = e.target.value.toLowerCase();
    setSearchTerm(data);
    user = users.filter((each) =>
      each.Customername.toLowerCase().includes(searchTerm)
    );
    console.log("data", user);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={2.6}>
          <Box>
            <div className="auth-side-container">
              <div className="ml5">
                <h1 className="fntBlack  ">{t("CUSTOMERS")}</h1>
                <div>
                  <AddModal
                    onClick={handleOpen}
                    text={"ADD CUSTOMER"}
                    className=" primary-btn mb1 fntLg ml5"
                  />
                  <div>
                    <TextField
                      type="text"
                      name={"Customername"}
                      value={searchTerm.searchValue}
                      sx={{ boxShadow: 1 }}
                      className={`mb2 srch search-input`}
                      placeholder={t("Enter Search")}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => searchInputChange(e)}
                    />
                  </div>
                  <div>
                    <Box
                      className=" tac tal mt0 fntXSm service_status fntGrey letter-spacing-sm "
                      sx={{ boxShadow: 1 }}
                    >
                      <div>
                        <h4>{t("SERVICE_STATUS")}</h4>
                      </div>
                      <div className="mb1 tal mt0 ">
                        <Checkbox className="align-start posFix" />
                        <span className="fntSm fntBlack ">
                          {t("SERVICE_REQUESTED")}(14)
                        </span>

                        <Checkbox className="align-start posFix" />
                        <span className="fntSm fntBlack ">
                          {t("SERVICE_SCHEDULED")}(14)
                        </span>

                        <Checkbox className="align-start posFix " />
                        <span className="fntSm fntBlack">
                          {t("NO_ISSUES")}(99)
                        </span>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={9} className="mt8-5">
          <Box className="mt2">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow className="row">
                    <TableCell>
                      <b>{t("CUSTOMER_NAME")}</b>
                      {result.sortName === "Customername" &&
                      result.sortOrder === "desc" ? (
                        <SortArrows
                          onClick={() => {
                            sortFn("Customername", "asc");
                          }}
                          className="posAbs"
                        />
                      ) : (
                        <SortArrows
                          onClick={() => {
                            sortFn("Customername", "desc");
                          }}
                          className="posAbs"
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <b>{t("ADDRESS")}</b>{" "}
                      {result.sortName === "Address" &&
                      result.sortOrder === "desc" ? (
                        <SortArrows
                          onClick={() => {
                            sortFn("Address", "asc");
                          }}
                          className="posAbs"
                        />
                      ) : (
                        <SortArrows
                          onClick={() => {
                            sortFn("Address", "desc");
                          }}
                          className="posAbs"
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <b>{t("STATE/ZIP")}</b>
                      {result.sortName === "State" &&
                      result.sortOrder === "desc" ? (
                        <SortArrows
                          onClick={() => {
                            sortFn("State", "asc");
                          }}
                          className="posAbs"
                        />
                      ) : (
                        <SortArrows
                          onClick={() => {
                            sortFn("State", "desc");
                          }}
                          className="posAbs"
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <b>{t("APNNUMBER")}</b>{" "}
                      {result.sortName === "APNNumber" &&
                      result.sortOrder === "desc" ? (
                        <SortArrows
                          onClick={() => {
                            sortFn("APNNumber", "asc");
                          }}
                          className="posAbs"
                        />
                      ) : (
                        <SortArrows
                          onClick={() => {
                            sortFn("APNNumber", "desc");
                          }}
                          className="posAbs"
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <b>{t("SERVICE")}</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!search &&
                    list
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            className="bold"
                            component="th"
                            scope="row"
                            onClick={() => navigate(`/details/${index}`)}
                          >
                            {row.Customername}
                          </TableCell>
                          <TableCell
                            className="bold"
                            onClick={() => navigate(`/details/${index}`)}
                          >
                            {row.Address}
                          </TableCell>
                          <TableCell
                            className="bold"
                            onClick={() => navigate(`/details/${index}`)}
                          >
                            {row.State}
                          </TableCell>
                          <TableCell
                            className="bold"
                            onClick={() => navigate(`/details/${index}`)}
                          >
                            {row.APNNumber}
                          </TableCell>
                          <TableCell>
                            {row.servicestates === "Requested" && (
                              <Button
                                text="Requested"
                                color="error"
                                className="btncolor btnstyle1"
                              />
                            )}

                            {row.servicestates === "No Issue" && (
                              <Button
                                text="No Issuse"
                                disabled
                                className="btncolor btnstyle2"
                              />
                            )}
                            {row.servicestates === "Scheduled" && (
                              <Button
                                text="Scheduled"
                                className="btncolor btnstyle3"
                              />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}

                  {search &&
                    dataredux &&
                    dataredux
                      .filter((each) => {
                        if (searchTerm === "") {
                          return each;
                        } else if (
                          each.Customername.toLowerCase().includes(searchTerm)
                        ) {
                          return each;
                        }
                      })
                      .map((row, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {row.Customername}
                          </TableCell>
                          <TableCell>{row.Address}</TableCell>
                          <TableCell>{row.State}</TableCell>
                          <TableCell>{row.APNNumber}</TableCell>
                          <TableCell>
                            {row.servicestates === "Requested" && (
                              <Button
                                text="Requested"
                                className="btncolor btnstyle1"
                              />
                            )}

                            {row.servicestates === "No Issue" && (
                              <Button
                                text="No Issuse"
                                disabled
                                className="btncolor btnstyle2"
                              />
                            )}
                            {row.servicestates === "Scheduled" && (
                              <Button
                                text="Scheduled"
                                className="btncolor btnstyle3"
                              />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20, 25]}
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={<span>Rows:</span>}
            labelDisplayedRows={() => {
              return (
                <Pagination
                  count={paganationliststate - 1}
                  variant="outlined"
                  shape="rounded"
                  onChange={myfun}
                  color="primary"
                />
              );
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Customer;
