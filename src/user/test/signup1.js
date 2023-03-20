import './signup1.css';
import banner from "../../img/banner.png";
export default function SignUp1(props) {
    return (
        <div className="signup-container">
            <img src={banner} className="banner" alt="banner"/>
            <div className="content">
                <div className="title-login">Đăng ký</div>
                <div className="form-body">
                    <div className="subtitle-login">Nhập email đăng ký <span style={{color:'#EF0032'}}>*</span></div>
                    <form>
                        <input type="email" className="input-mail"/>
                        <input type="submit" className="submit-button" value="Gửi OTP"/>
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
//aa