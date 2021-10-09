import React, { useState } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';






function NewsDashboard() {

  const [data, setData] = useState([]);
  const [firstNews, setFirstNews] = useState()
  const [firstPic, setFirstPic] = useState()
  const [firstDesc, setFirstdesc] = useState()
  const [latest, setLatest] = useState([])
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(null)
  const [allArticle, setArticles] = useState([])
  // console.log("title", firstNews)
  // console.log("latest", latest)





  // const [open, setOpen] = React.useState(o);
  const scroll = 'paper'

  //  (scrollType) => () => {
  //     setOpen(true);
  // setScroll(scrollType);
  // };

  const handleClose = () => {
    setId(null)
    setOpen(!open);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  axios
    .get("https://saurav.tech/NewsAPI/everything/cnn.json")
    // .then(res => console.log(res))
    .then(function (result) {
      // console.log(result)
      let allArticles = result.data.articles
      setArticles(allArticles)
      let d = result.data.articles
      const mainNews = d[0].title
      const mainPic = d[0].urlToImage
      const maindesc = d[0].description
      // console.log("latest", d.slice(0,3))
      setLatest(d.slice(1, 4))

      // console.log(mainNews)
      setFirstNews(mainNews)
      setFirstPic(mainPic)
      setFirstdesc(maindesc)
      // console.log(d)
      d.splice(15, 200)

      setData(d)
    })
    .catch(err => {
      console.log(err);

    });


  const handleIdChange = (index) => {

    setId(index)
    console.log(index)
    setOpen(true)

  }

  // var url = 'https://saurav.tech/NewsAPI/everything/cnn.json';

  // fetch(url).then(res => res.json())
  //     .then(function (result) {
  //         // console.log(result)
  //         let d = result.articles
  //         console.log(d)
  //         setData(d)

  //     })




  return (

    <body>


      {
        open ?
          ///////////////////////////////////////////////



          <div>
            {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
            <Dialog
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">Descriptioni</DialogTitle>
              <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}
                >

                  {
                    allArticle[id].description

                  }
                  <a src={allArticle[0].url} target="_blanck" href={allArticle[0].url}  >Read More</a>

                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>

              </DialogActions>
            </Dialog>
          </div>




          /////////////////////////////////////////////////

          : null
      }





      <div className="container-scroller">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="container">
              <div className="row" data-aos="fade-up">


                <div class="card bg-dark text-white" style={{ width: "auto", height: "auto" }} >
                  <img src={firstPic} class="card-img" alt="..." />
                  <div class="card-img-overlay">
                    <h5 class="card-title">{firstNews}</h5>
                    <p class="card-text">{firstDesc}</p>

                  </div>
                </div>
                {/* <div className="col-xl-8 stretch-card grid-margin"  >
                  <div className="position-relative">
                    <img
                      src={firstPic}
                      alt="banner"
                      className="img-fluid"
                      title={firstNews}
                    // style={{ position: "absolute" }}

                    />
                    <div className="banner-content">
                      <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                        global news
                      </div>
                      <h1 className="mb-0" style={{ position: "absolute" }} >{firstNews}</h1>
                    </div>
                  </div>
                </div> */}
                <div className="col-xl-4 stretch-card grid-margin" style={{ width: "auto", height: "auto" }}>
                  <div className="card bg-dark text-white">
                    <div className="card-body">
                      <h2>Latest news</h2>

                      {
                        latest?.map((item, i) => (
                          <div
                            className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                            key={i}
                          >
                            <div className="pr-3">
                              <h5 onClick={() => handleIdChange(i)} >{item.title}</h5>
                              <div className="fs-12">
                                {/* <span className="mr-2">Photo </span>10 Minutes ago */}
                              </div>
                            </div>
                            <div className="rotate-img">
                              <img
                                src={item.urlToImage}
                                alt="thumb"
                                className="img-fluid img-lg"
                              />
                            </div>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                </div>
              </div>
              <div className="row" data-aos="fade-up">






                <div className="col-lg-9 stretch-card grid-margin" style={{ width: "auto", height: "auto" }} >
                  <div className="card">
                    <div className="card-body">
                      {data?.map((item, i) => (
                        <div className="row" key={i} >
                          <div className="col-sm-4">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src={item.urlToImage}
                                  alt="thumb"
                                  className="img-fluid"
                                  title={item.title}
                                />
                              </div>
                              <div className="badge-positioned">
                                {/* <span className="badge badge-danger font-weight-bold"
                                >Flash news</span
                                > */}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <h2 className="mb-2 font-weight-600" >
                              {item.title}
                            </h2>
                            <div className="fs-13 mb-2">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </div>
                            <p className="mb-0">
                              {item.description}:
                              <button style={{ backgroundColor: 'black', outline: "none", borderRadius: "5%", color: "white" }} onClick={() => handleIdChange(i)} >SEE MORE</button>
                            </p>
                          </div>
                        </div>
                      ))}


                    </div>
                  </div>
                </div>





              </div>


            </div>
          </div>

          <footer>
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5">
                    <img src="assets/images/logo.svg" className="footer-logo" alt="" />
                    <h5 className="font-weight-normal mt-4 mb-5">
                      Newspaper is your news, entertainment, music fashion website. We
                      provide you with the latest breaking news and videos straight from
                      the entertainment industry.
                    </h5>

                  </div>
                  <div className="col-sm-4">
                    <h3 className="font-weight-bold mb-3">RECENT POSTS</h3>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="footer-border-bottom pb-2">
                          <div className="row">
                            <div className="col-3">
                              <img
                                src="assets/images/dashboard/home_1.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-9">
                              <h5 className="font-weight-600">
                                Cotton import from USA to soar was American traders
                                predict
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className="col-sm-3">
                    <h3 className="font-weight-bold mb-3">CATEGORIES</h3>
                    <div className="footer-border-bottom pb-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 font-weight-600">Magazine</h5>
                        {/* <div className="count">1</div> */}
                      </div>
                    </div>
                    <div className="footer-border-bottom pb-2 pt-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 font-weight-600">Business</h5>
                        {/* <div className="count">1</div> */}
                      </div>
                    </div>
                    <div className="footer-border-bottom pb-2 pt-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 font-weight-600">Sports</h5>
                        {/* <div className="count">1</div> */}
                      </div>
                    </div>
                    <div className="footer-border-bottom pb-2 pt-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 font-weight-600">Arts</h5>
                        {/* <div className="count">1</div> */}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 font-weight-600">Politics</h5>
                        {/* <div className="count">1</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <div className="fs-14 font-weight-600">
                        © 2020 @ info-for-nation. All rights reserved.
                      </div>
                      <div className="fs-14 font-weight-600">
                        Handcrafted by <a href="https://www.bootstrapdash.com/" target="_blank" rel="noreferrer" className="text-white">BootstrapDash</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>

      <script src="assets/vendors/js/vendor.bundle.base.js"></script>

      <script src="assets/vendors/aos/dist/aos.js/aos.js"></script>

      <script src="./assets/js/demo.js"></script>
      <script src="./assets/js/jquery.easeScroll.js"></script>

    </body>
  );
}

export default NewsDashboard;



