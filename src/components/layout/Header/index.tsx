import sellen from "@assets/sellen.png";
import { t } from "@utils/i18n";
import { MainHeadline, MainSlogan, SellenHead, StyledHeader } from "./styles";
const Header = () => {
    return <StyledHeader>
        <SellenHead src={sellen} alt={t("title")}></SellenHead>
        <MainHeadline>{t("title")}</MainHeadline>
        <MainSlogan>{t("slogan")}</MainSlogan>
    </StyledHeader>
}

export default Header;