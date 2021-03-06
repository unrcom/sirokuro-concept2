import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../styles/Home.module.css";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { Card } from "@mui/material";

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    <div>
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
          navigation={true}
          // navigation={{ nextEl: ".swiper-button-next" }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: true,
          //   waitForTransition: false,
          // }}
          loop={true}
          // loopAdditionalSlides={1}
          speed={500}
        >
          <SwiperSlide>
            <Grid container spacing={0}>
              <Grid item xs={12} alignItems="center">
                {/* <Card>
              <CardContent> */}
                <Typography
                  align="center"
                  variant="h5"
                  className={styles.textblackP301}
                >
                  welcome to
                </Typography>
                <Typography
                  align="center"
                  variant="h5"
                  className={styles.textblackP302}
                  // gutterBottom
                >
                  sirokuro[CONCEPT].site
                </Typography>
                {/* </CardContent>
            </Card> */}
              </Grid>
              <Grid item xs={12} alignItems="center">
                {/* <Card>
                <CardContent> */}
                <Box className={styles.boxblackmargin40}>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhiteP201}
                  >
                    ようこそ
                  </Typography>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhiteP20}
                  >
                    シロクロ(コンセプト)
                  </Typography>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhiteP202}
                  >
                    サイトへ
                  </Typography>
                </Box>
                {/* </CardContent>
              </Card> */}
              </Grid>
            </Grid>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Grid container spacing={0}>
              <Grid item xs={12} alignItems="center">
                {/* <Card>
              <CardContent> */}
                <Box className={styles.boxblack}>
                  <Typography
                    align="center"
                    variant="h4"
                    className={styles.textwhite}
                  >
                    まずはじめに
                  </Typography>
                </Box>
                {/* </CardContent>
            </Card> */}
              </Grid>
              <Grid item xs={12} alignItems="center">
                <div className={styles.resizeimage75}>
                  {/* <img src="parts-01.svg" /> */}
                  <picture>
                    <source media="(max-width: 560px)" srcSet="parts-04.svg" />
                    <img src="parts-01.svg" />
                  </picture>
                </div>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblackmargin40}>
                  {/* <Paper elevation={0} className={styles.paperblack}> */}
                  <Typography
                    align="left"
                    variant="body2"
                    className={styles.textwhite}
                  >
                    物を買う時はもちろん、自分の意見は少数派なのか多数派なのか、何かを決断する時、知りたくなるはずです。
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
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
            <Grid container spacing={0}>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblack}>
                  <Typography
                    align="center"
                    variant="h4"
                    className={styles.textwhite}
                  >
                    何か決断するとき
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Paper elevation={0} className={styles.paperwhitecenter}>
                  {/* <div className={styles.resizeimage}>
                    <img src="parts-02.svg" alt="" className={styles.image} />
                  </div> */}

                  <div className={styles.resizeimage75}>
                    <picture>
                      <source
                        media="(max-width: 560px)"
                        srcSet="image2233-2.png"
                        className={styles.resizeimage}
                      ></source>
                      <img src="parts-02.svg" />
                    </picture>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblackmargin40}>
                  {/* <Paper elevation={0} className={styles.paperblack}> */}
                  <Typography
                    align="left"
                    variant="body2"
                    className={styles.textwhite}
                  >
                    人間は生活していく上で、「朝何を食べよう」から始まり、常に何かをセレクトしています。
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    className={styles.textwhite}
                  >
                    日々何かを決断しているワケですが、大きく分けて2属性あるのかなと思います。
                  </Typography>
                  {/* </Paper> */}
                </Box>
              </Grid>{" "}
            </Grid>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Grid container spacing={1}>
              <Grid item xs={12} alignItems="center">
                {/* <Paper elevation={0} className={styles.paperwhite}> */}
                <Box className={styles.boxblack}>
                  <Typography
                    align="center"
                    variant="h4"
                    className={styles.textwhite}
                  >
                    モノでもコトでも
                  </Typography>
                  {/* </Paper> */}
                </Box>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Paper elevation={0} className={styles.paperwhitecenter}>
                  <div className={styles.resizeimage40}>
                    {/* <img src="parts-03.svg" alt="" className={styles.image} /> */}
                    <img src="parts-03.svg" alt="" />
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={12} alignItems="center">
              <Box className={styles.boxblackmargin40}>
                {/* <Paper elevation={0} className={styles.paperblack}> */}
                <Typography
                  align="left"
                  variant="body2"
                  className={styles.textwhite}
                >
                  現在多くあるのが、商品購買やオークションなど「モノ」のサイト、
                  イベント、出会い系など「コト」のサイトそれぞれ専門性に特化しています。
                </Typography>
                <Typography
                  align="left"
                  variant="body2"
                  className={styles.textwhite}
                >
                  そこで、「コト」「モノ」にとらわれず全てのものを比較でき、
                  個人的に調査が簡単にできるサイトがあれば
                  決断の礎になるのではないかと考えます。
                </Typography>
                <Typography
                  align="left"
                  variant="body2"
                  className={styles.textwhite}
                >
                  知識欲を満たし、決断力を強化できる{" "}
                </Typography>
                <Typography
                  align="left"
                  variant="body2"
                  className={styles.textwhite}
                >
                  それが、白黒サイトです。
                </Typography>
                {/* </Paper> */}
              </Box>
            </Grid>
          </SwiperSlide>{" "}
          {/* <SwiperSlide>
            <Grid container spacing={0}>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblack5}>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhite}
                  >
                    サイトイメージ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="center">
                <Box className={styles.boxblack5}>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhite}
                  >
                    投票詳細ページ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="center">
                <Box className={styles.boxblack5}>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhite}
                  >
                    トップページ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Paper elevation={0} className={styles.paperwhitecenter}>
                  <div className={styles.resizeimage600}>
                    <img src="TOP.png" />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <Grid container spacing={0}>
              <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblack5}>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhite}
                  >
                    サイトイメージ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="center">
                <Box className={styles.boxblack5}>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhite}
                  >
                    投票詳細ページ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} alignItems="center">
                <Box className={styles.boxblack5}>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhite}
                  >
                    詳細ページ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} alignItems="center">
                <Paper elevation={0} className={styles.paperwhitecenter}>
                  <div className={styles.resizeimage400}>
                    <img src="shosai.png" alt="" className={styles.image} />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </SwiperSlide> */}
          <SwiperSlide>
            <Grid container spacing={0}>
              <Grid item xs={12} alignItems="center">
                <Typography
                  align="center"
                  variant="h5"
                  className={styles.textblackP303}
                >
                  comming soon
                </Typography>
              </Grid>
              {/* <Grid item xs={12} alignItems="center">
                <Box className={styles.boxblackmargin40}>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhiteP20}
                  ></Typography>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhiteP20}
                  ></Typography>
                  <Typography
                    align="center"
                    variant="h6"
                    className={styles.textwhiteP20}
                  ></Typography>
                </Box>
              </Grid> */}
            </Grid>
          </SwiperSlide>
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
