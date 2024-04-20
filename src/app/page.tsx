"use client";

import Template from "@/components/template/page";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import css from "./page.module.css";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

export default function Home() {
  return (
    <>
      <div>
        <Template>
          <>
            {/* hình ảnh */}
            <Carousel slide={false} className={css.CustomCarousel}>
              <Carousel.Item>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <Image
                  src="doan1.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="doan2.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="doan3.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <Image
                  src="doan4.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="doan5.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="thon1.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <Image
                  src="thon2.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="thon3.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="thon4.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <Image
                  src="thon5.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="thon6.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="thon8.png"
                  className={css.imageCarousel}
                  width={"1200px"}
                  height={"400px"}
                  rounded
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            {/* row content */}
            <Row className={css.contentAccordion}>
              <Accordion
                className={css.AccordionCustom}
                defaultActiveKey="0"
                // alwaysOpen
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className={css.headerAccordion}>
                      <b>Giới Thiệu Hệ Thống</b>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>... Giới thiệu về website</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className={css.headerAccordion}>
                      <b>Tại sao cần phải viết Nhật Ký?</b>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>Chào Cậu!</div>
                    <div className={css.contentAccordion}>
                      Việc viết nhật ký không chỉ là một thói quen tốt giúp
                      chúng ta ghi lại cuộc sống hàng ngày, mà còn là cách để tự
                      khám phá và phản chiếu về bản thân. Qua những trang nhật
                      ký, chúng ta có thể nhìn lại quá khứ, hiểu rõ hơn về những
                      suy nghĩ và cảm xúc của mình, từ đó học hỏi và phát triển.
                      Nhật ký cũng là người bạn tâm tình, nơi chúng ta có thể
                      trút bầu tâm sự mà không sợ bị đánh giá hay phán xét. Hơn
                      nữa, việc viết nhật ký còn giúp rèn luyện khả năng viết
                      lách, cải thiện ngôn từ và cách diễn đạt. Cuối cùng, nhật
                      ký là kho báu ký ức, một nguồn tài liệu quý giá cho chính
                      chúng ta và thậm chí là cho thế hệ sau.
                    </div>
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className={css.headerAccordion}>
                      <b>Tại sao phải viết nhật kí điện tử ở đây?</b>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>Hi Cậu!</div>
                    <div>
                      Việc viết nhật ký điện tử không chỉ là một phương tiện để
                      ghi chép lại những suy nghĩ và trải nghiệm hàng ngày, mà
                      còn là cách để thế hệ trẻ kết nối, chia sẻ và học hỏi lẫn
                      nhau.
                      <br />
                      Tại sổ Nhật Kí Thanh Niên Điện Tử này, thì chủ đề đã được
                      ban tổ chức gói gọn lại. Với mong muốn rằng, các bạn thanh
                      niên khi viết nhật kí chia sẻ lên đây sẽ tập trung vào chủ
                      đề là các bài học hay về tâm gương học tập và làm theo tư
                      tưởng, đạo đức, phong cách Hồ Chí Minh. Và qua việc viết
                      nhật ký, thanh niên có thể suy ngẫm và phản ánh về những
                      bài học quý báu từ các tâm gương sáng, đồng thời áp dụng
                      chúng vào cuộc sống hiện đại. Nhật ký điện tử cũng giúp
                      bảo tồn di sản tư tưởng trong môi trường số hóa, giúp lan
                      tỏa những giá trị đó đến với cộng đồng rộng lớn hơn, qua
                      đó tạo điều kiện cho việc học hỏi và trao đổi giữa các thế
                      hệ. Nó là cầu nối giữa quá khứ và tương lai, giữa truyền
                      thống và hiện đại, giữa cá nhân và cộng đồng. Việc viết
                      nhật ký điện tử không chỉ giúp thanh niên phát triển kỹ
                      năng viết lách và tư duy phản biện, mà còn góp phần hình
                      thành nhân cách, rèn luyện ý chí và bồi đắp tâm hồn. Trong
                      thời đại thông tin bùng nổ như hiện nay, nhật ký điện tử
                      còn là phương tiện để thanh niên thể hiện sự quan tâm đến
                      các vấn đề xã hội, tham gia vào các cuộc thảo luận công
                      cộng, và phản ánh về những thách thức mà thế giới đang đối
                      mặt. Qua đó, nhật ký không chỉ là khoảng không gian cá
                      nhân, mà còn là diễn đàn mở, nơi mọi người có thể chia sẻ
                      và học hỏi lẫn nhau.
                      <br /> Như vậy, việc viết nhật ký điện tử không chỉ là
                      hoạt động cá nhân mà còn là hành động có ý nghĩa cộng
                      đồng, góp phần vào việc xây dựng và phát triển xã hội. Đó
                      là lý do tại sao việc viết nhật ký điện tử là quan trọng
                      và cần thiết, đặc biệt là trong bối cảnh hiện đại, nơi mà
                      việc gìn giữ và phát huy giá trị văn hóa, lịch sử là hết
                      sức cấp thiết.
                    </div>
                    {/* <div>
                   Chúng ta còn trẻ, trong độ tuổi đầy hoài bão và khát vọng cống
                  hiến, khát vọng trưởng thành, nhật ký điện tử này sẽ là hồi ký
                  để sau này chúng ta có thể nhìn lại, chúng ta sẽ thấy được bản
                  thân mình đã rèn luyện thế nào, đã cống hiến ra sao. Một giờ
                  đến một buổi chia sẻ câu chuyện hay của mình nhưng là mãi mãi
                  về sau cho việc chia sẻ, lan tỏa giá trị sống đẹp. Các bạn
                  đồng trang lứa, các em nhỏ và anh chị lớn sẽ có thêm động lực
                  để sống đẹp, sống có ích, sống đầy khát khao đúng tinh thần
                  của thanh niên thế hệ Hồ Chí Minh.
                 </div> */}
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <div className={css.headerAccordion}>
                      <b> Làm sao để có thể chia sẻ nhật kí lên đây?</b>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Bước 1: Bạn hãy chọn các chủ đề dưới đây để viết Nhật Kí.
                    <br />
                    1.
                    <br />
                    2.
                    <br />
                    3.
                    <br />
                    Bước 2: Quay lại đây và click vào link dưới đây để có thể
                    nộp bài về Ban Tổ Chức.
                    <Link href="#">Click vào đây.</Link>
                    <br />
                    Bước 3: Ban tổ chức sẽ xác nhận hoặc feedback bài viết của
                    bạn trong 24h trước khi bài viết được đăng lên trang web này
                    để chia sẻ ra cộng đồng.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </>
        </Template>
      </div>
    </>
  );
}
