import { useState } from "react";
import "./App.css";
import rasm from "./assets/Group.svg";
import image from "./assets/IMAGE.png";
import image1 from "./assets/IMAGE1.png";
import image2 from "./assets/IMAGE2.png";
import image3 from "./assets/IMAGE3.png";
import image4 from "./assets/lg.png";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="max-w-[1200px] mx-auto py-[30px]">
          <nav className="flex items-center justify-between">
            <img src={rasm} alt="LOGO" />
            <ul className="flex items-center gap-x-10">
              <li className="text-[14px]">Home</li>
              <li className="text-[14px]">Latest</li>
              <li className="text-[14px]">About</li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="japan">
          <div className="max-w-[1200px] mx-auto pt-[60px]">
            <div className="wrapper flex items-start gap-x-[51px]">
              <img src={image} alt="image " />
              <div>
                <p className="text-[#999999] text-[10px] mb-[18px]">
                  Illustration
                </p>
                <h1 className="text-[36px] uppercase text-black mb-[27px]">
                  Japan House opens in mountainside to foster peak creativity.
                </h1>

                <p className="text-[#666666] text-[16px] mb-7">
                  Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad
                  timeam accusata, hinc justo falli id eum, ferri novum molestie
                  eos cu.
                </p>
                <h3 className="font-bold text-[10px] uppercase">
                  BY Reta Torphy
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[34px]">
          <div className="max-w-[1200px] mx-auto ">
            <div className="wrapper">
              <div className="flex items-center gap-x-5 mb-6">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image1} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Photography
                    </p>

                    <h5 class="mb-2 text-[20px] font-normal tracking-tight text-[#000000] dark:text-white">
                      Helmut Lang celebrates taxi drivers worldwide in latest
                      campaign
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image1} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Photography
                    </p>

                    <h5 class="mb-2 text-[20px] font-normal tracking-tight text-[#000000] dark:text-white">
                      Helmut Lang celebrates taxi drivers worldwide in latest
                      campaign
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image1} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Photography
                    </p>

                    <h5 class="mb-2 text-[20px] font-normal tracking-tight text-[#000000] dark:text-white">
                      Helmut Lang celebrates taxi drivers worldwide in latest
                      campaign
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-5 mb-6">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image1} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Photography
                    </p>

                    <h5 class="mb-2 text-[20px] font-normal tracking-tight text-[#000000] dark:text-white">
                      Helmut Lang celebrates taxi drivers worldwide in latest
                      campaign
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image1} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Photography
                    </p>

                    <h5 class="mb-2 text-[20px] font-normal tracking-tight text-[#000000] dark:text-white">
                      Helmut Lang celebrates taxi drivers worldwide in latest
                      campaign
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image1} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Photography
                    </p>

                    <h5 class="mb-2 text-[20px] font-normal tracking-tight text-[#000000] dark:text-white">
                      Helmut Lang celebrates taxi drivers worldwide in latest
                      campaign
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-[90px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="wrapper">
              <p className="text-[#999999] text-[10px] mb-[30px]">
                LATEST POSTS
              </p>
              <div className="flex items-center gap-x-[10px] mb-[50px]">
                <div class="max-w-[305px] px-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image2} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Illustration
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      Japan House opens in mountainside to foster peak
                      creativity.
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>

                <div class="max-w-[305px] px-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image2} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Illustration
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      Japan House opens in mountainside to foster peak
                      creativity.
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>

                <div class="max-w-[305px] px-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image2} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Illustration
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      Japan House opens in mountainside to foster peak
                      creativity.
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>

                <div class="max-w-[305px] px-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image2} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Illustration
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      Japan House opens in mountainside to foster peak
                      creativity.
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-[10px] mb-[50px]">
                <div class="max-w-[305px] px-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image2} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Illustration
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      Japan House opens in mountainside to foster peak
                      creativity.
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>

                <div class="max-w-[305px] px-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image2} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Illustration
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      Japan House opens in mountainside to foster peak
                      creativity.
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>

                <div class="max-w-[305px] px-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image2} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Illustration
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      Japan House opens in mountainside to foster peak
                      creativity.
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>

                <div class="max-w-[305px] px-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image2} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Illustration
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      Japan House opens in mountainside to foster peak
                      creativity.
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400">
                      Alessandra Ortiz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-[1200px] mx-auto">
            <div className="wrapper">
              <p className="text-[#999999] text-[10px] mb-[30px] uppercase">
                featured POSTS
              </p>

              <div className="flex items-center gap-x-[10px] mb-5">
                <div class="max-w-[610px] px-[10px] py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image3} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Graphic Design
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      A Brief History of the FIFA World Cup Logo
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400 uppercase">
                      By Clem Onojeghuo
                    </p>
                  </div>
                </div>

                <div class="max-w-[610px] px-[10px] py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image3} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Graphic Design
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      A Brief History of the FIFA World Cup Logo
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400 uppercase">
                      By Clem Onojeghuo
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-[10px] mb-5">
                <div class="max-w-[610px] px-[10px] py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image3} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Graphic Design
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      A Brief History of the FIFA World Cup Logo
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400 uppercase">
                      By Clem Onojeghuo
                    </p>
                  </div>
                </div>

                <div class="max-w-[610px] px-[10px] py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={image3} alt="" />
                  </a>
                  <div class="p-5">
                    <p className="text-[#999999] text-[10px] mb-[18px]">
                      Graphic Design
                    </p>

                    <h5 class="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
                      A Brief History of the FIFA World Cup Logo
                    </h5>

                    <p class="mb-3 text-[10px] font-bold text-[#000] dark:text-gray-400 uppercase">
                      By Clem Onojeghuo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#141414] px-[120px] py-[93px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="wrapper">
            <div className="flex items-center gap-x-[15px] border-b-[1px] border-[#4D4D4D] mb-[60px] pb-[62px]">
              <img src={image4} alt="" />
              <p className="text-[#666666] text-[10px]">
                © 2018 Noiceland™, all rights reserved
              </p>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#666666] text-[10px] mb-5">Categories</p>
                <div className="flex items-center gap-x-[92px]">
                  <div>
                    <p className="text-[#fff] text-[14px] mb-4">Animation</p>
                    <p className="text-[#fff] text-[14px] mb-4">
                      Interactive Design
                    </p>
                  </div>

                  <div>
                    <p className="text-[#fff] text-[14px] mb-4">Animation</p>
                    <p className="text-[#fff] text-[14px] mb-4">
                      Interactive Design
                    </p>
                  </div>

                  <div>
                    <p className="text-[#fff] text-[14px] mb-4">Animation</p>
                    <p className="text-[#fff] text-[14px] mb-4">
                      Interactive Design
                    </p>
                  </div>

                  <div>
                    <p className="text-[#fff] text-[14px] mb-4">Animation</p>
                    <p className="text-[#fff] text-[14px] mb-4">
                      Interactive Design
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[#666666] text-[10px] mb-5">
                  Subscribe to newsletter
                </p>
                <div className="flex items-center">
                  <input
                    type="email"
                    className="py-[18px] px-6"
                    placeholder="Email address"
                  />

                  <button className="uppercase text-white py-[18px] px-6 bg-[#000]">
                    send
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <div className="flex items-start gap-x-[92px]">
                <div>
                  <p className="text-[#666666] text-[10px] mb-5 uppercase">
                    Information
                  </p>
                  <p className="text-[#fff] text-[14px] mb-4">about</p>
                  <p className="text-[#fff] text-[14px] mb-4">contact</p>
                  <p className="text-[#fff] text-[14px] mb-4">terms</p>
                </div>

                <div>
                  <p className="text-[#666666] text-[10px] mb-5 uppercase">
                    follow us
                  </p>
                  <p className="text-[#fff] text-[14px] mb-4">instagram</p>
                  <p className="text-[#fff] text-[14px] mb-4">facebook</p>
                  <p className="text-[#fff] text-[14px] mb-4">twitter</p>
                </div>

                <div>
                  <p className="text-[#666666] text-[10px] mb-5 uppercase">
                    Template
                  </p>
                  <p className="text-[#fff] text-[14px] mb-4">
                    Image License Info
                  </p>
                  <p className="text-[#fff] text-[14px] mb-4">
                    Powered by Webflow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
