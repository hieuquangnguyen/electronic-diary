"use client";

import Accordion from "react-bootstrap/Accordion";
import CoverContentDiary from "@/components/coverContentDiary/page";
import css from "@/styles/TNLamTheoLoiBac.module.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DiaryItem from "@/data/diaryData/page";

import React, { useState } from "react";
const NKLamTheoLoiBac: React.FC = () => {
  // Tạo một state để lưu trữ postIdToOpen
  const [postIdToOpen, setPostIdToOpen] = useState<string>("1");

  // Thiết lập giá trị cho postIdToOpen, chẳng hạn khi người dùng chọn một bài viết cụ thể
  const handlePostClick = (postId: string) => {
    setPostIdToOpen(postId);
  };

  // tạo một mảng posts
  const posts = [
    // dữ liệu bài nhât kí 1
    {
      id: "1",
      title: "Bài Viết Số 1",
      content: {
        IdDiary: "1",
        DiaryName: "Noi gương đức tính kỉ luật của Bác Hồ",
        Date: "18/04/2024",
        Author: "Nguyễn Quang Hiếu",
        Address:
          "Thôn Trà Kiệu Tây, Xã Duy Sơn, Huyện Duy Xuyên, Tỉnh Quảng Nam.",
        Purpose:
          "Bài nhật kí với mong muốn truyền tải câu chuyện về tính kỉ luật.",
        Content:
          "Ngày hôm nay, như bao ngày khác, bầu trời bao phủ lớp mây trắng mịn, tạo nên bức tranh thiên nhiên huyền diệu cho thành phố. Tôi bước ra khỏi nhà, bắt đầu một ngày mới, nhưng không ngờ rằng hôm nay sẽ là một bài học đáng nhớ về tính kỉ luật từ chính người mà tôi luôn ngưỡng mộ - Chủ tịch Hồ Chí Minh.",
      },
    },
    {
      id: "2",
      title: "Bài Viết Số 2",
      content: {
        IdDiary: "2",
        DiaryName: "Noi gương đức tính kỉ luật của Bác Hồ",
        Date: "18/04/2024",
        Author: "Nguyễn Quang Hiếu",
        Address:
          "Thôn Trà Kiệu Tây, Xã Duy Sơn, Huyện Duy Xuyên, Tỉnh Quảng Nam.",
        Purpose:
          "Bài nhật kí với mong muốn truyền tải câu chuyện về tính kỉ luật.",
        Content:
          "Ngày hôm nay, như bao ngày khác, bầu trời bao phủ lớp mây trắng mịn, tạo nên bức tranh thiên nhiên huyền diệu cho thành phố. Tôi bước ra khỏi nhà, bắt đầu một ngày mới, nhưng không ngờ rằng hôm nay sẽ là một bài học đáng nhớ về tính kỉ luật từ chính người mà tôi luôn ngưỡng mộ - Chủ tịch Hồ Chí Minh.",
      },
    },
  ];

  function getPostUrl(postId: string, postUrl: string) {
    return `${postUrl}/${postId}`;
  }

  function shareToFacebook(postId: string, postUrl: string) {
    const url = getPostUrl(postId, postUrl);

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
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
                <Accordion defaultActiveKey={postIdToOpen}>
                  {posts.map((post) => (
                    // Nhật kí số 1
                    <Accordion.Item
                      eventKey={post.id}
                      id={`post${post.id}`}
                      key={post.id}
                      onClick={() => handlePostClick(post.id)} // Gọi hàm handlePostClick khi bài viết được click
                    >
                      <Accordion.Header>{post.title}</Accordion.Header>

                      <Accordion.Body>
                        <DiaryItem
                          IdDiary={post.content.IdDiary}
                          DiaryName={post.content.DiaryName}
                          Date={post.content.Date}
                          Author={post.content.Author}
                          Address={post.content.Address}
                          Purpose={post.content.Purpose}
                          Content={post.content.Content}
                        />

                        <div className={css.buttonShare}>
                          <ButtonGroup aria-label="Basic example">
                            <Button
                              variant="success"
                              onClick={() =>
                                shareToFacebook(
                                  post.id,
                                  "https://nhat-ki-dien-tu-thanh-nien.vercel.app/TNLamTheoLoiBac#post" +
                                    post.id
                                )
                              }
                            >
                              <b>Chia Sẻ Facebook</b>
                            </Button>

                            <Button variant="info">
                              <b>Copy Link</b>
                            </Button>
                          </ButtonGroup>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
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
