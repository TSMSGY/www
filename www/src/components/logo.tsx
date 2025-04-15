import { useTheme } from "@/providers/theme-provider"
import { useEffect, useState } from "react";

const lightLogo = "../../public/logo-white.svg"
const darkLogo = "../../public/logo-dark.svg"

export const Logo: React.FC = () => {
  const {theme} = useTheme();
  const [src, setSrc] = useState<string>(lightLogo);

  useEffect(() => {
  setSrc(theme === "dark" ? lightLogo : darkLogo);

  }, [theme])

  return (
  <img
      src={src}
      className="w-6 aspect-square"
  />
  )

}
