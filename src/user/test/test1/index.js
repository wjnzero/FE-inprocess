import { StyledLogin, Frame9435, ViettelLogo20211, Frame9444, Sme, Frame48095475, NgNhp, Frame48095477, Frame48095471, EmailNgNhp, Rectangle4507, Frame48095472, MtKhu, Rectangle4508, Frame48095508, Frame48095454, Ngnhp, QunMtKhu, ChaCTiKhonNgKNgay, ChaCTiKhon, NNgKNgay } from "./styles";

export default function Login(props) {
  return (
    <StyledLogin>
      <Frame9435>
        <ViettelLogo20211 backgroundImage={`https://assets.rapidream.com/project/b9e77227-def5-4be9-83fb-2c5e7b09777a/assets/358d7636-a050-4c5f-a6e3-dafdafce7b01.png`} />
        <Frame9444>
          <Sme>SME</Sme>
        </Frame9444>
      </Frame9435>
      <Frame48095475>
        <NgNhp>Đăng nhập</NgNhp>
        <Frame48095477>
          <Frame48095471>
            <EmailNgNhp>Email đăng nhập *</EmailNgNhp>
            <Rectangle4507 />
          </Frame48095471>
          <Frame48095472>
            <MtKhu>Mật khẩu *</MtKhu>
            <Rectangle4508 />
          </Frame48095472>
        </Frame48095477>
        <Frame48095508>
          <Frame48095454>
            <Ngnhp>Đăng nhập</Ngnhp>
          </Frame48095454>
          <QunMtKhu>Quên mật khẩu</QunMtKhu>
        </Frame48095508>
      </Frame48095475>
      <ChaCTiKhonNgKNgay>
        <ChaCTiKhon>Chưa có tài khoản?</ChaCTiKhon>
        <NNgKNgay>Đăng ký ngay</NNgKNgay>
      </ChaCTiKhonNgKNgay>
    </StyledLogin>
  );
}
