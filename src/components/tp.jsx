import React from 'react'
import { FooterLinksDataCol_1, FooterLinksDataCol_2, FooterLinksDataCol_3, socialIcons } from '../constants'
import razorpayLogo from '../assets/logo-dark.svg'
import footerCertificate1 from '../assets/footer-certificate-1.png'
import footerCertificate2 from '../assets/footer-certificate-2.jpg'

const myStyle = {
  background: 'linear-gradient(to right, #eef9fe, #edf7ff)'
};

const Footer = () => {
  return (
    <footer style={myStyle} className='-mt-[400px] md:-mt-[300px] pt-[300px] '>

      <div className='"w-10/12  pb-10 md:my-0 md:w-11/12 max-w-[1080px] mx-auto flex flex-col 
            space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row justify-betwee px-8'>

        {/* 1st column */}
        <div className='flex flex-col md:max-w-[340px] lg:max-w-[230px] mr-[181px]'>
          <img src={razorpayLogo} loading="lazy" width="120px" height="24px" />
          <p className='text-sm text-grayText my-3'>
            Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite.
            It gives you access to all payment modes including credit card, debit card, netbanking, UPI and
            popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>

          <p className='text-sm text-grayText my-3'>
            RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes.
            With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.
          </p>

          <p className='text-sm text-grayText my-3'>
            Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans -
            all from a single platform. Fast forward your business with Razorpay.
          </p>

          <p className='text-[0.625rem] text-grayText my-3'>
            Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks.
            Your RazorpayX powered account is provided by our partner bank,
            in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license.
          </p>

          <p className="font-mullish uppercase font-bold text-gray2">
            Subscribe to our newsletter
          </p>

          <form className="relative bg-white w-[260px] mt-2 mb-4">
            <input placeholder="Your email address"
              className="pr-16 border-gray-300 outline-lightBlue focus:outline-lightBlue placeholder:text-sm py-2
               px-4 border rounded-sm transition-all duration-200" />

            <button className="h-[90%] bg-white absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10 text-sm font-bold text-lightBlue300 
              flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200">
              Subscribe
              <svg viewBox="0 0 24 24" focusable="false" className="w-[14px] h-[14px] ml-3">
                <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
            </button>
          </form>

          <div className="flex items-start space-x-4">
            <img src={footerCertificate1} loading="lazy" width="92" height="40" className="cursor-pointer" />
            <img src={footerCertificate2} loading="lazy" width="122" height="80" className="cursor-pointer" />
          </div>

        </div>

        {/* column 2  */}
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between">
          {/* sub column - 1 */}
          <div className='grid grid-cols-1 gap-4 '>
            {FooterLinksDataCol_1.map(footerlink => (
              <div key={footerlink.id} className=''>
                <p className='text-md font-bold'>{footerlink.title}</p>
                <ul className='space-y-1'>
                  {footerlink.Links.map(link1 => (
                    <li key={link1} className='text-base font-medium text-lightBlue500 hover:text-grayBlue 
                      transition-all duration-200 cursor-pointer'>
                      {link1}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* sub column - 2  */}
          <div className='grid grid-cols-1 gap-4 '>
            {FooterLinksDataCol_2.map(footerlink => (
              <div key={footerlink.id} className=''>
                <p className='text-md font-bold'>{footerlink.title}</p>
                <ul className='space-y-1'>
                  {footerlink.Links.map(link1 => (
                    <li key={link1} className='text-base font-medium text-lightBlue500 hover:text-grayBlue 
                      transition-all duration-200 cursor-pointer'>
                      {link1}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* sub column - 3 */}
          <div className=' grid grid-cols-1 gap-4 '>
            {FooterLinksDataCol_3.map(footerlink => (
              <div key={footerlink.id} className=''>
                <p className='text-md font-bold'>{footerlink.title}</p>
                <ul className='space-y-1'>
                  {footerlink.Links.map(link1 => (
                    <li key={link1} className='text-base font-medium text-lightBlue500 hover:text-grayBlue 
                      transition-all duration-200 cursor-pointer'>
                      {link1}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">
                FIND US ONLINE
              </p>

              <ul className="flex space-x-4 items-center mt-4">
                {socialIcons.map(icon => (
                  <li key={icon.id} className="cursor-pointer">
                    <a>
                      <img src={icon.img} width="24" height="24" loading="lazy" />
                    </a>
                  </li>
                ))}
              </ul>

            </div>
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">
                REGD. OFFICE ADDRESS
              </p>
              <p className="font-mullish text-sm mt-4 whitespace-nowrap">
                Razorpay Software Private Limited, <br />1st Floor, SJR Cyber,
                <br />22 Laskar Hosur Road, Adugodi, <br />Bengaluru, 560030,
                <br />Karnataka, India <br />CIN: U72200KA2013PTC097389
              </p>
              <div className="font-mullish mt-6">
                <p className="text-sm">© Razorpay 2022</p>
                <p className="text-sm">All Rights Reserved</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer

