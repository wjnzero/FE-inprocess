import './signup2.css';
import banner from "../../../img/banner.png";
import eye from "../../../img/eye.svg";
import eye_slash from "../../../img/eye-slash.svg";
import {useState} from "react";
function SignUp2() {
    const [pwd, setPwd, otp] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return (
        <div className="signup-container">
            <img src={banner} className="banner" alt="banner"/>
            <div className="content">
                <div className="title-login">Đăng ký</div>
                <div className="form-body">
                    <form>
                        <div className="subtitle-login">Nhập email đăng ký <span style={{color:'#EF0032'}}>*</span></div>
                        <div className="input">
                            <input type="email" style={{background:'#F5F5F5',width:"100%"}}  disabled={true} value="abc"/>
                        </div>
                        <div className="subtitle-login" style={{marginTop:'39px'}}>Mật khẩu <span style={{color:'#EF0032'}}>*</span></div>
                        <div className="input">
                            <input
                                name="pwd"
                                placeholder="Enter Password"
                                type={isRevealPwd ? "text" : "password"}
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                            />
                            <img
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                src={isRevealPwd ? eye_slash : eye}
                                alt="eye"
                                onClick={() => setIsRevealPwd(prevState => !prevState)}
                            />
                        </div>
                        <div className="subtitle-login" style={{marginTop:'39px'}}>Nhập mã OTP <span style={{color:'#EF0032'}}>*</span></div>
                        <div className="input">
                            <input
                                name="otp"
                                type="text"
                                value={otp}
                                style={{width:"75%"}}
                                onChange={e => setPwd(e.target.value)}
                            />
                            <a className="resent-otp" href="google.com">Gửi lại OTP</a>
                        </div>
                        <input type="submit" className="submit-button" value="Đăng ký"/>
                    </form>
                </div>
            </div>
            <div className="login-redirect">
                <div className="title1">Đã có tài khoản?</div>
                <a href="google.com" className="link"> Đăng nhập ngay</a>
            </div>
        </div>
    );
}
export default SignUp2;