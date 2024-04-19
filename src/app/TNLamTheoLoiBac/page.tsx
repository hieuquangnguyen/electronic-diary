"use client";

import Accordion from "react-bootstrap/Accordion";
import CoverContentDiary from "@/components/coverContentDiary/page";
import css from "@/styles/TNLamTheoLoiBac.module.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DiaryItem from "@/data/diaryData/page";

const NKLamTheoLoiBac: React.FC = () => {
  function shareToFacebook(postId: string) {
    const postUrl =
      "https://nhat-ki-dien-tu-thanh-nien.vercel.app/TNLamTheoLoiBac"; // replace this with the url of the post

    const url = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}/${postId}`;

    window.open(
      url,
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
    );
  }

  return (
    <>
      <CoverContentDiary>
        <>
          <div className={css.coverNhatKiPage}>
            <div className={css.headerPage}>
              <h3>NHẬT KÍ THANH NIÊN LÀM THEO LỜI BÁC</h3>
            </div>
            <div className={css.coverListNhatKi}>
              <div id="modal-root">
                <Accordion defaultActiveKey={"0"}>
                  {/* Nhật kí 1 */}
                  <Accordion.Item eventKey="0" id="post1">
                    <Accordion.Header>bài 1</Accordion.Header>
                    <Accordion.Body>
                      {/* okay đây */}
                      <DiaryItem
                        IdDiary="1"
                        DiaryName="Noi gương đức tính kỉ luật của Bác Hồ"
                        Date="18/04/2024"
                        Author="Nguyễn Quang Hiếu"
                        Address="Thôn Trà Kiệu Tây, Xã Duy Sơn, Huyện Duy Xuyên, Tỉnh Quảng Nam."
                        Purpose="Bài nhật kí với mong muốn truyền tải câu chuyện về tính kỉ luật."
                        Content="Ngày hôm nay, như bao ngày khác, bầu trời bao phủ lớp mây trắng mịn, tạo nên bức tranh thiên nhiên huyền diệu cho thành phố. Tôi bước ra khỏi nhà, bắt đầu một ngày mới, nhưng không ngờ rằng hôm nay sẽ là một bài học đáng nhớ về tính kỉ luật từ chính người mà tôi luôn ngưỡng mộ - Chủ tịch Hồ Chí Minh."
                      />
                      {/* button share fb, button coppy link */}
                      <div className={css.buttonShare}>
                        <ButtonGroup aria-label="Basic example">
                          <Button
                            variant="success"
                            onClick={() => shareToFacebook("post1")}
                          >
                            <b>Chia Sẻ Facebook</b>
                          </Button>

                          <Button variant="info">
                            <b>Coppy Link</b>
                          </Button>
                        </ButtonGroup>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Nhật kí 2 */}
                </Accordion>
              </div>
            </div>
          </div>
        </>
      </CoverContentDiary>
    </>
  );
};
export default NKLamTheoLoiBac;
