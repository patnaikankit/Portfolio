import React from "react";
import LogoImg from "../../public/ankit-logo.png"
import Image from "next/image";
function Logo() {
  return (
    <Image src={LogoImg.src} alt="logo" width={150} height={150}>
    </Image>
  );
}

export default Logo;
