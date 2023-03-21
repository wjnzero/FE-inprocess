import './login.css';
import eye from "../../../img/eye.svg";
import eye_slash from "../../../img/eye-slash.svg";
import vt_logo from "../../../img/Viettel_logo_2021 1.png";
import {useState} from "react";
function Login() {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return (
        <div className="body">
            <div className="login-banner">
                <img src={vt_logo} alt={"banner"}/>
                <div>
                <span>SME</span>
                </div>
            </div>
            <div className="content">
                <div className="title-login">Đăng nhập</div>
                <div className="form-body">
                    <form>
                        <div className="subtitle-login">Email đăng nhập <span style={{color:'#EF0032'}}>*</span></div>
                        <div className="input">
                            <input type="email" style={{width:"100%"}}/>
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
                        <div className="form-button">
                            <input type="submit" className="submit-button" value="Đăng nhập"/>
                            <span>Quên mật khẩu</span>
                        </div>

                    </form>
                </div>
            </div>
            <div className="signup-redirect">
                <div className="title1">Chưa có tài khoản?</div>
                <a href="google.com" className="link"> Đăng ký ngay</a>
            </div>
        </div>
    );
}
export default Login;