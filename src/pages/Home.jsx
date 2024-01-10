import React, { useContext, useEffect, useState } from 'react'
import '../sass/home.scss'
import { Link } from 'react-router-dom'

import Slider from "react-slick";
import Modal from './Modal';
import { BasketContext } from '../context/BasketContext';
import Basket from './Basket';
import { WishlistContext } from '../context/WishlistContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './Scroll';

// import Modal from './Modal';


const Home = () => {

    const [data, setData] = useState([]);
    const [displayedItems, setDisplayedItems] = useState([]);
    const [moreItems, setMoreItems] = useState(true);


    useEffect(() => {
        fetch('https://mocki.io/v1/3104c05f-65e6-4d2e-933e-0812a15c2651')
            .then((res) => res.json())
            .then((api) => setData(api));
    }, []);

    useEffect(() => {
        setDisplayedItems(data.slice(0, 4));
    }, [data]);

    const handleViewMore = () => {
        if (moreItems) {
            const newItems = data.slice(displayedItems.length, displayedItems.length + 4);
            const updatedItems = [...displayedItems, ...newItems];

            if (updatedItems.length >= 8) {
                setMoreItems(false);
                setDisplayedItems(updatedItems.slice(0, 8));
            } else {
                setDisplayedItems(updatedItems);
            }
        }
    }



    const [disaybledTwo, setDisaybledTwo] = useState([]);

    useEffect(() => {
        setDisaybledTwo(data.slice(4, 8))
    }, [data])



    const [disaybledThree, setDisaybledThree] = useState([]);

    useEffect(() => {
        setDisaybledThree(data.slice(8, 16));
    }, [data]);

    // const handleViewMor = () => {
    //     const newItems = data.slice(disaybledThree.length, disaybledThree.length + 4);
    //     const updatedItems = [...disaybledThree, ...newItems];

    //     if (updatedItems.length >= 16) {
    //         setMoreItems(false);
    //         setDisplayedItems(updatedItems.slice(0, 8));
    //     } else {
    //         setDisplayedItems(updatedItems);
    //     }
    // };


    ////////////////////////////////////////////////////////////////////////////////

    // var countDownDate = new Date("Dec 22, 2023 3:57:25").getTime();

    // // Update the count down every 1 second
    // var x = setInterval(function () {

    //     // Get today's date and time
    //     var now = new Date().getTime();

    //     // Find the distance between now and the count down date
    //     var distance = countDownDate - now;

    //     // Time calculations for days, hours, minutes and seconds
    //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //     // Output the result in an element with id="demo"
    //     document.getElementById("demo").innerHTML = days + ' : ' + hours + " : "
    //         + minutes + " : " + seconds;

    //     // If the count down is over, write some text 
    //     if (distance < 0) {
    //         clearInterval(x);
    //         document.getElementById("demo").innerHTML = "EXPIRED";
    //     }
    // }, 1000);


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1800,
        autoplaySpeed: 10,
        cssEase: "linear"
    };


    const [modal, setModal] = useState(null)

    // const openModal = () => {
    //     setModal(true)
    // }
    const closeModal = () => {
        setModal(false)
    }

    ///////basket-in funksiyalari
    const { addBasket } = useContext(BasketContext)
    const {toggleWishlist ,checkWishlist} = useContext(WishlistContext)
    const [loading , setLoading] = useState(true)

    function notify() {
        toast.success('Product Added !', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
    }



    return (
        <div className='home'>
            {modal && (
                <Modal close={closeModal} modalItem={modal} />
                //setModal - a item oturulur die modal da item olur . ona gore modalItem-i modal-a beraber edirik
            )}


            <div className="one">

                <div className="filter">
                    <ul>
                        <Link to={'/'}>Women's Fashion <i class="fa-solid fa-angle-right"></i></Link>
                        <Link to={'/'}>Men's Fashion <i class="fa-solid fa-angle-right"></i></Link>
                        <Link to={'/'}>Electronics</Link>
                        <Link to={'/'}>Home & LifeStyle</Link>
                        <Link to={'/'}>Medicine</Link>
                        <Link to={'/'}>Supports & Outdoor</Link>
                        <Link to={'/'}>Baby's & Toys</Link>
                        <Link to={'/'}>Groceries & Pets</Link>
                        <Link to={'/'}>Health & Beauty</Link>

                    </ul>
                </div>


                <div className="iphone-picture">
                    <div className='iphone-div'>
                        <div className='apple'>
                            <i class="fa-brands fa-apple"></i>
                            <h3>iPhone 14 Series</h3>
                        </div>
                        <h2>Up to 10% <br /> off Voucher</h2>
                        <div className="show">
                            <h1>Shop Now </h1>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1703462400&Signature=ko36RgioWSRNeKD~P2xV4W6NJYSC8OHYlnjNWOsBUkhS0zKbfyg2GCfUF3W1gPRgV1cuG7G8AcS3nDB-4ZaKUW8s5BjDve-5qoQRORRtq1BGZLEEtgzPi7bdhdr8djxfT9am~c-EYB4S3Gx6TKZo6s8GEVN9Q7OzZuMFUH21T3s7HzMUgHWDqMOqBVRlhlAM~FpFinlPhPmjsi89Ls1fkHWuHX9rksABYQd~Ve8omf8E1J~LK7OGYCqDRqCvD0oQCX2Wcn1hyeOaer7htTeejrKxD6qlACCop9utRtUV1AYGi2wYdD5uQ-Uh54EgI10WPymykVjfcbn~UAX-iQsoWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
            </div>

            <div className="two">
                <div className="today">
                    <div className='square'></div>
                    <h2>Today's</h2>
                </div>
                <div className="flash">
                    <h1>Flash Sales</h1>
                    <div className="time">
                        <div className="days">
                            <span>Days</span>
                            <span>Hours</span>
                            <span>Minutes</span>
                            <span>Seconds</span>
                        </div>
                        <p id='demo'></p>
                    </div>
                </div>
            </div>

            <div className="three">
                <div className="cards">
                    {displayedItems.map(item => (
                        <div className="card">
                            {/* <i onClick={()=> {toggleWishlist(item)}}  className={`${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart' }`}></i> */}

                            <i onClick={()=>toggleWishlist(item)} className={`${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}></i>
                            <i onClick={() => setModal(item)} class="fa-solid fa-eye"></i>
                            <img width={270} height={260} src={item.image} alt="" />
                            <h3>{item.name}</h3>
                            <div className="price">
                                <li>{item.price} $</li>
                                <li className='old'>{item.oldPrice} </li>
                            </div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <span>({item.comments})</span>
                            <div className='persentage'>{item.persentage}%</div>
                            <button onClick={() => {notify(); addBasket(item) }}>Add to Cart</button>

                        </div>
                    ))}
                    <ToastContainer/>
                </div>
                {moreItems && (
                    <button className='all' onClick={handleViewMore}>View All Products</button>
                )}
            </div>

            <div className="four">
                <div className="today">
                    <div className='square'></div>
                    <h2>Categories</h2>

                </div>
                <h1>Browse By Category</h1>

                <div className='slider'>
                    <Slider {...settings}>
                        <div>
                            <div className='slide-icon'>
                                <i class="fa-solid fa-mobile-screen-button"></i>
                                <p>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className='slide-icon'>
                                <i class="fa-solid fa-computer"></i>
                                <p>Computers</p>
                            </div>
                        </div>
                        <div>
                            <div className='slide-icon'>
                                <i class="fa-regular fa-clock"></i>
                                <p>SmartWatch</p>
                            </div>
                        </div>
                        <div>
                            <div className='slide-icon'>
                                <i class="fa-solid fa-camera"></i>
                                <p>Camera</p>
                            </div>
                        </div>
                        <div>
                            <div className='slide-icon'>
                                <i class="fa-solid fa-headphones"></i>
                                <p>HeadPhones</p>
                            </div>
                        </div>
                        <div>
                            <div className='slide-icon'>
                                <i class="fa-solid fa-headset"></i>
                                <p>Gaming</p>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>

            <div className="five">
                <div className="today">
                    <div className='square'></div>
                    <h2>This Month</h2>
                </div>
                <h1>Best Selling Products</h1>

                <div className="cards">
                    {disaybledTwo.map(item => (
                        <div className="card">
                            <i onClick={()=> {toggleWishlist(item)}}  className={`${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart' }`}></i>
                            <i onClick={() => setModal(item)} class="fa-solid fa-eye"></i>
                            <img width={270} height={260} src={item.image} alt="" />
                            <h3>{item.name}</h3>
                            <div className="price">
                                <li>{item.price} $</li>
                                <li className='old'>{item.oldPrice} </li>
                            </div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <span>({item.comments})</span>

                            <button onClick={() => {notify(); addBasket(item) }}>Add to Cart</button>

                        </div>
                    ))}
                </div>
            </div>

            <div className="six">
                <div className="big">
                    <h4>Categories</h4>
                    <h1>Enhance Your <br /> Music Experience</h1>
                    <div className='circle'>
                        <div className='num'>
                            <p>23</p>
                            <p>Hours</p>
                        </div>
                        <div className='num'>
                            <p>05</p>
                            <p>Days</p>
                        </div>
                        <div className='num'>
                            <p>59</p>
                            <p>Minutes</p>
                        </div>
                        <div className='num'>
                            <p>35</p>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <button>Buy Now!</button>
                </div>
                <img width={670} src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1704067200&Signature=TH37vjPNx17JF~ehOXZ9KYwzlPqtv7HPOhgUr~W3xsOiPZ6dp3GTjw4L2NSimGhY1jZIdNevqu~hnX41QfDsYS99x9zOkS~OmWkmQWY4NhJxiEIwFuLPLP-ZzvkN1P3m-IK7mMTIL2Ou~PfrQuDS664i8rN5rYDuNgQAOH8C0PtHS01K4gbkB7Y9cDt5h9xHTiu8VEoXkEspGZ~ohg65Tf-qQ4VIEc~s3diS2Sts-VE8g2WMDciL80jQNR1JRHoYf6rqbPSVZG7V4~od3TCUG6kQ5tURjmB7tg9IJWxYZ~T3KMStQyV8fKZL0ZGw4pfD9MXBF-6VMJG31ZKNR3GKkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="err" />
            </div>



            <div className="seven">
                <div className="today">
                    <div className='square'></div>
                    <h2>Our Products</h2>
                </div>
                <h1>Explore Our Products</h1>

                <div className="cards">
                    {disaybledThree.map(item => (
                        <div className="card">
                            <i onClick={()=> {toggleWishlist(item)}}  className={`${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart' }`}></i>
                            <i onClick={() => setModal(item)} class="fa-solid fa-eye"></i>
                            <img width={270} height={260} src={item.image} alt="" />
                            <h3>{item.name}</h3>
                            <div className="price">
                                <li>{item.price} $</li>
                                <li className='old'>{item.oldPrice} </li>
                            </div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <span>({item.comments})</span>

                            <button onClick={() => {notify(); addBasket(item) }}>Add to Cart</button>

                        </div>
                    ))}

                </div>
            </div>

            <div className="eight">
                <div className="today">
                    <div className='square'></div>
                    <h2>Featured</h2>
                </div>
                <h1>New Arrival</h1>
                <div className="play"></div>
            </div>


<ScrollToTop/>


        </div>
    )
}

export default Home
