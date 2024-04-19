"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import css from "./template.module.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Container className={css.container}>
      {/* ảnh Nhat ki va Nhat Ki Thanh Nien Duy Son */}
      <Row className={css.rowOne}>
        <Col className={css.sonhatki} sm lg={4}>
          <Image src="diary.png" rounded width={"150px"} height={"180px"} />
        </Col>
        <Col className={css.coverTitle} sm lg={8}>
          <div className={css.titleNKTN}>
            <h3>NHẬT KÝ THANH NIÊN</h3>
            <h5>Xã Duy Sơn - Huyện Duy Xuyên - Tỉnh Quảng Nam.</h5>
          </div>
        </Col>
      </Row>

      {/* menu */}
      <Row className={css.CustomMenu}>
        <>
          {["xl"].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              className="mb-3"
              style={{ marginBottom: "0px" }}
              bg="dark"
              data-bs-theme="dark"
            >
              <Container fluid>
                <Navbar.Brand href="#">HAVE A SWEET TIME!</Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                  bg="dark"
                  data-bs-theme="dark"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                      style={{ textAlign: "center" }}
                    >
                      NHẬT KÍ THANH NIÊN
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Link href="/" className={css.NavMenuCustom}>
                        Trang Chủ
                      </Link>
                      <Link
                        href="/TNLamTheoLoiBac"
                        className={css.NavMenuCustom}
                      >
                        Thanh Niên Làm Theo Lời Bác
                      </Link>
                      <Link href="/TNTinhNguyen" className={css.NavMenuCustom}>
                        Thanh Niên Tình Nguyện
                      </Link>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      </Row>

      {/* row content */}
      <Row className={css.rowContent}>
        {children}
        {/* hiển thị nội dung của các page ở đây */}
      </Row>

      {/* row footer */}
      <Row className={css.rowFooter}>
        {/* cột đầu tiên social media */}
        <Col className={css.ColMangXaHoi}>
          <div className={css.titleFooter}>
            <b>MẠNG XÃ HỘI</b>
          </div>
          <Row className={css.iconFbYoutube}>
            <div className={css.contentFooter}>
              <Link href="#" className={css.socialFooter1}>
                <Image
                  src="facebook.svg"
                  rounded
                  width={"50px"}
                  height={"50px"}
                ></Image>
              </Link>
              <Link href="#" className={css.socialFooter2}>
                <Image
                  src="youtube.svg"
                  rounded
                  width={"50px"}
                  height={"50px"}
                ></Image>
              </Link>
            </div>
          </Row>
        </Col>
        {/* cột 2 là menu */}
        <Col className={css.ColMenuFooter}>
          <div className={css.titleFooter}>
            <b>MENU</b>
          </div>
          <Row>
            <div className={css.contentMenuFooter}>
              <Link href="/" className={css.menuF}>
                Trang chủ
              </Link>
            </div>
            <div className={css.contentMenuFooter}>
              <Link href="/NKTNLamTheoLoiBac" className={css.menuF}>
                Thanh Niên Làm Theo Lời Bác
              </Link>
            </div>
            <div className={css.contentMenuFooter}>
              <Link href="/NKTNTinhNguyen" className={css.menuF}>
                Thanh Niên Tình Nguyện
              </Link>
            </div>
          </Row>
        </Col>
        {/* cột thông tin liên hệ */}
        <Col className={css.ColContactFooter}>
          <div className={css.titleFooter}>
            <b>THÔNG TIN LIÊN HỆ</b>
          </div>
          <Row>
            <div className={css.contentFooter}>
              <b>SĐT: 070 796 0071</b>
            </div>{" "}
          </Row>

          <Row>
            <div className={css.contentFooter}>
              <b>Email: stshieu@gmail.com</b>
            </div>{" "}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}