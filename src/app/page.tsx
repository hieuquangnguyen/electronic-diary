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
                  <Accordion.Body>
                    {" "}
                    <div className={css.contentAccordion}>
                      <b>Nhật Kí Điện Tử</b> là một nền tảng đoàn xã trực tuyến,
                      nơi mà mọi người có thể ghi chép, chia sẻ và tương tác với
                      những kiến thức, thông tin, và trải nghiệm cá nhân của các
                      bạn. Trang web này được thiết kế ra với mục đích tạo ra
                      một không gian mở, thân thiện và sáng tạo cho cộng đồng,
                      nơi mà mỗi cá nhân có thể tự do diễn đạt ý kiến,và kết nối
                      với nhau qua việc chia sẻ câu chuyện của mình.
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp; Nhật Kí Điện Tử có giao diện thân
                      thiện, dễ sử dụng và thân thiện với người dùng. Trang web
                      được cấu trúc rõ ràng với các phần như Trang chủ, Nhật Kí
                      Thanh Niên Làm Theo Lời Bác, Nhật Kí Thanh Niên Tình
                      Nguyện. Nội dung chính của trang web bao gồm các bài viết,
                      nhật ký cá nhân, hình ảnh. Mục tiêu của Nhật Kí Điện Tử là
                      tạo ra một cộng đồng trực tuyến năng động, mang lại giá
                      trị thông tin và tương tác cho mọi thành viên.
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;Trang web cung cấp 2 chức năng hữu
                      ích như Tìm kiếm các bài nhật kí thông qua tiêu đề, và
                      chức năng chia sẽ bài viết nhật kí lên Facebook hay chia
                      sẻ đi bất cứ nơi nào bạn muốn.
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp; Sử dụng Nhật Kí Điện Tử mang lại
                      nhiều lợi ích cho các bạn: <br />
                      <li>
                        1. Đầu tiên, các bạn có thể chia sẻ kiến thức, kinh
                        nghiệm và cảm xúc của mình với mọi người trên mạng.
                      </li>
                      <li>
                        2. Thứ hai, trang web cung cấp một không gian cho sự
                        sáng tạo và tự do diễn đạt ý kiến của bản thân.
                      </li>
                      <li>
                        3. Cuối cùng, việc tham gia vào cộng đồng trực tuyến
                        giúp mở rộng mạng lưới quan hệ và học hỏi từ những người
                        khác.
                      </li>
                      &nbsp;&nbsp;&nbsp;&nbsp;<b>Nhật Kí Điện Tử</b> là một công
                      cụ quan trọng trong việc ghi chép và chia sẻ thông tin,
                      kiến thức của mọi người. Việc tham gia vào trang web này
                      không chỉ là cách tốt nhất để thể hiện bản thân mà còn là
                      cách để kết nối và học hỏi từ cộng đồng. Chúng tôi khuyến
                      khích các bạn thanh niên hãy truy cập và sử dụng trang web
                      để tận hưởng những lợi ích mà nó mang lại.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className={css.headerAccordion}>
                      <b>Tại sao cần phải viết Nhật Ký?</b>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>Chào các bạn!</div>
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
                    <div>Chào các bạn!</div>
                    <div>
                      Việc viết nhật ký điện tử không chỉ là một phương tiện để
                      ghi chép lại những suy nghĩ và trải nghiệm hàng ngày, mà
                      còn là cách để thế hệ trẻ kết nối, chia sẻ và học hỏi lẫn
                      nhau.
                      <br />
                      Chúng ta còn trẻ, trong độ tuổi đầy hoài bão và khát vọng
                      cống hiến, khát vọng trưởng thành, nhật ký điện từ này sẽ
                      là hồi ký để sau này nhìn lại, chúng ta sẽ thấy được bản
                      thân mình đã rèn luyện thể nào, đã cống hiến ra sao. Một
                      giờ đến một buổi chia sẻ câu chuyện hay của mình nhưng là
                      mãi mãi về sau cho việc chia sẻ, lan toà giá trị tích cực.
                      Các bạn đồng trang lứa, các em nhỏ và anh chị lớn sẽ có
                      thêm động lực chia sẻ câu chuyện của họ, và đặc biệt hơn,
                      là tất cả chúng ta cùng có thêm động lực để sống đẹp, sống
                      có ích, sống đầy khát khao đúng tinh thần của thanh niên
                      thể hệ Hồ Chí Minh.
                      <br /> Như vậy, việc viết nhật ký điện tử không chỉ là
                      hoạt động cá nhân mà còn là hành động có ý nghĩa cộng
                      đồng, góp phần vào việc xây dựng và phát triển xã hội. Đó
                      là lý do tại sao việc viết nhật ký điện tử là quan trọng
                      và cần thiết, đặc biệt là trong bối cảnh hiện đại, nơi mà
                      việc gìn giữ và phát huy giá trị văn hóa, lịch sử là hết
                      sức cấp thiết.
                    </div>

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
                    <strong>
                      Bước 1: Bạn hãy chọn các chủ đề dưới đây để viết Nhật Kí.
                    </strong>
                    <br />
                    <div style={{ paddingLeft: "20px" }}>
                      <b>
                        CÁC CHUYÊN ĐỀ TRONG NHẬT KÝ ĐIỆN TỬ THANH NIÊN LÀM THEO
                        LỜI BÁC
                      </b>
                      <br />
                      1. Về Khát vọng cống hiến và xây dựng đất nước <br />
                      2. Về giữ gìn và phát huy bản sắc văn hoá dân tộc <br />
                      3. Về tinh thần học tập suốt đời, nâng cao trình độ về mọi
                      mặt; sáng tạo và đổi mới trong suy nghĩ và hành động: dám
                      nghĩ, dám làm, dám hi sinh, dám cống hiến vì mục tiêu
                      chung. <br />
                      4. Về sống có lý tưởng <br />
                      5. Về rèn luyện, tu dưỡng đạo đức cách mạng, rèn luyện ý
                      chí, bản lĩnh chính trị của người thanh niên
                      <br />
                      6. Về tinh thần xung kích tình nguyện “Đâu cần thanh niên
                      có, đâu khó có thanh niên” <br />
                      7. Về bảo vệ nền tảng tư tưởng của Đảng, đấu tranh phản
                      bác các quan điểm sai trái thù địch. <br />
                      8. Về rèn luyện kỹ năng cho thanh niên <br />
                      9. Khác
                      <br />
                      <b>
                        CÁC CHUYÊN ĐỀ TRONG NHẬT KÝ ĐIỆN TỬ THANH NIÊN TÌNH
                        NGUYỆN
                      </b>
                      <br /> 1. Các hoạt động tình nguyện bảo vệ môi trường{" "}
                      <br />
                      2. Thanh niên và giáo dục cộng đồng <br />
                      3. Tình nguyện xây dựng cộng đồng <br />
                      4. Thanh niên và chăm sóc sức khỏe cộng đồng <br />
                      5. Tình nguyện trong lĩnh vực văn hóa và nghệ thuật <br />
                      6. Tình nguyện trong lĩnh vực phòng chống tội phạm <br />
                      7. Phát triển kỹ năng cá nhân và nghề nghiệp thông qua
                      hoạt động tình nguyện <br />
                      8. Thanh niên và tình nguyện quốc tế <br />
                      9. Sự đóng góp của thanh niên trong các dự án công nghệ và
                      phát triển kỹ thuật <br />
                      10. Khác
                    </div>
                    <br />
                    <strong>
                      Bước 2: Quay lại đây và click vào link dưới đây để có thể
                      nộp bài về Ban Tổ Chức.
                    </strong>
                    <Link href="#">Click vào đây.</Link>
                    <br />
                    <br />
                    <strong>
                      {" "}
                      Bước 3: Ban tổ chức sẽ xác nhận hoặc feedback bài viết của
                      bạn trong 24h trước khi bài viết được đăng lên trang web
                      này để chia sẻ ra cộng đồng.
                    </strong>
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
