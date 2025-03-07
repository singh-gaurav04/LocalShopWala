// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import logo from "../../assets/logo.png";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

// const Login_page = () => {
//   const [value, setValue] = useState("");

//   return (
//     <div className="h-screen max-w-screen-xl mx-auto flex justify-center items-center  overflow-x-hidden "
//     // style={{
//     //   backgroundImage:
//     //     "url('https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//     // }}
//     >
      

//       <motion.div
//         className=" border-4 border-gray-300 px-8 py-12 shadow-2xl rounded-[40px] relative  shadow-[#85BDD7E0] "
//         initial={{ opacity: 0, y: -200 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <div className="img-container my-4 flex justify-center">
//           <img src={logo} alt="logo" width="100px" height="100px" className="" />
//         </div>
//         <div className="text-2xl font-extrabold  text-center text-[#1089D3]">Welcome to LocalShopWala</div>
//         <div className="my-[20px] flex justify-center">
//           <PhoneInput
//             className="border-none py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-lg 
//                 shadow-[#cff0ff] placeholder:text-[rgb(170,170,170)] focus:outline-none focus:border-[#12b1d1] focus:border-x-2 focus:border-solid"
//             placeholder="Enter phone number"
//             value={value}
//             onChange={setValue}
//           />
//         </div>
//         <div className="flex justify-center ">
//           <motion.button
//             type="submit"
//             className="bg-gradient-to-l from-cyan-500 to-blue-500 block py-[10px] px-[20px] rounded-[10%] text-white"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//           >
//             Send OTP
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login_page;


import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import OtpInput from "otp-input-react";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"; // Updated import
import { toast, Toaster } from "react-hot-toast";


const Login_page = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  // Initialize reCAPTCHA v3
function onCaptchVerify() {
  if (!window.recaptchaVerifier) {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal", // Invisible for v3
          callback: (response) => {
            console.log("reCAPTCHA verified:", response);
          },
          "expired-callback": () => {
            toast.error("reCAPTCHA expired. Please try again.");
          },
        },
        auth // Ensure `auth` is initialized correctly
      );
    } catch (error) {
      console.error("Error initializing reCAPTCHA:", error);
    }
  }
}

const onSignup = () => {
  if (!phone || phone.length < 10) {
    toast.error("Please enter a valid phone number.");
    return;
  }

  setLoading(true);

  // Ensure reCAPTCHA is initialized
  onCaptchVerify(); 

  const appVerifier = window.recaptchaVerifier;

  // Format phone number correctly (add +countryCode to the number)
  const formattedPhone = `+${phone}`;

  signInWithPhoneNumber(auth, formattedPhone, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setLoading(false);
      setShowOTP(true);
      toast.success("OTP sent successfully!");
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      toast.error("Failed to send OTP. Please try again.");
    });
};

  // Verify OTP
  const onOTPVerify = () => {
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("Invalid OTP. Please try again.");
      });
  };

  return (
    <div className="h-screen max-w-screen-xl mx-auto flex justify-center items-center overflow-x-hidden">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div id="recaptcha-container"></div> {/* reCAPTCHA container */}

      <motion.div
        className="border-4 border-gray-300 px-8 py-12 shadow-2xl rounded-[40px] relative shadow-[#85BDD7E0]"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="img-container my-4 flex justify-center">
          <img src={logo} alt="logo" width="100px" height="100px" className="" />
        </div>

        {user ? (
          <h2 className="text-center text-[#1089D3] font-extrabold text-2xl">
            👍 Login Successful!
          </h2>
        ) : (
          <>
            <div className="text-2xl font-extrabold text-center text-[#1089D3]">
              Welcome to LocalShopWala
            </div>

            {!showOTP ? (
              <>
                <div className="my-[20px] flex justify-center">
                  <PhoneInput
                    className="border-none py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-lg shadow-[#cff0ff] placeholder:text-[rgb(170,170,170)] focus:outline-none focus:border-[#12b1d1] focus:border-x-2 focus:border-solid"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                  />
                </div>

                <div className="flex justify-center">
                  <motion.button
                    onClick={onSignup}
                    className="bg-gradient-to-l from-cyan-500 to-blue-500 block py-[10px] px-[20px] rounded-[10%] text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {loading ? "Sending..." : "Send OTP"}
                  </motion.button>
                </div>
              </>
            ) : (
              <>
                <div className="text-center font-bold text-xl text-[#1089D3] my-4">
                  Enter the OTP sent to your phone
                </div>

                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="otp-container"
                />

                <div className="flex justify-center mt-4">
                  <motion.button
                    onClick={onOTPVerify}
                    className="bg-gradient-to-l from-cyan-500 to-blue-500 block py-[10px] px-[20px] rounded-[10%] text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </motion.button>
                </div>
              </>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Login_page;
