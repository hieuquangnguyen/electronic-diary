"use client";

import Accordion from "react-bootstrap/Accordion";
import CoverContentDiary from "@/components/coverContentDiary/page";
import css from "@/styles/TNLamTheoLoiBac.module.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DiaryItem from "@/data/diaryData/page";

const NKLamTheoLoiBac: React.FC = () => {
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
                        Content='Ngày hôm nay, như bao ngày khác, bầu trời bao phủ lớp mây trắng mịn, tạo nên bức tranh thiên nhiên huyền diệu cho thành phố. Tôi bước ra khỏi nhà, bắt đầu một ngày mới, nhưng không ngờ rằng hôm nay sẽ là một bài học đáng nhớ về tính kỉ luật từ chính người mà tôi luôn ngưỡng mộ - Chủ tịch Hồ Chí Minh.

                        Như mọi sáng, tôi đến công viên gần nhà để tập thể dục. Đây là thói quen hàng ngày của tôi, một cách để tận hưởng không khí trong lành và giữ gìn sức khỏe. Trong lúc tập, tôi bất ngờ chứng kiến một cảnh tượng không thể quên.
                        
                        Một ông lão, có vẻ như đã vượt qua tuổi thất thập cổ lai hy, đang tự tập luyện mỗi bước đi một cách chậm rãi. Tuy không nhanh nhẹn như người trẻ, nhưng ông ta tỏ ra quyết tâm và kiên nhẫn. Tôi chẳng thể không nhớ đến lời dạy của Chủ tịch Hồ Chí Minh về tinh thần kiên trì và kỉ luật.
                        
                        Nhưng điều khiến tôi ấn tượng hơn cả là cách mà ông lão ấy tự giáo dục bản thân. Mỗi khi gặp khó khăn, ông không từ bỏ, mà thay vào đó, ông lại tập trung vào việc hiệu chỉnh bản thân mình. Tôi nhận ra rằng, điều quan trọng không chỉ là khả năng vượt qua khó khăn, mà còn là khả năng tự kiểm soát và điều chỉnh bản thân.
                        
                        Nhìn thấy hình ảnh đó, tôi nhớ đến câu nói của Chủ tịch Hồ Chí Minh: " Kỉ luật là bản thân mình tự giáo dục bản thân mình, không phải là bị người khác giáo dục". Đó không chỉ là một câu nói, mà là triết lý sống mà Chủ tịch đã thực hiện trong suốt cuộc đời.
                        
                        Khi tập xong, tôi không thể không tiếp cận ông lão và chia sẻ ấn tượng của mình. Tôi kể về Chủ tịch Hồ Chí Minh và câu nói về kỉ luật của ông. Ông lão nhẹ nhàng cười và nói rằng, dù đã già đi nhưng ông vẫn luôn cố gắng thực hiện triết lý sống của mình, và việc tập luyện hàng ngày không chỉ giúp ông giữ gìn sức khỏe mà còn giúp ông duy trì tính kỉ luật và kiên trì.
                        
                        Đó là một buổi sáng đáng nhớ, khi một bài học về kỉ luật từ Chủ tịch Hồ Chí Minh lại được tái hiện trong cuộc sống hàng ngày của chúng ta, từ những người dân bình thường cho đến những người cao tuổi. Đó là sức mạnh của tấm gương mẫu mực, và tinh thần kỉ luật là một nguyên tắc không bao giờ lỗi thời, vẫn luôn sáng ngời qua thời gian.
                        Ngày hôm nay, như bao ngày khác, bầu trời bao phủ lớp mây trắng mịn, tạo nên bức tranh thiên nhiên huyền diệu cho thành phố. Tôi bước ra khỏi nhà, bắt đầu một ngày mới, nhưng không ngờ rằng hôm nay sẽ là một bài học đáng nhớ về tính kỉ luật từ chính người mà tôi luôn ngưỡng mộ - Chủ tịch Hồ Chí Minh.

                        Như mọi sáng, tôi đến công viên gần nhà để tập thể dục. Đây là thói quen hàng ngày của tôi, một cách để tận hưởng không khí trong lành và giữ gìn sức khỏe. Trong lúc tập, tôi bất ngờ chứng kiến một cảnh tượng không thể quên.
                        
                        Một ông lão, có vẻ như đã vượt qua tuổi thất thập cổ lai hy, đang tự tập luyện mỗi bước đi một cách chậm rãi. Tuy không nhanh nhẹn như người trẻ, nhưng ông ta tỏ ra quyết tâm và kiên nhẫn. Tôi chẳng thể không nhớ đến lời dạy của Chủ tịch Hồ Chí Minh về tinh thần kiên trì và kỉ luật.
                        
                        Nhưng điều khiến tôi ấn tượng hơn cả là cách mà ông lão ấy tự giáo dục bản thân. Mỗi khi gặp khó khăn, ông không từ bỏ, mà thay vào đó, ông lại tập trung vào việc hiệu chỉnh bản thân mình. Tôi nhận ra rằng, điều quan trọng không chỉ là khả năng vượt qua khó khăn, mà còn là khả năng tự kiểm soát và điều chỉnh bản thân.
                        
                        Nhìn thấy hình ảnh đó, tôi nhớ đến câu nói của Chủ tịch Hồ Chí Minh: " Kỉ luật là bản thân mình tự giáo dục bản thân mình, không phải là bị người khác giáo dục". Đó không chỉ là một câu nói, mà là triết lý sống mà Chủ tịch đã thực hiện trong suốt cuộc đời.
                        
                        Khi tập xong, tôi không thể không tiếp cận ông lão và chia sẻ ấn tượng của mình. Tôi kể về Chủ tịch Hồ Chí Minh và câu nói về kỉ luật của ông. Ông lão nhẹ nhàng cười và nói rằng, dù đã già đi nhưng ông vẫn luôn cố gắng thực hiện triết lý sống của mình, và việc tập luyện hàng ngày không chỉ giúp ông giữ gìn sức khỏe mà còn giúp ông duy trì tính kỉ luật và kiên trì.
                        
                        Đó là một buổi sáng đáng nhớ, khi một bài học về kỉ luật từ Chủ tịch Hồ Chí Minh lại được tái hiện trong cuộc sống hàng ngày của chúng ta, từ những người dân bình thường cho đến những người cao tuổi. Đó là sức mạnh của tấm gương mẫu mực, và tinh thần kỉ luật là một nguyên tắc không bao giờ lỗi thời, vẫn luôn sáng ngời qua thời gian.
                        Ngày hôm nay, như bao ngày khác, bầu trời bao phủ lớp mây trắng mịn, tạo nên bức tranh thiên nhiên huyền diệu cho thành phố. Tôi bước ra khỏi nhà, bắt đầu một ngày mới, nhưng không ngờ rằng hôm nay sẽ là một bài học đáng nhớ về tính kỉ luật từ chính người mà tôi luôn ngưỡng mộ - Chủ tịch Hồ Chí Minh.

                        Như mọi sáng, tôi đến công viên gần nhà để tập thể dục. Đây là thói quen hàng ngày của tôi, một cách để tận hưởng không khí trong lành và giữ gìn sức khỏe. Trong lúc tập, tôi bất ngờ chứng kiến một cảnh tượng không thể quên.
                        
                        Một ông lão, có vẻ như đã vượt qua tuổi thất thập cổ lai hy, đang tự tập luyện mỗi bước đi một cách chậm rãi. Tuy không nhanh nhẹn như người trẻ, nhưng ông ta tỏ ra quyết tâm và kiên nhẫn. Tôi chẳng thể không nhớ đến lời dạy của Chủ tịch Hồ Chí Minh về tinh thần kiên trì và kỉ luật.
                        
                        Nhưng điều khiến tôi ấn tượng hơn cả là cách mà ông lão ấy tự giáo dục bản thân. Mỗi khi gặp khó khăn, ông không từ bỏ, mà thay vào đó, ông lại tập trung vào việc hiệu chỉnh bản thân mình. Tôi nhận ra rằng, điều quan trọng không chỉ là khả năng vượt qua khó khăn, mà còn là khả năng tự kiểm soát và điều chỉnh bản thân.
                        
                        Nhìn thấy hình ảnh đó, tôi nhớ đến câu nói của Chủ tịch Hồ Chí Minh: " Kỉ luật là bản thân mình tự giáo dục bản thân mình, không phải là bị người khác giáo dục". Đó không chỉ là một câu nói, mà là triết lý sống mà Chủ tịch đã thực hiện trong suốt cuộc đời.
                        
                        Khi tập xong, tôi không thể không tiếp cận ông lão và chia sẻ ấn tượng của mình. Tôi kể về Chủ tịch Hồ Chí Minh và câu nói về kỉ luật của ông. Ông lão nhẹ nhàng cười và nói rằng, dù đã già đi nhưng ông vẫn luôn cố gắng thực hiện triết lý sống của mình, và việc tập luyện hàng ngày không chỉ giúp ông giữ gìn sức khỏe mà còn giúp ông duy trì tính kỉ luật và kiên trì.
                        
                        Đó là một buổi sáng đáng nhớ, khi một bài học về kỉ luật từ Chủ tịch Hồ Chí Minh lại được tái hiện trong cuộc sống hàng ngày của chúng ta, từ những người dân bình thường cho đến những người cao tuổi. Đó là sức mạnh của tấm gương mẫu mực, và tinh thần kỉ luật là một nguyên tắc không bao giờ lỗi thời, vẫn luôn sáng ngời qua thời gian.'
                      />
                      {/* button share fb, button coppy link */}
                      <div className={css.buttonShare}>
                        <ButtonGroup aria-label="Basic example">
                          <Button variant="success">
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
