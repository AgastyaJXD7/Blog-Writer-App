import Lottie from "react-lottie"
import animationData from './HomePageLottie1.json'

function HomePageLottie1() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

return (
  <div>
    <Lottie 
    options={defaultOptions}
      height={250}
      width={200}
    />
  </div>
);
}

export default HomePageLottie1