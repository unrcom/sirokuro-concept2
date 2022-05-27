import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>sirokuro.site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main className={styles.main}>
        {/* <main> */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: true,
          //   waitForTransition: false,
          // }}
          loop={true}
          // loopAdditionalSlides={1}
          speed={500}
        >
          {/* {items.map((banneritem, index) => { */}
          <SwiperSlide>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={7} alignItems="center">
                <Paper elevation={0} className={styles.paperwhite}>
                  <Typography
                    align="center"
                    variant="h3"
                    className={styles.textblack}
                  >
                    sirokuro.site
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={5} alignItems="center">
                <Box className={styles.boxblack}>
                  <Typography
                    align="center"
                    variant="h4"
                    className={styles.textwhite}
                  >
                    CONCEPT
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container spacing={1}>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblack}>
                  <Typography
                    align="center"
                    variant="h4"
                    className={styles.textwhite}
                  >
                    まずはじめに
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} alignItems="center">
                <Paper elevation={0} className={styles.paperwhitecenter}>
                  <div className={styles.resizeimage}>
                    <img
                      src="concept-image1.png"
                      alt=""
                      className={styles.image40}
                    />
                  </div>
                </Paper>
              </Grid>{" "}
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblack}>
                  {/* <Paper elevation={0} className={styles.paperblack}> */}
                  <Typography
                    align="left"
                    variant="body1"
                    className={styles.textwhite}
                  >
                    物を買う時はもちろん、自分の意見は少数派なのか多数派なのか、何かを決断する時、知りたくなるはずです。
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    className={styles.textwhite}
                  >
                    リモートでの活動が多くなった時代に「誰かに聞きたい!」欲求を満たすことのできたらというのが、このサイトの企画の発端です。
                  </Typography>
                  {/* </Paper> */}
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container spacing={1}>
              <Grid item xs={12} alignItems="center">
                <Paper elevation={0} className={styles.paperwhite}>
                  <Typography align="center" variant="h4">
                    何か決断するとき
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblack}>
                  {/* <Paper elevation={0} className={styles.paperblack}> */}
                  <Typography
                    align="left"
                    variant="body1"
                    className={styles.textwhite}
                  >
                    人間は生活していく上で、「朝何を食べよう」から始まり、常に何かをセレクトしています。
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    className={styles.textwhite}
                  >
                    日々何かを決断しているワケですが、大きく分けて2属性あるのかなと思います。
                  </Typography>
                  {/* </Paper> */}
                </Box>
              </Grid>
              <Grid item xs={12} md={6} alignItems="center">
                <Paper elevation={0} className={styles.paperwhitecenter}>
                  <img
                    src="concept-image2-1.png"
                    alt=""
                    className={styles.image}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} alignItems="center">
                <Paper elevation={0} className={styles.paperwhitecenter}>
                  <img
                    src="concept-image2-2.png"
                    alt=""
                    className={styles.image}
                  />
                </Paper>
              </Grid>
            </Grid>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Grid container spacing={1}>
              <Grid item xs={12} alignItems="center">
                <Paper elevation={0} className={styles.paperwhite}>
                  <Typography align="center" variant="h4">
                    モノでもコトでも
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblack}>
                  {/* <Paper elevation={0} className={styles.paperblack}> */}
                  <Typography
                    align="left"
                    variant="body1"
                    className={styles.textwhite}
                  >
                    現在多くあるのが、商品購買やオークションなど「モノ」のサイト、その他、出会い系、イベントなど「コト」のサイトそれぞれ専門性に特化しています。
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    className={styles.textwhite}
                  >
                    そこで、「コト」「モノ」にとらわれず全てのものを比較でき、個人的に調査比較が簡単にできるサイトがあれば決断の礎になるのではないかと考えます。
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    className={styles.textwhite}
                  >
                    知識欲、決断力を満たしてくれる{" "}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    className={styles.textwhite}
                  >
                    それが、白黒サイトです。
                  </Typography>
                  {/* </Paper> */}
                </Box>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Paper elevation={0} className={styles.paperwhitecenter}>
                  <img
                    src="concept-image3.png"
                    alt=""
                    className={styles.image}
                  />
                </Paper>
              </Grid>
            </Grid>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Grid container spacing={1}>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblack10}>
                  <Typography
                    align="center"
                    variant="h5"
                    className={styles.textwhite}
                  >
                    サイトイメージ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="center">
                <Box className={styles.boxblack10}>
                  <Typography
                    align="center"
                    variant="h5"
                    className={styles.textwhite}
                  >
                    投票詳細ページ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="center">
                <Box className={styles.boxblack10}>
                  <Typography
                    align="center"
                    variant="h5"
                    className={styles.textwhite}
                  >
                    投票結果
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Paper elevation={0} className={styles.paperwhitecenter}>
                  <img
                    src="concept-image4-1.png"
                    alt=""
                    className={styles.image}
                  />
                </Paper>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container spacing={1}>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblack10}>
                  <Typography
                    align="center"
                    variant="h5"
                    className={styles.textwhite}
                  >
                    サイトイメージ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="center">
                <Box className={styles.boxblack10}>
                  <Typography
                    align="center"
                    variant="h5"
                    className={styles.textwhite}
                  >
                    投票詳細ページ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="center">
                <Box className={styles.boxblack10}>
                  <Typography
                    align="center"
                    variant="h5"
                    className={styles.textwhite}
                  >
                    コメント・リプライ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Paper elevation={0} className={styles.paperwhitecenter}>
                  <img
                    src="concept-image4-2.png"
                    alt=""
                    className={styles.image}
                  />
                </Paper>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container spacing={1}>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblack10}>
                  <Typography
                    align="center"
                    variant="h5"
                    className={styles.textwhite}
                  >
                    comming soon
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="center">
                <Box className={styles.boxblack10}>
                  <Typography
                    align="center"
                    variant="h5"
                    className={styles.textwhite}
                  >
                    七夕 (2022年7月7日)
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="center">
                <Box className={styles.boxblack10}>
                  <Typography
                    align="center"
                    variant="h5"
                    className={styles.textwhite}
                  >
                    サービス開始予定
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>{" "}
        </Swiper>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://unremoted.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by unremote.com
        </a>
      </footer>
    </div>
  );
};

export default Home;
